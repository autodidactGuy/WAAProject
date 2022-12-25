package edu.miu.alumni.service.impl;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.exceptions.InvalideUserOperationExceptions;
import edu.miu.alumni.model.*;
import edu.miu.alumni.repository.*;
import edu.miu.alumni.security.JWTHelper;
import edu.miu.alumni.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class LoginServiceImpl implements LoginService {
    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    private ModelMapper modelMapper;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JWTHelper jwtHelper;

    @Autowired
    private RoleRepository repository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private StateRepository stateRepository;



    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        LoginResponse loginResponse = new LoginResponse();
        //find user is locked end or not
        String email1 = loginRequest.getEmail();
        User userByEmailEquals1 = userRepository.findUserByEmailEquals(email1);
        LoginResponse loginResponse1 = checkifUserIsLocked(loginResponse, userByEmailEquals1);
        if (loginResponse1 != null) return loginResponse1;


        try {
            var result = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                            loginRequest.getPassword())

            );
        } catch (BadCredentialsException e) {
            log.info("Bad Credentials");
            //caculate the user attempt faied times;
            loginResponse.setErrorMeg(Consts.INVALIE_USER_OR_PASSWORD);
            String email = loginRequest.getEmail();
            try{
                increateFaiedAttemptTime(loginResponse, email);
            }catch (Exception ei){
                return loginResponse;
            }
            return loginResponse;
        }


        clearFailedAttemptTimes(userByEmailEquals1);

        final String accessToken = jwtHelper.generateToken(loginRequest.getEmail());
        final String refreshToken = jwtHelper.generateRefreshToken(loginRequest.getEmail());
        UserDto currentLoginUserInfo = modelMapper.map(userByEmailEquals1, UserDto.class);
        var loginResponse2 = new LoginResponse(accessToken, refreshToken,currentLoginUserInfo);
        return loginResponse2;
    }

    private static LoginResponse checkifUserIsLocked(LoginResponse loginResponse, User userByEmailEquals1) {
        if(userByEmailEquals1.getAccessFailedCount()>=5){
            //means user has been locked
            Date lockedTime = userByEmailEquals1.getLockedTime();
            //check if the lock is end
            boolean isLockedEnded = userByEmailEquals1.getLockedTime()==null?true:new Date().getTime()-lockedTime.getTime()>15*1000*60*60;
            if(!isLockedEnded){
                loginResponse.setErrorMeg("your account is still been locked");
                return loginResponse;
            }else{
                userByEmailEquals1.setLockoutEnd(true);
            }
        }
        return null;
    }


    void increateFaiedAttemptTime(LoginResponse loginResponse, String email) {
        User userByEmailEquals = userRepository.findUserByEmailEquals(email);
        int accessFailedCount = userByEmailEquals.getAccessFailedCount();

        if(accessFailedCount>=5){
            userByEmailEquals.setLockedTime(new Date());
            userByEmailEquals.setLockoutEnd(false);
            loginResponse.setErrorMeg(Consts.USER_LOCKED_INFO);

        }else{
            userByEmailEquals.setAccessFailedCount(accessFailedCount+1);
        }
        userRepository.save(userByEmailEquals);
    }

    @Transactional
    void clearFailedAttemptTimes(User u) {
        u.setAccessFailedCount(0);
        userRepository.save(u);
    }


    @Override
    public SignupResponse signUp(SignupRequest signUpRequest) {
        String email = signUpRequest.getEmail();

        User userByEmailEquals = userRepository.findUserByEmailEquals(email);
        if(userByEmailEquals!=null){
            return new SignupResponse(Consts.THIS_USER_EMAIL_NOT_VALID);
        }

        // Create new user's account
        User user =  new User(email,
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getFirstname(),signUpRequest.getLastname(),
                signUpRequest.getBirthday(),signUpRequest.getGender(),
                signUpRequest.getNickname(),signUpRequest.getPhone()
        );;

        String role = signUpRequest.getRole();
        List<Role> roles = new ArrayList<>();

        if (role == null) {
            Role userRole = repository.findRoleByName(Consts.DEFAULT_ROLE);
            roles.add(userRole);
        } else {
                switch (role) {
                    case Consts.ROLE_ADMIN:
                       Role adminRole = repository.findRoleByName(Consts.ROLE_ADMIN);
                        roles.add(adminRole);
                        break;
                    case Consts.ROLE_STUDENT:
                        Role userRole = repository.findRoleByName(Consts.ROLE_STUDENT);
                        roles.add(userRole);
                        user =  new Student(email,
                                encoder.encode(signUpRequest.getPassword()),
                                signUpRequest.getFirstname(),signUpRequest.getLastname(),
                                signUpRequest.getBirthday(),signUpRequest.getGender(),
                                signUpRequest.getNickname(),signUpRequest.getPhone(),signUpRequest.getMarjor()
                        );
                        break;

                    case Consts.ROLE_FACULT:
                        Role facultyRole = repository.findRoleByName(Consts.ROLE_FACULT);
                        roles.add(facultyRole);
                        user =  new Faculty(email,
                                encoder.encode(signUpRequest.getPassword()),
                                signUpRequest.getFirstname(),signUpRequest.getLastname(),
                                signUpRequest.getBirthday(),signUpRequest.getGender(),
                                signUpRequest.getNickname(),signUpRequest.getPhone()
                        );
                        break;
                    default:
                        Role defaultRole = repository.findRoleByName(Consts.DEFAULT_ROLE);
                        roles.add(defaultRole);
                }

        }


        City userCity = cityRepository.findById_CityNameAndId_StateCode(signUpRequest.getCityCode(),signUpRequest.getStateCode());
        State state = stateRepository.findById(signUpRequest.getStateCode()).get();
        user.setRole(roles);
        user.setCity(userCity);
        user.setSrcLogo(signUpRequest.getSrcLogo());

        Profile pf = new Profile();
        Profile save = profileRepository.save(pf);
        user.setProfile(save);
        userRepository.save(user);

        return new SignupResponse(Consts.USER_REGIST_SUCCESS);
    }

    @Override
    public LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        boolean isRefreshTokenValid = jwtHelper.validateToken(refreshTokenRequest.getRefreshToken());
        if (isRefreshTokenValid) {
            final String accessToken = jwtHelper.generateToken(jwtHelper.getSubject(refreshTokenRequest.getRefreshToken()));
            var loginResponse = new LoginResponse(accessToken, refreshTokenRequest.getRefreshToken());
            return loginResponse;
        }
        return new LoginResponse();
    }


}

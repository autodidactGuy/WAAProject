package edu.miu.alumni.service.impl;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.model.*;
import edu.miu.alumni.repository.*;
import edu.miu.alumni.security.JWTHelper;
import edu.miu.alumni.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        try {
            var result = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                            loginRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            log.info("Bad Credentials");
        }

        final String accessToken = jwtHelper.generateToken(loginRequest.getEmail());
        final String refreshToken = jwtHelper.generateRefreshToken(loginRequest.getEmail());
        var loginResponse = new LoginResponse(accessToken, refreshToken);
        return loginResponse;
    }


    @Override
    public SignupResponse signUp(SignupRequest signUpRequest) {

        // Create new user's account
        User user =  new User(signUpRequest.getEmail(),
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
                        user =  new Student(signUpRequest.getEmail(),
                                encoder.encode(signUpRequest.getPassword()),
                                signUpRequest.getFirstname(),signUpRequest.getLastname(),
                                signUpRequest.getBirthday(),signUpRequest.getGender(),
                                signUpRequest.getNickname(),signUpRequest.getPhone(),signUpRequest.getMarjor()
                        );
                        break;

                    case Consts.ROLE_FACULT:
                        Role facultyRole = repository.findRoleByName(Consts.ROLE_FACULT);
                        roles.add(facultyRole);
                        user =  new Faculty(signUpRequest.getEmail(),
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

        Profile pf = new Profile();
        Profile save = profileRepository.save(pf);
        user.setProfile(save);
        userRepository.save(user);

        return new SignupResponse("User registered successfully!");
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

package edu.miu.alumni.service.impl;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.entity.Role;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.SignupRequest;
import edu.miu.alumni.model.SignupResponse;
import edu.miu.alumni.repository.RoleRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.security.JWTHelper;
import edu.miu.alumni.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;



    @Autowired
    PasswordEncoder encoder;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JWTHelper jwtHelper;

    @Autowired
    private RoleRepository repository;





    @Override
    public SignupResponse signUp(SignupRequest signUpRequest) {

        // Create new user's account
        User user = new User(signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getFirstName(),signUpRequest.getLastName());

        Set<String> strRoles = signUpRequest.getRole();
        List<Role> roles = new ArrayList<>();

        if (strRoles == null) {
            Role userRole = repository.findRoleByName(Consts.DEFAULT_ROLE);
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case Consts.ROLE_ADMIN:
                        Role adminRole = repository.findRoleByName(Consts.ROLE_ADMIN);
                        roles.add(adminRole);
                        break;
                    case Consts.ROLE_USER:
                        Role userRole = repository.findRoleByName(Consts.ROLE_USER);
                        roles.add(userRole);
                        break;

                    case Consts.ROLE_FACULT:
                        Role facultyRole = repository.findRoleByName(Consts.ROLE_FACULT);
                        roles.add(facultyRole);

                        break;
                    default:
                        Role defaultRole = repository.findRoleByName(Consts.DEFAULT_ROLE);
                        roles.add(defaultRole);
                }
            });
        }

        user.setRole(roles);
        userRepository.save(user);
        return new SignupResponse("User registered successfully!");
    }
}

package edu.miu.alumni.security;

import edu.miu.alumni.entity.User;
import edu.miu.alumni.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("userDetailsService")
@Transactional
public class AlumniUserDetailsService  implements UserDetailsService {


    private final UserRepository userRepo;

    public AlumniUserDetailsService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findUserByEmailEquals(username);
        var userDetails = new AlumniUserDetails(user);
        return userDetails;
    }
}

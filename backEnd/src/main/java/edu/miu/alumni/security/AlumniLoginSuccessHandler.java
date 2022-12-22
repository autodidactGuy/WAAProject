package edu.miu.alumni.security;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class AlumniLoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    @Autowired
    private UserService<User, UserDto,Long> userService;
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws ServletException, IOException {
        AlumniUserDetails userDetails =  (AlumniUserDetails) authentication.getPrincipal();
        String userEmail = userDetails.getUsername();
        int accessFailedCount = userDetails.getAccessFailedCount();
        if(accessFailedCount>0){
            userService.resetFailedAttempts(userEmail);
        }
        super.onAuthenticationSuccess(request, response, authentication);
    }
}

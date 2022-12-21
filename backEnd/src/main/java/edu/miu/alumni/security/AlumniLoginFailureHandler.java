package edu.miu.alumni.security;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import java.io.IOException;
@Component
public class AlumniLoginFailureHandler extends SimpleUrlAuthenticationFailureHandler{

    @Autowired
    private UserService <User, UserDto,Long> userService;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws ServletException, IOException {
        String email = request.getParameter("email");
        User user = userService.getUserByEmail(email);
        if (user != null) {
            if (user.isActivated() && user.isLockoutEnd()) {
                if (user.getAccessFailedCount() < Consts.MAX_FAILED_ATTEMPTS - 1) {
                    System.out.println("======================");
//                    userService.increaseFailedAttempts(user);
                } else {
//                    userService.lock(user);
                    exception = new LockedException("Your account has been locked due to 3 failed attempts."
                            + " It will be unlocked after 24 hours.");
                }
            } else if (!user.isLockoutEnd()) {
//                if (userService.unlockWhenTimeExpired(user)) {
//                    exception = new LockedException("Your account has been unlocked. Please try to login again.");
//                }
            }

        }

        super.setDefaultFailureUrl("/login?error");
        super.onAuthenticationFailure(request, response, exception);
    }
}

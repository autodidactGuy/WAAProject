package edu.miu.alumni.service;

import edu.miu.alumni.entity.User;
import edu.miu.alumni.entity.Validate;
import org.springframework.mail.SimpleMailMessage;

public interface ValidateService extends  BasicService<Validate, Validate,Long> {
    void sendPasswordResetEmail(SimpleMailMessage passwordResetEmail);

    void sendValidationEmail(String appUrl, User userByEmail,String email);

}

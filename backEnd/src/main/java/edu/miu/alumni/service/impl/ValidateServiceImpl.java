package edu.miu.alumni.service.impl;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.entity.Validate;
import edu.miu.alumni.repository.EducationRepository;
import edu.miu.alumni.repository.ValidateRepository;
import edu.miu.alumni.service.UserService;
import edu.miu.alumni.service.ValidateService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ValidateServiceImpl extends  BasicServiceImpl<Validate,Validate,Long, ValidateRepository> implements ValidateService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private UserService<User, UserDto,Long> userService;

    @Autowired
    public ValidateServiceImpl(ValidateRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }


    @Value("${spring.mail.username}")
    private String from;



    @Override
    public void sendPasswordResetEmail(SimpleMailMessage passwordResetEmail) {

        javaMailSender.send(passwordResetEmail);
    }

    @Override
    public void sendValidationEmail(String appUrl, User userByEmail,String email) {

        SimpleMailMessage passwordResetEmail = new SimpleMailMessage();
        Validate validate = new Validate();

        validate.setUserId(userByEmail.getId());
        validate.setEmail(email);
        validate.setResetToken( UUID.randomUUID().toString());
        validate.setTokenIssuedTime(new java.util.Date());
        repository.save(validate);


        passwordResetEmail.setFrom(from);
        passwordResetEmail.setTo(email);
        passwordResetEmail.setSubject("alumin system reset password");
        passwordResetEmail.setText("you are trying to reset password,please click the link below: \n" + appUrl + "/validate/reset?token=" + validate.getResetToken());
        sendPasswordResetEmail(passwordResetEmail);
    }

    @Override
    public void resetPasswordByResetToken(String token) {
        Validate byResetToken = repository.findByResetToken(token);
        Long userId = byResetToken.getUserId();

        userService.resetPassword(Consts.INITIAL_PASSWORD,userId);
    }


}

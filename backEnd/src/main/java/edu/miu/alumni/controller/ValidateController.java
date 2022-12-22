package edu.miu.alumni.controller;

import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.entity.Validate;
import edu.miu.alumni.service.UserService;
import edu.miu.alumni.service.ValidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/validate")
public class ValidateController  {
    @Autowired
    private ValidateService validateService;

    @Autowired
    private UserService<User, UserDto,Long> userService;



    @PostMapping(value = "/sendValidationEmail")
    public ResponseEntity<?> sendValidationEmail(@RequestParam("email") String email,
                                              HttpServletRequest request){
        User userByEmail = userService.getUserByEmail(email);
        String appUrl = request.getScheme() + "://" + request.getServerName();
        if (userByEmail == null){
            return    new  ResponseEntity<>("user email not valid", HttpStatus.NOT_FOUND);
        }
        validateService.sendValidationEmail(appUrl,userByEmail,email);

        return new ResponseEntity<>("sucessfully send email",HttpStatus.OK);
    }

}

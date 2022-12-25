package edu.miu.alumni.controller;

import edu.miu.alumni.consts.Consts;
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
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin
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
        String appUrl = request.getScheme() + "://" + request.getServerName()+Consts.DEFUALT_PORT;
        if (userByEmail == null){
            return    new  ResponseEntity<>("user email not valid", HttpStatus.NOT_FOUND);
        }
        validateService.sendValidationEmail(appUrl,userByEmail,email);

        return new ResponseEntity<>("sucessfully send email",HttpStatus.OK);
    }

    @GetMapping(value = "/reset")
    public ResponseEntity<?> giveResetedPasword(@RequestParam String token){
//        User userByEmail = userService.getUserByEmail(email);
//        String appUrl = request.getScheme() + "://" + request.getServerName();
//        if (userByEmail == null){
//            return    new  ResponseEntity<>("user email not valid", HttpStatus.NOT_FOUND);
//        }
        validateService.resetPasswordByResetToken(token);

        return new ResponseEntity<>("you have success reset the password to "+ Consts.INITIAL_PASSWORD,HttpStatus.OK);
    }

}

package edu.miu.alumni.controller;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.entity.Validate;
import edu.miu.alumni.model.ForgotPassword;
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

        String appUrl ="";

        String serverName = request.getServerName();
        if(serverName.equals("localhost"))
        {
            //Dev environment
            appUrl = request.getScheme() + "://" + request.getServerName()+":3000";
        }
        else
        {
            // Prod environment
            appUrl = "https://waa.bhtechnology.fr";
        }

        if (userByEmail == null){
            return    new  ResponseEntity<>("user email not valid", HttpStatus.NOT_FOUND);
        }
        validateService.sendValidationEmail(appUrl,userByEmail,email);

        return new ResponseEntity<>("sucessfully send email",HttpStatus.OK);
    }

    @PostMapping(value = "/reset")
    public ResponseEntity<?> giveResetedPasword(@RequestBody ForgotPassword forgotPassword){
//        User userByEmail = userService.getUserByEmail(email);
//        String appUrl = request.getScheme() + "://" + request.getServerName();
//        if (userByEmail == null){
//            return    new  ResponseEntity<>("user email not valid", HttpStatus.NOT_FOUND);
//        }
        validateService.resetPasswordByResetToken(forgotPassword);

        return new ResponseEntity<>("you have success reset the password to "+ Consts.INITIAL_PASSWORD,HttpStatus.OK);
    }

}

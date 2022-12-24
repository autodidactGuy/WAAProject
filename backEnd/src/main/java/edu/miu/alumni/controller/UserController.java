package edu.miu.alumni.controller;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.*;
import edu.miu.alumni.service.LoginService;
import edu.miu.alumni.service.TagService;
import edu.miu.alumni.service.UserService;
import org.apache.coyote.Response;
import org.apache.http.protocol.ResponseServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import  java.util.*;
@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController   extends BaseController<User, UserDto,Long> {

    @Autowired
    private  LoginService uaaService;

    @Autowired
    private TagService tagService;
    @Autowired
    private UserService<User,UserDto,Long> bs;

    @Autowired
    public UserController(UserService<User, UserDto, Long> bs) {
        super(bs);
        this.bs = bs;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
        var signUpResponse = uaaService.signUp(signUpRequest);

        return ResponseEntity.ok().body(signUpResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<?> registerUser(@RequestBody LoginRequest loginRequest) {
        var loginResponse = uaaService.login(loginRequest);
        if(Consts.INVALIE_USER_OR_PASSWORD.equals(loginResponse.getErrorMeg())){
            return ResponseEntity.status(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS).body(loginResponse.getErrorMeg());
        }
        return ResponseEntity.ok().body(loginResponse);
    }

    @GetMapping("/getAllStudentAndFacultyByAdmin")
    @PreAuthorize("hasRole('ROLE_"+ Consts.ROLE_ADMIN +"')")
    public ResponseEntity<?> getAllStudentAndFacultyByAdmin(){
        return  ResponseEntity.ok(bs.getAllStudentAndFacultyByAdmin());
    }

    /**
     * this function is for admin reset the password of user
     * @param password
     * @param id
     */
    @PreAuthorize("hasRole('ROLE_"+ Consts.ROLE_ADMIN +"')")
    @PostMapping("/{id}/resetPassword")
    public void  resetPassword(@RequestBody String password,@PathVariable int id){
         bs.resetPassword(password,id);
    }

    /**
     * this function is for user reset themself password
     */
    @PostMapping("/resetPassword")
    public ResponseEntity<String>  resetselfPassword(@RequestBody ResetPassword newPassword){

        String s = bs.resetPassword(newPassword);
        if(s.equals(Consts.RESET_PASSWORD_SUCCESS)){
            ResponseEntity.ok().body(Consts.RESET_PASSWORD_SUCCESS);
        }
        if(s.equals(Consts.OLD_PASSWORD_IS_INCORRECT)){
           return  new ResponseEntity<String>(Consts.OLD_PASSWORD_IS_INCORRECT, HttpStatus.EXPECTATION_FAILED);
        }
        return (ResponseEntity<String>) ResponseEntity.ok();
    }

    @PostMapping("/{id}/changeActiveStatu")
    public void  changeActiveStatu(@PathVariable long id){
        bs.changeActiveStatu(id);
    }

    @PostMapping("/subscribTags")
    public  ResponseEntity<?>  subscribTags(@RequestBody UserSubscribTag tags){
        try{
            bs.subscribTags(tags.getTags());
            List all = tagService.getAll();
            return ResponseEntity.ok().body(all);
        }catch (Exception e){
            return ResponseEntity.internalServerError().body("contact to mae");
        }

    }

    /**
     * get current user instrested in tags
     * @return
     */

    @GetMapping("/subscribTags")
    public  ResponseEntity<?>  getSubscribTags(){

        try{
            return ResponseEntity.ok(bs.getSubscribTags());
        }catch (Exception e){
            return ResponseEntity.internalServerError().body("contact to mae");
        }
    }

    /**
     * update the fcm token
     * @return
     */
        @PostMapping("/updateFcmToken")
    public  ResponseEntity<?>  updateFcmToken(@RequestBody UserFmcToken userFmcToken){
        try{
            return ResponseEntity.ok(bs.updateFcmToken(userFmcToken));
        }catch (Exception e){
            return ResponseEntity.internalServerError().body("contact to mae");
        }
    }




}

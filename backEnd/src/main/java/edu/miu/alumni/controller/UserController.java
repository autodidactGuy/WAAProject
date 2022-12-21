package edu.miu.alumni.controller;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.LoginRequest;
import edu.miu.alumni.model.SignupRequest;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.LoginService;
import edu.miu.alumni.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private UserService bs;

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
        if(Consts.THIS_USER_EMAIL_NOT_VALID.equals(loginResponse.getErrorMeg())){
            return ResponseEntity.badRequest().body(loginResponse.getErrorMeg());
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
    public void  resetselfPassword(@RequestBody String password){
        bs.resetPassword(password);
    }

    @PostMapping("/{id}/changeActiveStatu")
    public void  changeActiveStatu(@PathVariable long id){
        bs.changeActiveStatu(id);
    }
}

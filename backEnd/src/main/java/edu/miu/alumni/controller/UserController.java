package edu.miu.alumni.controller;

import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.LoginRequest;
import edu.miu.alumni.model.SignupRequest;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.LoginService;
import edu.miu.alumni.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
        return ResponseEntity.ok().body(loginResponse);
    }

    @GetMapping("/getAllStudentAndFacultyByAdmin")
    public List<UserDto> getAllStudentAndFacultyByAdmin(){
      return   bs.getAllStudentAndFacultyByAdmin();

    }
}

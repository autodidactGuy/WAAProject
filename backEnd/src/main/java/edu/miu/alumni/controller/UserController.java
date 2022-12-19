package edu.miu.alumni.controller;

import edu.miu.alumni.model.SignupRequest;
import edu.miu.alumni.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService uaaService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
        var signUpResponse = uaaService.signUp(signUpRequest);
        return ResponseEntity.ok().body(signUpResponse);
    }
}

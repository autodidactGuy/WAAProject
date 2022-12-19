package edu.miu.alumni.service;

import edu.miu.alumni.model.SignupRequest;
import edu.miu.alumni.model.SignupResponse;

public interface UserService {

    public SignupResponse signUp(SignupRequest signUpRequest) ;
}

package edu.miu.alumni.service;

import edu.miu.alumni.model.*;

public interface UserService {

    LoginResponse login(LoginRequest loginRequest);
    public SignupResponse signUp(SignupRequest signUpRequest) ;


    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}

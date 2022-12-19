package edu.miu.alumni.model;

import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class SignupRequest {
    private String email;
    private String password;

    private String firstname;

    private String lastname;

    private String birthday;

    private String nickname;
    private String phone;
    private String gender;

    private String role;

    private String cityCode;

    private String stateCode;
}

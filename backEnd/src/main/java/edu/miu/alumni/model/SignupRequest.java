package edu.miu.alumni.model;

import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class SignupRequest {
    private String email;
    private String password;

    private String firstName;

    private String lastName;

    private String birthday;

    private String nickName;
    private String pohoneNumber;
    private String gender;

    private String role;

    private long cityCode;

    private long stateCode;


}

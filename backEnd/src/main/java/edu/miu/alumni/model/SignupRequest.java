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

    private Set<String> role;



}

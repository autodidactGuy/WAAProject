package edu.miu.alumni.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ForgotPassword {

    private String token;
    private String newPassword;
}

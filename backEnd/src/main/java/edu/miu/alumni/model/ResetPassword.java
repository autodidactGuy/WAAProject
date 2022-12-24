package edu.miu.alumni.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResetPassword {

    private String oldPassword;
    private String newPassword;
}

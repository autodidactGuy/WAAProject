package edu.miu.alumni.model;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
public class SignupResponse {
    private String message ;

    public SignupResponse(String message) {
        this.message = message;
    }
}

package edu.miu.alumni.model;

import edu.miu.alumni.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginResponse {
    private String accessToken;
    private String refreshToken;
    private UserDto userInfo;

    private String errorMeg ;
    public LoginResponse(String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
    public LoginResponse(String accessToken, String refreshToken, UserDto currentLoginUserInfo) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.userInfo = currentLoginUserInfo;
    }
}

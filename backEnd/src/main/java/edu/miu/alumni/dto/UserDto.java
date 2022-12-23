package edu.miu.alumni.dto;

import edu.miu.alumni.entity.City;
import edu.miu.alumni.entity.Profile;
import edu.miu.alumni.entity.Role;
import lombok.Data;

import java.util.List;

@Data
public class UserDto {
    private Long Id;

    private String firstName;

    private String lastName;

    private String email;

    private CityDto city;

    private String phoneNumber;

    private String birthday;

    private String gender;

    private List<RoleDto> role;
    private int accessFailedCount;

    private boolean isLockoutEnd;

    private boolean isActivated;

    private boolean isDeleted;

    private String nickName;

    private ProfileDto profile;

    private String fcm_token;


}

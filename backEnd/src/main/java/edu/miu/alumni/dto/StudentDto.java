package edu.miu.alumni.dto;

import edu.miu.alumni.entity.City;
import edu.miu.alumni.entity.Profile;
import edu.miu.alumni.entity.Role;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
public class StudentDto {

    private Long Id;

    private String firstName;

    private String lastName;

    private String email;
//
    private CityDto city;


    private String phoneNumber;

    private String birthday;

//    private String password;

    private String gender;
//
//    private List<Role> role;

    private int accessFailedCount;



    private boolean isLockoutEnd;

    private boolean isActivated;




    private String nickName;

    private String major;

    private String srcLogo;
//    private Profile profile;
//

}

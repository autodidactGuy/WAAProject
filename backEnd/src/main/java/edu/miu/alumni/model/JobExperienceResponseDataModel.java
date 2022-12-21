package edu.miu.alumni.model;

import edu.miu.alumni.dto.CityDto;
import edu.miu.alumni.dto.JobExperienceDto;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
@Builder
public class JobExperienceResponseDataModel extends JobExperienceDto {

    private Long Id;
    private  Long UserId;
    private String JobTitle;
    private String From;

    /**
     * To: "2022-01-14",
     * IsCurrentPosition: true,
     * Company: "microsoft",
     * Details: "Description",
     * State: "IA",
     * City: "Clearfield"
     */

    private String To;

    private String Company;
    private String Details;
    private String State;
//    private String City;


//    @Getter(AccessLevel.NONE)
//    private Long id;
//
//    @Getter(AccessLevel.NONE)
//    private String jobTitle;
//
//    @Getter(AccessLevel.NONE)
//    private String fromTime;
//
//    @Getter(AccessLevel.NONE)
//    private String toTime;
//    @Getter(AccessLevel.NONE)
//    private String company;
//    @Getter(AccessLevel.NONE)
//    private String details;
//
//    @Getter(AccessLevel.NONE)
//    private Boolean isCurrentPosition;
//
//    @Getter(AccessLevel.NONE)
//    private String hierachicalLevel;

//    @Getter(AccessLevel.NONE)
//    private CityDto city;


}

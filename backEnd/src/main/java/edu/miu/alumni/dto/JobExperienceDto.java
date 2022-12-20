package edu.miu.alumni.dto;


import edu.miu.alumni.entity.CityId;
import lombok.Data;

@Data
public class JobExperienceDto {
    private long id;

    private String jobTitle;


    private String fromTime;

    private String endTime;

    private String companyName;
    private String details;
    private BasicCityDto city;

}

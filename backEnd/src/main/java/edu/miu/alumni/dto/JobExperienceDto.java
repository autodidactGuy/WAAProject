package edu.miu.alumni.dto;

import edu.miu.alumni.entity.City;
import lombok.Data;

import java.util.Date;

@Data
public class JobExperienceDto {
    private long id;

    private String jobTitle;

    private Date fromTime;

    private Date endTime;



    private CityDto city;

    private String companyName;
    private String details;
}

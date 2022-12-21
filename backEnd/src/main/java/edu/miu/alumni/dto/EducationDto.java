package edu.miu.alumni.dto;

import lombok.Data;

import java.util.Date;

@Data
public class EducationDto {
    private long id;

    private String jobTitle;

    private String fromTime;

    private String endTime;

    private String unversityName;
    private String details;

}

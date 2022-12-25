package edu.miu.alumni.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
public class JobAdvertisementDto {
    private long id;

    private StudentDto poster;


    private List<TagDto> tags;


    private Date publicationDate;

    private String workload;

    private String contract;

    private String description;

    private String profile;

    private CityDto city;

    private String companyName;

    private String srcLogo;

}

package edu.miu.alumni.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
public class JobAdvertisementDto {
    private Long id;

    private StudentDto poster;


    private List<TagDto> tags;


    private Date publicationDate;

    private String Workload;

    private String Contract;

    private String description;

    private String profile;

    private CityDto city;

    private String CompanyName;

}

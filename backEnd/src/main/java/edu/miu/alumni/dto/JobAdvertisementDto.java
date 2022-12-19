package edu.miu.alumni.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class JobAdvertisementDto {
    private long id;

    private StudentDto poster;


    private List<TagDto> tags;


    private LocalDate publicationDate;

    private String Workload;

    private String Contract;

    private String description;

    private String profile;

    private CityDto city;

    private String CompanyName;

}

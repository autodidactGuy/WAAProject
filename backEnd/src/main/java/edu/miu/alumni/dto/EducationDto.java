package edu.miu.alumni.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class EducationDto {
    private Long id;

    private String educationTitle;

    private String degree;

    private String year;

    private String  description;

    private double GPA;

    private String schoolname;

}

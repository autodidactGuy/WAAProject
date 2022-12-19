package edu.miu.alumni.model;


import lombok.Builder;
import lombok.Data;



@Data
@Builder
public class SearchStudentRequest {

    private String city;
    private String state;

    private String major;
    private String name;

    private String studentId;
}

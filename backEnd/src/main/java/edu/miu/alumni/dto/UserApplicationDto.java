package edu.miu.alumni.dto;

import edu.miu.alumni.entity.JobAdvertisement;
import edu.miu.alumni.entity.Student;
import lombok.Data;
import java.util.Date;

@Data
public class UserApplicationDto {
    private Long id;

    private JobAdvertisementDto ja;

    private Student student;

    private String applicationDate;

}

package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="educations")
public class Education {

    @Id
    private long id;

    private String jobTitle;

    private Date fromTime;

    private Date endTime;

    private String unversityName;
    private String details;
    
}

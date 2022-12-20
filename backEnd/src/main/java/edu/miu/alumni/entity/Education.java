package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="educations")
public class Education extends SoftDeleteBaseClass{

    @Id
    private long id;

    private String jobTitle;

    private Date fromTime;

    private Date endTime;

    private String unversityName;
    private String details;

    private boolean isDeleted;



}

package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="educations")
public class Education extends SoftDeleteBaseClass{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private long id;

    private String EducationTitle   ;

    private Date fromTime;

    private Date endTime;

    private String School;
    private String details;

    private boolean isDeleted;



}

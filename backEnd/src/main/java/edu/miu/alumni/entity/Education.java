package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@Table(name="educations")
public class Education extends SoftDeleteBaseClass{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private long id;

    private String educationTitle;

    private String degree   ;

    private LocalDate year;

    private String  description;

    private double GPA;

    private String schoolname;

    private boolean isDeleted;



}

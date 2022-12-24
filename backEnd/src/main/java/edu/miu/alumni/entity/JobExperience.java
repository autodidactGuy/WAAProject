package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="job_experiences")
public class JobExperience extends SoftDeleteBaseClass{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String jobTitle;

    private Date fromTime;

    private Date toTime;


    @OneToOne
    @JoinColumns({
            @JoinColumn(name = "city_cityName", referencedColumnName = "cityName"),
            @JoinColumn(name = "city_stateCode", referencedColumnName = "stateCode")
    })
    private City city;

    private String company;

//    @Column(length = 800)
    private String details;

    private boolean isDeleted;

    private Boolean isCurrentPosition;

    private String hierachicalLevel;


}

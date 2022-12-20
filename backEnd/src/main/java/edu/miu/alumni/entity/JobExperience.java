package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="job_experiences")
public class JobExperience {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String jobTitle;

    private Date fromTime;

    private Date endTime;


    @OneToOne
    @JoinColumns({
            @JoinColumn(name = "city_cityName", referencedColumnName = "cityName"),
            @JoinColumn(name = "city_stateCode", referencedColumnName = "stateCode")
    })
    private City city;

    private String companyName;
    private String details;

}

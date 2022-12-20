package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
@Table(name="job_advertisements")
public class JobAdvertisement {
    @Id
    private long id;

    @ManyToOne
    @JoinColumn(name = "poster_stu_id")
    private Student poster;

//    @ManyToOne
//    @JoinColumn(name = "applier_id")
//    private Student applier;
//
    @ManyToMany(mappedBy = "jobAdvertisement")
    private List<Tag> tags;


    private Date publicationDate;

    private String Workload;

    private String Contract;

    private String description;

    private String profile;


    @OneToOne
    @JoinColumns({
            @JoinColumn(name = "city_cityName", referencedColumnName = "cityName"),
            @JoinColumn(name = "city_stateCode", referencedColumnName = "stateCode")
    })
    private City city;

    private String CompanyName;

    private Boolean isDeleted;


    @OneToMany
    @JoinColumn(name="id_job_advertisements")
    private List<Files> listFiles;
}

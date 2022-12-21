package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
@Table(name="job_advertisements")
public class JobAdvertisement extends SoftDeleteBaseClass{
    @Id
    long id;

    @ManyToOne
    @JoinColumn(name = "poster_stu_id")
    Student poster;

    @ManyToMany(mappedBy = "jobAdvertisement")
    List<Tag> tags;


    Date publicationDate;

    String workload;

    String contract;

    String description;

    String profile;


    @OneToOne
    @JoinColumns({
            @JoinColumn(name = "city_cityName", referencedColumnName = "cityName"),
            @JoinColumn(name = "city_stateCode", referencedColumnName = "stateCode")
    })
    City city;

    String companyName;

    private boolean isDeleted;


    @OneToMany
    @JoinColumn(name="id_job_advertisements")
    List<Files> listFiles;
}

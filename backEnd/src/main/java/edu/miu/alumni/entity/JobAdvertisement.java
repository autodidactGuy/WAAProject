package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.nio.file.Files;
import java.util.*;

@Entity
@Data
@Table(name="job_advertisements")
public class JobAdvertisement extends SoftDeleteBaseClass{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "poster_stu_id")
    private Student poster;

    @ManyToMany(mappedBy = "jobAdvertisement")
    private  List<Tag> tags;


    private   Date publicationDate;

    private  String workload;

    private  String contract;

    @Column(length = 500)
    @Lob
    private  String description;

    private  String profile;


    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "city_cityName", referencedColumnName = "cityName"),
            @JoinColumn(name = "city_stateCode", referencedColumnName = "stateCode")
    })
    private  City city;

    private String companyName;

    private boolean isDeleted;


//    @OneToMany(mappedBy = "jobAdvertisement")
//    private   List<Files> listFiles;
}

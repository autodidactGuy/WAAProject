package edu.miu.alumni.entity;

import javax.persistence.*;
import  java.util.*;

@Entity
@Table(name="files")
public class File extends SoftDeleteBaseClass{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fileUrl;
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name="id_job_advertisements")
    private JobAdvertisement jobAdvertisement;


}

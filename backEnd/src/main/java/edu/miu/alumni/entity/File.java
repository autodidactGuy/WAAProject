package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import  java.util.*;

@Entity
@Data
@Table(name="files")
public class File extends SoftDeleteBaseClass{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fileName;
    private String fileUrl;
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name="id_job_advertisements")
    private JobAdvertisement jobAdvertisement;


}

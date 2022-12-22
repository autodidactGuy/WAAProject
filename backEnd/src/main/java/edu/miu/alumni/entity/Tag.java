package edu.miu.alumni.entity;


import lombok.Data;

import javax.persistence.*;
import java.security.PrivateKey;

@Entity
@Data
public class Tag extends SoftDeleteBaseClass{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String title;

    private boolean isDeleted;


    @ManyToMany
    private java.util.List<JobAdvertisement> jobAdvertisement;

    @ManyToMany
    private java.util.List<User> interstedInUsers;
}

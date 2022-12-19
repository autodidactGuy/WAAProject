package edu.miu.alumni.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="profiles")
public class Profile {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;


    @OneToMany
    @JoinColumn(name="profile_id")
    private List<Education> educationList;

    @OneToMany
    @JoinColumn(name="profile_id")
    private List<JobExperience> jobExperienceList;
}

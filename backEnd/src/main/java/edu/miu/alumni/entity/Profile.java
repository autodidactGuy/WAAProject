package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name="profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;


    @OneToMany
    @JoinColumn(name="profile_id")
    private List<Education> educationList;

    @OneToMany
    @JoinColumn(name="profile_id")
    private List<JobExperience> jobExperienceList;
}

package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name="job_advertisements")
public class JobAdvertisement {
    @Id
    private long id;

    @ManyToOne
    @JoinColumn(name = "poster_id")
    private Student poster;

    @ManyToOne
    @JoinColumn(name = "applier_id")
    private Student applier;


    @OneToMany
    @JoinColumn(name="id_jobAd")
    private List<Tag> tags;
}

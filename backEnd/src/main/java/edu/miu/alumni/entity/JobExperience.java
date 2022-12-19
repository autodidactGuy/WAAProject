package edu.miu.alumni.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="job_experiences")
public class JobExperience {
    @Id
    private long id;

}

package edu.miu.alumni.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="job_advertisements")
public class JobAdvertisement {
    @Id
    private long id;

}

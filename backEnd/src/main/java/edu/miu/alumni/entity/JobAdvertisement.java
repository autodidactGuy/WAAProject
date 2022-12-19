package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name="job_advertisements")
public class JobAdvertisement {
    @Id
    private long id;

}

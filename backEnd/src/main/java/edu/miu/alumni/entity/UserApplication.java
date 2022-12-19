package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
@Data
public class UserApplication {

    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_jobAdvertisement")
    private JobAdvertisement ja;


    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    private Date applicationDate;

    private boolean isDeleted;
}

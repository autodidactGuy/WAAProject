package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class UserApplication extends SoftDeleteBaseClass{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

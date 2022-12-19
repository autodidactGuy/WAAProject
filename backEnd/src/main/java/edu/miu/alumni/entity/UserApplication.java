package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
public class UserApplication {

    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ja_id")
    private JobAdvertisement ja;


}

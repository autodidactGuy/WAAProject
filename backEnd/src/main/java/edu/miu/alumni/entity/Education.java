package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="educations")
public class Education {

    @Id
    private long id;




}

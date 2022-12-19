package edu.miu.alumni.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private String title;

    private boolean isDeleted;
}

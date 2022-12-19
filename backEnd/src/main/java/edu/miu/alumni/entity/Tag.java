package edu.miu.alumni.entity;


import javax.persistence.*;

@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;


    private String tagDetails;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

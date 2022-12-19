package edu.miu.alumni.entity;

import javax.persistence.*;

@Entity
@Table(name="cities")
public class City {

    private String citiName;
    @ManyToOne
    @JoinColumn(name = "state_code")
    private State state;

    @Id
    private int zipCode;

    private  double latitude;
    private double longitude;

    private String county;

}

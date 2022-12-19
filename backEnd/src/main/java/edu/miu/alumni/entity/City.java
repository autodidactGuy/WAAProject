package edu.miu.alumni.entity;

import javax.persistence.*;

@Entity
@Table(name="cities")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long cityId;
    private String citiName;
    @ManyToOne
    @JoinColumn(name = "state_code")
    private State state;


    private int zipCode;

    private  double latitude;
    private double longitude;

    private String county;

}

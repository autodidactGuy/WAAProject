package edu.miu.alumni.entity;

import javax.persistence.*;

@Entity
@Table(name="cities")
public class City {

    @EmbeddedId
    private CityId id;
    @ManyToOne
    @JoinColumns({
            @JoinColumn(name="stateCode", referencedColumnName="stateCode")
    })
    @MapsId("stateCode")
    private State state;

    private int zipCode;

    private  String latitude;
    private String longitude;


}

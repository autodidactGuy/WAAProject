package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
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

    private String zipCode;

    private  String latitude;
    private String longitude;


}

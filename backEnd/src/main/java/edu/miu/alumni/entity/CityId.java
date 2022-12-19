package edu.miu.alumni.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
@NoArgsConstructor
public class CityId implements Serializable {

    private String cityName;
    private String stateCode;

}

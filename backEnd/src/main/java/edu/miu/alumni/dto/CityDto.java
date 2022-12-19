package edu.miu.alumni.dto;

import edu.miu.alumni.entity.CityId;
import edu.miu.alumni.entity.State;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class CityDto {

    private CityId id;
    private String zipCode;

    private  String latitude;
    private String longitude;

    private String stateCode;

    private String cityName;

    public void setCityName(String cityName) {
        this.cityName = this.id.getCityName();
    }
    public void stateCode(String stateCode) {
        this.stateCode = this.id.getStateCode();
    }
}

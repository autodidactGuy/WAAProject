package edu.miu.alumni.dto;

import edu.miu.alumni.entity.CityId;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class BasicCityDto {


    private CityId id;


    private String stateCode;
    private String cityName;

    public void setCityName(String cityName) {
        this.cityName = this.id.getCityName();
    }

    public String getCityName() {
        return this.id.getCityName();
    }
    public String getStateCode() {
        return this.id.getStateCode();
    }

    public void setStateCode() {
         this.stateCode= this.id.getStateCode();
    }
}

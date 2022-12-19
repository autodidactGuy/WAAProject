package edu.miu.alumni.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class CityDto {

    private String zipCode;

    private  String latitude;
    private String longitude;
}

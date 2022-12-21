package edu.miu.alumni.dto;

import lombok.Data;

@Data
public class StateDto {
    private String stateCode;

    private String state;

    private CityDto cityDto;
}

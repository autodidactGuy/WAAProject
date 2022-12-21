package edu.miu.alumni.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StateCustomEntityResponse {
    private String value;
    private String label;
    private java.util.List<CityChild> children;



}

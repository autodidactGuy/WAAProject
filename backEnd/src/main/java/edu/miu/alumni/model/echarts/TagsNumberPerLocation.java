package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TagsNumberPerLocation {

    private String cityName;
    private String stateCode;
    private long numberOfTags;
}

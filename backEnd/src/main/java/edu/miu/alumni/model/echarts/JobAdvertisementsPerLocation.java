package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JobAdvertisementsPerLocation {

    private  String cityName ;
    private  String stateCode;
    private long jobAdvertisementCount;
}

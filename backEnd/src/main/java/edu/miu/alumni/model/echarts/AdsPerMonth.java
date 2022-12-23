package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AdsPerMonth {
    private String pubTime;
    private long adCnt;
}

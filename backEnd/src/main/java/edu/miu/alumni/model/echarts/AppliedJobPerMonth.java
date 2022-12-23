package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AppliedJobPerMonth {
    private String month;
    private int appliedJobCnt;

}

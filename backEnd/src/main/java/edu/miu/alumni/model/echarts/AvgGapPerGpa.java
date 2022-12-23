package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AvgGapPerGpa {
    private String gpaRange;
    private long averageGapTime;
}

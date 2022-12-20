package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StudentsNumberPerCity {
    private String cityName;
    private long numberOfStudent;
}

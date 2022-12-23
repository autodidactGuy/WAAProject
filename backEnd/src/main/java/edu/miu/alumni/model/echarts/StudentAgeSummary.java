package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StudentAgeSummary {
    private int age;
    private Long ageCnt;
}

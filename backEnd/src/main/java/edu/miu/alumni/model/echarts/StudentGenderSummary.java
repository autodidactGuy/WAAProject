package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StudentGenderSummary {
    private String gender;
    private Long genderCnt;
}

package edu.miu.alumni.model.echarts;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
public class AdNumberPerTag {
    private String tagName;
    private Long adCnt;
}

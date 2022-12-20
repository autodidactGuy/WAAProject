package edu.miu.alumni.model.echarts;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AdertisementsPerTag {
    private String tagName;
    private long numberOfAd;
}

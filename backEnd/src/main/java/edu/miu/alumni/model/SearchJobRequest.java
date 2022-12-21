package edu.miu.alumni.model;


import lombok.Builder;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class SearchJobRequest {
    private List<Long> tags;

    private String state;

    private String cityCode;

    private String companyName;

}

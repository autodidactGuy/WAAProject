package edu.miu.alumni.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ActivityLogAspectDto {
    private String methodName;
    private String requestType;
    private String userId;

    private Date callTime;
}

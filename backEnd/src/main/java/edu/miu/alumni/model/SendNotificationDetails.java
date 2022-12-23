package edu.miu.alumni.model;

import lombok.Data;

@Data
public class SendNotificationDetails {
    private String token;
    private String title;
    private String body;
}

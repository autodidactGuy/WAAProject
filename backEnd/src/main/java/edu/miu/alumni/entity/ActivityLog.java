package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;

import java.util.Date;

@Entity
@Data
public class ActivityLog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String methodName;
    private String requestType;
    private String userId;

    private Date callTime;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }


}

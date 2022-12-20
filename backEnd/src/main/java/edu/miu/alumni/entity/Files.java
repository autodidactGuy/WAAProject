package edu.miu.alumni.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.LongSummaryStatistics;

@Entity
public class Files extends SoftDeleteBaseClass{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fileUrl;
    private boolean isDeleted;



}

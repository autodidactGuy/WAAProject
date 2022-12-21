package edu.miu.alumni.entity;


import lombok.Data;

import javax.persistence.Embeddable;

@Data
public class SoftDeleteBaseClass {
    private boolean isDeleted;
}

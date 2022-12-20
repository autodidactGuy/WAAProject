package edu.miu.alumni.entity;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Data
@Table(name="states")
public class State extends SoftDeleteBaseClass{
    @Id
    private String stateCode;

    private String state;

    @OneToMany(mappedBy="state")
    private List<City> cityList;

    private boolean isDeleted;


}

package edu.miu.alumni.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name="states")
public class State {
    @Id
    private String stateCode;

    private String state;

    @OneToMany(mappedBy="state")
    private List<City> cityList;
}

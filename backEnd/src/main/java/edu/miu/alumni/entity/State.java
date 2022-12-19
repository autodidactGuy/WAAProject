package edu.miu.alumni.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="states")
public class State {
    @Id
    private Long state_code;

    private String state;
}

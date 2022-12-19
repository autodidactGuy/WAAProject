package edu.miu.alumni.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@DiscriminatorValue("Faculty")
public class Faculty extends User{
    public Faculty(String email, String encode, String firstName, String lastName) {
        super(email, encode, firstName, lastName);
    }
}

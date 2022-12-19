package edu.miu.alumni.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Student")
public class Student extends User{
    public Student(String email, String encode, String firstName, String lastName) {
        super(email, encode, firstName, lastName);
    }
}

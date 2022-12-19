package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@Data
@DiscriminatorValue("Student")
public class Student extends User{

    private String marjor;

    public Student(String email, String encode, String firstName, String lastName, String birthday, String gender, String nickName, String pohoneNumber,String marjor) {
        super(email,encode,firstName,lastName,birthday,gender,nickName,pohoneNumber);
        this.marjor = marjor;
    }

    public Student() {

    }
}

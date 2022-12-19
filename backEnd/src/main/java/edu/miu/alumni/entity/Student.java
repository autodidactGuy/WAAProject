package edu.miu.alumni.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Student")
public class Student extends User{

    public Student(String email, String encode, String firstName, String lastName, String birthday, String gender, String nickName, String pohoneNumber) {
        super(email,encode,firstName,lastName,birthday,gender,nickName,pohoneNumber);
    }

    public Student() {

    }
}

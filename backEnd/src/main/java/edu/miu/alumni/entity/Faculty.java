package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Data
@DiscriminatorValue("Faculty")
public class Faculty extends User{
    public Faculty(String email, String encode, String firstName, String lastName, String birthday, String gender, String nickName, String pohoneNumber) {
        super(email,encode,firstName,lastName,birthday,gender,nickName,pohoneNumber);
    }

    public Faculty() {

    }
}

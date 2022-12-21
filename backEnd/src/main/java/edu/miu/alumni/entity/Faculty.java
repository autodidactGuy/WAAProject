package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.*;

@Entity
@Data
@DiscriminatorValue("Faculty")
public class Faculty extends User{

    @OneToMany(mappedBy = "writedBy")
    private List<Comment> writeComments;
    public Faculty(String email, String encode, String firstName, String lastName, String birthday, String gender, String nickName, String pohoneNumber) {
        super(email,encode,firstName,lastName,birthday,gender,nickName,pohoneNumber);
    }

    public Faculty() {

    }
}

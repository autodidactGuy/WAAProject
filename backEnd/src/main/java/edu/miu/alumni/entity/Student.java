package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
@DiscriminatorValue("Student")
public class Student extends User{

    private String marjor;

    @OneToMany
    @JoinColumn(name="id_inter_stu")
    private List<Tag> interstedTags;

    @OneToMany(mappedBy = "poster")
    private List<JobAdvertisement> postJobAds;


    @OneToMany(mappedBy ="student" )
    private List<UserApplication> userApplications;
//    @OneToMany
//    private List<JobAdvertisement> appliedAds;
    public Student(String email, String encode, String firstName, String lastName, String birthday, String gender, String nickName, String pohoneNumber,String marjor) {
        super(email,encode,firstName,lastName,birthday,gender,nickName,pohoneNumber);
        this.marjor = marjor;
    }

    public Student() {

    }
}

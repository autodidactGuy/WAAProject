package edu.miu.alumni.entity;

import lombok.Data;
import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import java.util.List;

@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Entity
@DiscriminatorColumn(name = "user_type")
@Table(name="users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String firstName;

    private String lastName;

    private String email;
//    @ManyToOne
//    @JoinColumn(name = "state_code")
//    private State state;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumns({
            @JoinColumn(name="cityName"),
            @JoinColumn(name="stateCode")
    })
    private City city;


    private String phoneNumber;

    private String birthday;

    private String password;

    private String gender;


    @ManyToMany(cascade = CascadeType.DETACH,fetch = FetchType.EAGER)
    @JoinTable
    private List<Role> role;
    private int accessFailedCount;



    private boolean isLockoutEnd;

    private boolean isActivated;

    private boolean isDeleted;


    private String nickName;


    @OneToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;


    public User() {

    }

    public User(String email, String password, String firstName, String lastName, String birthday, String gender, String nickName, String pohoneNumber) {

        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
        this.nickName = nickName;
        this.phoneNumber = pohoneNumber;
        this.isLockoutEnd=true;
        this.isActivated=true;
        this.isDeleted=false;
    }
}

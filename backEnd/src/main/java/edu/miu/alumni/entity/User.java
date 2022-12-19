package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Entity
@DiscriminatorColumn(name = "user_type")
@Table(name="users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;

    private String firstName;

    private String lastName;

    private String email;
    @ManyToOne
    @JoinColumn(name = "state_code")
    private State state;


    @ManyToOne
    @JoinColumn(name = "city_zip_code")
    private City city;


    private String phoneNumber;

    private String birthday;

    private String password;

    private String gender;

    @ManyToMany
    private List<Role> role;

    private int accessFailedCount;

    private String marjor;

    private boolean isLockoutEnd;

    private boolean isActivated;

    private boolean isDeleted;


    @OneToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;

    public User(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public User() {

    }
}

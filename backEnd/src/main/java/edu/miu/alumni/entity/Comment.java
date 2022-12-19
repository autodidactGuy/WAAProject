package edu.miu.alumni.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="comments")
public class Comment {
    @Id
    private long id;

    private String comment;

//    @ManyToMany
//    private List<Student> toStudent;
//
//    @ManyToMany
//    private List<Faculty> fromFaculty;
}

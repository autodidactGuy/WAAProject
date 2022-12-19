package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
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

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

    @OneToOne
    private Faculty writedBy;

    @OneToOne
    private Student toStudent;
//    @ManyToMany
//    private List<Student> toStudent;
//
//    @ManyToMany
//    private List<Faculty> fromFaculty;
}

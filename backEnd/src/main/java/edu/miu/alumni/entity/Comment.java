package edu.miu.alumni.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name="comments")
public class Comment extends SoftDeleteBaseClass{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String comment;

    @CreationTimestamp
    private Date createdAt;
    @OneToOne
    private Faculty writedBy;

    @ManyToOne
    private Student toStudent;

    private boolean isDeleted;


    public Comment(Student student, Faculty faculty, String s) {
        this.toStudent = student;
        this.writedBy = faculty;
        this.comment = s;
    }

    public Comment() {

    }
}

package edu.miu.alumni.dto;

import edu.miu.alumni.entity.Faculty;
import edu.miu.alumni.entity.Student;
import lombok.Data;

import javax.persistence.OneToOne;
import java.util.Date;

@Data
public class CommentDto {

    private String comment;

    private Date createdAt;

    private FacultyDto writedBy;

    private StudentDto toStudent;

}

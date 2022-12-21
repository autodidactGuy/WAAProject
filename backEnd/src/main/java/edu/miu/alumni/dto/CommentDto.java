package edu.miu.alumni.dto;

import edu.miu.alumni.entity.Faculty;
import edu.miu.alumni.entity.Student;
import lombok.Data;

import javax.persistence.OneToOne;

@Data
public class CommentDto {

    private String comment;


    private FacultyDto writedBy;

    private StudentDto toStudent;



}

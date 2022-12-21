package edu.miu.alumni.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CommentsResponse {
    private Long commentId;
    private String comment;
    private Long toStudentId;
    private Long writedByFacultyId;


}

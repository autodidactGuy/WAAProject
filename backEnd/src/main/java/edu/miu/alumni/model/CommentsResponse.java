package edu.miu.alumni.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class CommentsResponse {
    private Long commentId;
    private String comment;
    private Long toStudentId;
    private Long writedByFacultyId;
    private String writedByFactultyName;
    private String writedByFactultyAvatar;
    private Date createdAt;


}

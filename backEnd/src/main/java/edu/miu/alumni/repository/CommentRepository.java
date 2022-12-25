package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Comment;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.model.CommentsResponse;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.*;
@Repository
public interface CommentRepository extends CrudRepository<Comment,Long> {
    public List<Comment> findCommentsByToStudent(Student std);


    @Query("select new edu.miu.alumni.model.CommentsResponse(c.id,c.id.comment,c.toStudent.id,c.writedBy.id, c.writedBy.nickName,  c.writedBy.srcLogo,  c.createdAt) from Comment AS c where c.toStudent.id=:studentId ")
    public List<CommentsResponse> findCommentsByToStudent(long studentId);

}

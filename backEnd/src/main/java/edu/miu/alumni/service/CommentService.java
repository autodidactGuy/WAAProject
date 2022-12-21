package edu.miu.alumni.service;

import edu.miu.alumni.model.CommentsResponse;
import edu.miu.alumni.model.CreateCommentRequest;

import java.util.List;

public interface CommentService <T,H,A> extends BasicService<T,H,A>{

    void save(CreateCommentRequest  createCommentRequest);

    List<CommentsResponse> getSelfAllComments();

    List<CommentsResponse> getAllStudentComments(long id);
}

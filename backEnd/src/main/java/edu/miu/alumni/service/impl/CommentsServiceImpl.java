package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.CommentDto;
import edu.miu.alumni.entity.Comment;
import edu.miu.alumni.entity.Faculty;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.model.CommentsResponse;
import edu.miu.alumni.model.CreateCommentRequest;
import edu.miu.alumni.repository.CommentRepository;
import edu.miu.alumni.repository.FacultyRepository;
import edu.miu.alumni.repository.StudentRepository;
import edu.miu.alumni.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentsServiceImpl extends BasicServiceImpl<Comment, CommentDto,Long ,CommentRepository>
        implements CommentService<Comment, CommentDto,Long>
{

    @Autowired
    private  StudentRepository studentRepository;
    @Autowired
    private FacultyRepository facultyRepository;
    public CommentsServiceImpl(CommentRepository repository, ModelMapper modelMapper) {
     super(repository,modelMapper);
    }


    @Override
    public void save(CreateCommentRequest createCommentRequest) {
        Comment comment = new Comment();
        String facultyEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        Faculty faculty = facultyRepository.findFacultyByEmailEquals(facultyEmail);
        Student student = studentRepository.findById(createCommentRequest.getToStudentId()).get();
        comment.setComment(createCommentRequest.getComment());

        if(faculty!=null && student!=null){
            comment.setWritedBy(faculty);
            comment.setToStudent(student);
        }

        repository.save(comment);
    }

    @Override
    public List<CommentsResponse> getSelfAllComments() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Student studentByEmailEquals = studentRepository.findStudentByEmailEquals(email);
        return repository.findCommentsByToStudent(studentByEmailEquals.getId());
    }

    @Override
    public List<CommentsResponse> getAllStudentComments(long id) {
        List<CommentsResponse> commentsByToStudent1 = repository.findCommentsByToStudent(id);
        return commentsByToStudent1;
    }
}

package edu.miu.alumni.controller;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.CommentDto;
import edu.miu.alumni.entity.Comment;
import edu.miu.alumni.model.CommentsResponse;
import edu.miu.alumni.service.CommentService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import edu.miu.alumni.model.CreateCommentRequest ;
@RestController
@CrossOrigin
@RequestMapping("/comment")
public class CommentController extends BaseController<Comment, CommentDto,Long>
{
    CommentService <Comment, CommentDto, Long> bs;

    public CommentController(CommentService<Comment, CommentDto, Long> bs) {
        super(bs);
        this.bs = bs;
    }

    /**
     * this function is worked for get all comments of student;
     * @return
     */
//    @PreAuthorize("FACULT")
    @PreAuthorize("hasRole('ROLE_"+ Consts.ROLE_FACULT +"')")
    @GetMapping("/getCommentsByStudentId/{id}")
    public List<CommentsResponse> getCommentsByStudentId(@PathVariable long id){

       return  bs.getAllStudentComments(id);
    }

    /**
     * this is the function for student to get all comments about himself
     * @return
     */
    @PreAuthorize("hasRole('ROLE_"+ Consts.ROLE_STUDENT +"')")
    @GetMapping("/getAllCommentsBySelf")
    public List<CommentsResponse> getAllCommentsBySelf(){
       return  bs.getSelfAllComments();
    }


    @PostMapping("/saveComments")
    public void saveComments(@RequestBody CreateCommentRequest createCommentRequest){
        bs.save(createCommentRequest);
    }

}

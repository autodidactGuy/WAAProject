package edu.miu.alumni.controller;

import edu.miu.alumni.dto.CommentDto;
import edu.miu.alumni.entity.Comment;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.CityService;
import edu.miu.alumni.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("/getCommentsByStudentId/{id}")
    public List<CommentDto> getCommentsByStudentId(@PathVariable String id){

//       return  bs.getAllStudentComments();
        return null;
    }

    /**
     * this is the function for student to get all comments about himself
     * @return
     */
    @GetMapping("/getAllCommentsBySelf")
    public List<CommentDto> getAllCommentsBySelf(){
       return  bs.getSelfAllComments();
//        return null;
    }


    @PostMapping("/saveComments")
    public void saveComments(@RequestBody CreateCommentRequest createCommentRequest){
        bs.save(createCommentRequest);
    }

}

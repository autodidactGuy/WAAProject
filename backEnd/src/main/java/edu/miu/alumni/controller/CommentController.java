package edu.miu.alumni.controller;

import edu.miu.alumni.dto.CommentDto;
import edu.miu.alumni.entity.Comment;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.CityService;
import edu.miu.alumni.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/comment")
public class CommentController extends BaseController<Comment, CommentDto,Long>
{

    public CommentController(CommentService<Comment, CommentDto, Long> bs) {
        super(bs);
    }
}

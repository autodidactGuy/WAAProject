package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.CommentDto;
import edu.miu.alumni.entity.Comment;
import edu.miu.alumni.repository.CommentRepository;
import edu.miu.alumni.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class CommentsServiceImpl extends BasicServiceImpl<Comment, CommentDto,Long ,CommentRepository>
        implements CommentService<Comment, CommentDto,Long>
{
    public CommentsServiceImpl(CommentRepository repository, ModelMapper modelMapper) {
        super(repository,modelMapper);
    }
}

package edu.miu.alumni.controller;

import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.service.TagService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/tag")
public class TagController extends BaseController<Tag, TagDto,Long>
{
    public TagController(TagService<Tag, TagDto, Long> bs) {
        super(bs);
    }
}

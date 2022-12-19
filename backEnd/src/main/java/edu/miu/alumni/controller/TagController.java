package edu.miu.alumni.controller;

import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.entity.TagDto;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.TagService;

public class TagController extends BaseController<Tag, TagDto,Long>
{
    public TagController(TagService<Tag, TagDto, Long> bs) {
        super(bs);
    }
}

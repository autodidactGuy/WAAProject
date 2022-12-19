package edu.miu.alumni.service.impl;

import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.repository.TagRepository;
import edu.miu.alumni.service.TagService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class TagServiceImpl extends BasicServiceImpl<Tag, TagDto,Long, TagRepository>
implements TagService<Tag, TagDto,Long>
{
    public TagServiceImpl(TagRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

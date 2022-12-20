package edu.miu.alumni.service.impl;

import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.model.echarts.TagsNumberPerLocation;
import edu.miu.alumni.repository.TagRepository;
import edu.miu.alumni.service.TagService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl extends BasicServiceImpl<Tag, TagDto,Long, TagRepository>
implements TagService<Tag, TagDto,Long>
{
    public TagServiceImpl(TagRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }

    @Override
    public List<TagsNumberPerLocation> numberOfTagsPerLocation() {

        return null;
//        return repository.numberOfTagsPerLocation();
    }
}

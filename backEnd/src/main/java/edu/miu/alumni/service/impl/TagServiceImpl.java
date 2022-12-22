package edu.miu.alumni.service.impl;

import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.echarts.TagsNumberPerLocation;
import edu.miu.alumni.repository.TagRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.TagService;
import edu.miu.alumni.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl extends BasicServiceImpl<Tag, TagDto,Long, TagRepository>
implements TagService<Tag, TagDto,Long>
{
    @Autowired
    private UserService userService;
    public TagServiceImpl(TagRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }

    @Override
    public List<TagsNumberPerLocation> numberOfTagsPerLocation() {

        return null;
//        return repository.numberOfTagsPerLocation();
    }

    @Override
    public List<TagDto> getAll() {
//        List<TagDto> all = super.getAll();
//        all

        User user = userService.currentLoginUser();
        List<Tag> interstedTags = user.getInterstedTags();

        System.out.println(interstedTags);
//        for (Tag tag : repository.findAll()) {
//           tag
//        }
        return null;
//        return
    }
}

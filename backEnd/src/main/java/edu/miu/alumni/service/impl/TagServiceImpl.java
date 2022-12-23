package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.echarts.AdNumberPerTag;
import edu.miu.alumni.model.echarts.TagsNumberPerLocation;
import edu.miu.alumni.repository.TagRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.TagService;
import edu.miu.alumni.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.math.*;
@Service
public class TagServiceImpl extends BasicServiceImpl<Tag, TagDto,Long, TagRepository>
implements TagService<Tag, TagDto,Long>
{
    @Autowired
    private UserService<User, UserDto,Long> userService;


    public TagServiceImpl(TagRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
        this.repository = repository;
    }


    public List<TagsNumberPerLocation> numberOfTagsPerLocation() {

//        return null;

        Object[][] queryRes = repository.numberOfTagsPerLocation();

        ArrayList<TagsNumberPerLocation> tagsNumberPerLocation = new ArrayList<>();
        for (Object [] entity:queryRes){
            TagsNumberPerLocation adNumberPerTag = new TagsNumberPerLocation((String)entity[0],(String)entity[1],((BigInteger) entity[2]).longValue());
            tagsNumberPerLocation.add(adNumberPerTag);
        }
        return tagsNumberPerLocation;
    }

    @Override
    public List<AdNumberPerTag> numberOfAdPerTag() {

        Object[][] queryRes = repository.numberOfAdPerTag();

        ArrayList<AdNumberPerTag> adNumberPerTags = new ArrayList<>();
        for (Object [] entity:queryRes){
            AdNumberPerTag adNumberPerTag = new AdNumberPerTag((String)entity[0],((BigInteger) entity[1]).longValue());
            adNumberPerTags.add(adNumberPerTag);
        }

        return adNumberPerTags;
    }

    @Override
    public List<TagDto> getAll() {

        User user = userService.currentLoginUser();
        List<Tag> interstedTags = user.getInterstedTags();

        System.out.println(interstedTags);

        return null;
//        return
    }
}

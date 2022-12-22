package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.model.echarts.TagsNumberPerLocation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends CrudRepository<Tag,Long> {
//    List<TagsNumberPerLocation> numberOfTagsPerLocation();
    public Tag findByTitleEquals(String tagName);
}

package edu.miu.alumni.service;

import edu.miu.alumni.model.echarts.TagsNumberPerLocation;

import java.util.List;

public interface TagService <T,H,A> extends BasicService<T,H,A>{
    List<TagsNumberPerLocation> numberOfTagsPerLocation();
}

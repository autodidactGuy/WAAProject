package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.model.echarts.AdNumberPerTag;
import edu.miu.alumni.model.echarts.JobAdvertisementsPerLocation;
import edu.miu.alumni.model.echarts.TagsNumberPerLocation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends CrudRepository<Tag,Long> {
    public Tag findByTitleEquals(String tagName);



    @Query(value = "select title,count(1) from tag_job_advertisement tj\n" +
            "left join tag t on tj.tags_id = t.id\n" +
            "where t.is_deleted =false \n" +
            "group by tags_id ,t.title \n" +
            "order by count(1) desc\n",nativeQuery = true
    )
    public Object[][]  numberOfAdPerTag();

    /**
     * Number of job advertisements per tag.
     * @return
     */
    @Query(value = "select city_city_name,city_state_code,count(1) from tag_job_advertisement tj\n" +
            "left join tag t on tj.tags_id = t.id\n" +
            "left join job_advertisements ja on tj.job_advertisement_id  = ja.id \n" +
            "where ja.is_deleted =false \n" +
            "and t.is_deleted  = false\n" +
            "group by city_city_name,city_state_code\n" +
            "order by count(1) desc",nativeQuery = true
    )
    Object[][] numberOfTagsPerLocation();


    @Query(value = "select intersted_tags_id from tag_intersted_in_users where intersted_in_users_id = :id",nativeQuery = true)
    List<Long> getUserIntrestedTags(Long id);
}

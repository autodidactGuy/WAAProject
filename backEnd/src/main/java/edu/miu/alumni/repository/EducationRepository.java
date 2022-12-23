package edu.miu.alumni.repository;

import edu.miu.alumni.entity.Education;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends CrudRepository<Education,Long> {

//    @Query(value = "with normal_time_rank_expeirence  as (\n" +
//            "\tselect je.*,\n" +
//            "\trow_number() over(partition by je.profile_id order by from_time desc) normal_rank\n" +
//            "\tfrom job_experiences je \n" +
//            "\twhere je.is_deleted  = false)\n" +
//            "\t, next_time_rank_expeirence as (\n" +
//            "\tselect normal_time_rank_expeirence.*,normal_time_rank_expeirence.normal_rank-1 next_time_rank from normal_time_rank_expeirence\n" +
//            "),expirence_gap_time as(\n" +
//            "select a.*,b.from_time-a.to_time gap_time from normal_time_rank_expeirence a\n" +
//            "left join normal_time_rank_expeirence b on a.normal_rank = b.normal_rank+1 and a.profile_id=b.profile_id\n" +
//            "where b.from_time is not null),eachUserAvgFindJobGapTime as(select profile_id ,avg(gap_time) as avg_gap_time from expirence_gap_time group by profile_id),education_gpa_range as(\n" +
//            "select\n" +
//            "case\n" +
//            "\twhen e.avg_gpa <2 then '[0.0,2.0)'\n" +
//            "\twhen e.avg_gpa >=2  and e.avg_gpa <2.5 then '[2.0,2.5)'\n" +
//            "\twhen e.avg_gpa >=2.5  and e.avg_gpa <3.0 then '[2.5,3.0)'\n" +
//            "\twhen e.avg_gpa >=3.0  and e.avg_gpa <3.5 then '[3.0,3.5)'\n" +
//            "\twhen e.avg_gpa >=3.5  and e.avg_gpa <4 then '[3.5,4.0)'\n" +
//            "\telse '[4.0,4.0]'\n" +
//            "end  as gpa_range,profile_id\n" +
//            "from (\n" +
//            "\t\tselect avg(gpa) as avg_gpa ,h.profile_id  from educations h group by h.profile_id\n" +
//            "\t) e\n" +
//            "),profile_avg_gap_time_gpa as(select egr.gpa_range,egr.profile_id,egt.avg_gap_time from education_gpa_range egr left join eachUserAvgFindJobGapTime egt\n" +
//            "on egt.profile_id = egr.profile_id\n" +
//            "where avg_gap_time is not null)\n" +
//            "select gpa_range,avg(avg_gap_time)  from profile_avg_gap_time_gpa group by gpa_range\n",nativeQuery = true)
//    Object[][] getAvgGapPerGpa();


    @Query(value="with gapTime as(select e.*,\n" +
            "e.\"year\" ,je.from_time ,je.from_time-to_date(e.\"year\",'YYYY-MM') as  gap_time\n" +
            "from educations e \n" +
            "join job_experiences je \n" +
            "on e.profile_id  = je.profile_id \n" +
            "where je.from_time-to_date(e.\"year\",'YYYY-MM')>interval '0 second'\n" +
            "and e.is_deleted=false and je.is_deleted=false\n" +
            "),first_gap_time_per_stu as(\n" +
            "select profile_id ,min(gap_time) min_gap, case\n" +
            "\twhen gpa <2 then '[0.0,2.0)'\n" +
            "\twhen  gpa >=2  and gpa <2.5 then '[2.0,2.5)'\n" +
            "\twhen gpa >=2.5  and gpa <3.0 then '[2.5,3.0)'\n" +
            "\twhen gpa >=3.0  and gpa <3.5 then '[3.0,3.5)'\n" +
            "\twhen gpa >=3.5  and gpa <4 then '[3.5,4.0)'\n" +
            "\telse '[4.0,4.0]'\n" +
            "end as  gpa_range  from gapTime group by profile_id,gpa)\n" +
            "select gpa_range, EXTRACT(DAY FROM avg(min_gap)) from \n" +
            "first_gap_time_per_stu\n" +
            "group by gpa_range",nativeQuery = true)
    Object[][]  getAvgGapPerGpa();
}

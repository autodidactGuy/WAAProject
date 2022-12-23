package edu.miu.alumni.service;
import edu.miu.alumni.model.echarts.AvgGapPerGpa;
import java.util.List;

public interface EducationService <T,H,A> extends BasicService<T,H,A>{
    List<AvgGapPerGpa> getAvgGapPerGpa();
}

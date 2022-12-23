package edu.miu.alumni.service;

import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.dto.UserApplicationDto;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.entity.UserApplication;
import edu.miu.alumni.model.echarts.AppliedJobPerMonth;
import edu.miu.alumni.service.BasicService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserApplicationService<T,H,A> extends BasicService<T,H,A> {
    public List<UserApplicationDto> getCurUserAppliedJobs();

    List<H> mostRecentAppliedJob();

    void applyJob(A id);

    List<AppliedJobPerMonth> getAppliedJobNumPerMonth();
}

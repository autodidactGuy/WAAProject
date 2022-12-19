package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.JobExperienceDto;
import edu.miu.alumni.entity.JobExperience;
import edu.miu.alumni.repository.JobExperienceRepository;
import edu.miu.alumni.service.JobExperienceService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class JobExperienceServiceImpl  extends BasicServiceImpl<JobExperience, JobExperienceDto,Long, JobExperienceRepository>
implements JobExperienceService<JobExperience, JobExperienceDto,Long>
{
    public JobExperienceServiceImpl(JobExperienceRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

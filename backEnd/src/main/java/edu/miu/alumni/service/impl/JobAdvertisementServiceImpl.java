package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.entity.JobAdvertisement;
import edu.miu.alumni.repository.JobAdvertisementRepository;
import edu.miu.alumni.service.JobAdvertisementService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class JobAdvertisementServiceImpl
        extends BasicServiceImpl<JobAdvertisement, JobAdvertisementDto,Long, JobAdvertisementRepository>
        implements JobAdvertisementService<JobAdvertisement, JobAdvertisementDto,Long> {
    public JobAdvertisementServiceImpl(JobAdvertisementRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.EducationDto;
import edu.miu.alumni.entity.Education;
import edu.miu.alumni.repository.EducationRepository;
import edu.miu.alumni.service.EducationService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class EducationServiceImpl extends BasicServiceImpl<Education, EducationDto,Long, EducationRepository>
implements EducationService<Education, EducationDto,Long>
{
    public EducationServiceImpl(EducationRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

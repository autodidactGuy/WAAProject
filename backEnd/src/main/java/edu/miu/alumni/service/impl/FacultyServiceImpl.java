package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.FacultyDto;
import edu.miu.alumni.entity.Faculty;
import edu.miu.alumni.repository.FacultyRepository;
import edu.miu.alumni.repository.RoleRepository;
import edu.miu.alumni.service.FacultyService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class FacultyServiceImpl extends BasicServiceImpl<Faculty, FacultyDto,Long, FacultyRepository>
implements FacultyService<Faculty, FacultyDto,Long> {
    public FacultyServiceImpl(FacultyRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

package edu.miu.alumni.dto;

import edu.miu.alumni.entity.Faculty;
import edu.miu.alumni.repository.FacultyRepository;
import edu.miu.alumni.service.FacultyService;
import edu.miu.alumni.service.impl.BasicServiceImpl;
import org.modelmapper.ModelMapper;

public class FacultyDto extends BasicServiceImpl<Faculty, FacultyDto, Long, FacultyRepository>
implements FacultyService<Faculty, FacultyDto, Long> {
    public FacultyDto(FacultyRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.entity.Student;
import edu.miu.alumni.repository.StudentRepository;
import edu.miu.alumni.service.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl extends BasicServiceImpl<Student, StudentDto,Long, StudentRepository>
implements StudentService<Student, StudentDto,Long>
{
    public StudentServiceImpl(StudentRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

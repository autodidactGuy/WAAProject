package edu.miu.alumni.service.impl;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.repository.JobExperienceRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserServiceImpl extends BasicServiceImpl<User, UserDto,Long, UserRepository>
        implements UserService<User, UserDto,Long> {

    @Autowired
    private UserRepository userRepository;
    public UserServiceImpl(UserRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
    @Override
    public List<UserDto> getAllStudentAndFacultyByAdmin() {
        Stream<User> stream = repository.findByRoleNameEquals(Consts.ROLE_STUDENT).stream();

        Stream<User> stream1 = repository.findByRoleNameEquals(Consts.ROLE_FACULT).stream();

        return Stream.concat(stream,stream1).map(x->modelMapper.map(x, UserDto.class))
                .collect(Collectors.toList());
    }
}
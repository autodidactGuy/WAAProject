package edu.miu.alumni.service.impl;

import edu.miu.alumni.consts.Consts;
import edu.miu.alumni.dto.TagDto;
import edu.miu.alumni.dto.UserDto;
import edu.miu.alumni.entity.Role;
import edu.miu.alumni.entity.Tag;
import edu.miu.alumni.entity.User;
import edu.miu.alumni.exceptions.InvalideUserOperationExceptions;
import edu.miu.alumni.repository.TagRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserServiceImpl extends BasicServiceImpl<User, UserDto,Long, UserRepository>
        implements UserService<User, UserDto,Long> {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TagRepository tagRepository;



    @Autowired
    PasswordEncoder encoder;
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

    @Override
    @Transactional
    public void resetPassword(String password, long id) {
        User user = repository.findById(id).get();
        String encodedPassword = encoder.encode(password);
        user.setPassword(encodedPassword);
    }

    @Override
    @Transactional
    public void resetPassword(String password) {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User userByEmailEquals = repository.findUserByEmailEquals(name);
        String encodedPassword = encoder.encode(password);
        userByEmailEquals.setPassword(encodedPassword);
    }

    @Override
    @Transactional
    public void changeActiveStatu(long id) {
        UserRepository repository1 = repository;
        User user = repository1.findById(id).get();
        List<Role> role = user.getRole();
        long count = role.stream().map(Role::getName)
                .filter(x -> x.equals(Consts.ROLE_STUDENT) || x.endsWith(Consts.DEFAULT_ROLE))
                .count();
        if(count>0){
            boolean activated = user.isActivated();
            user.setActivated(!activated);
        }else{
            throw new InvalideUserOperationExceptions(Consts.INVALIDE_ACTIVE_EXCEPTIONS);
        }

    }

    @Override
    public User getUserByEmail(String email) {
        return repository.findUserByEmailEquals(email);
    }

    @Override
    public void subscribTags(List<String> tags) {

        User user = currentLoginUser();
        List<Tag> subscribTag = new ArrayList<Tag>();
        for(String tagName:tags){
            Tag byTitleEquals = tagRepository.findByTitleEquals(tagName);
            subscribTag.add(byTitleEquals);
        }
        user.setInterstedTags(subscribTag);
        userRepository.save(user);
    }

    @Override
    public List<TagDto> getSubscribTags() {
        User user = currentLoginUser();
        return user.getInterstedTags().stream().map(x->{
            TagDto map = modelMapper.map(x, TagDto.class);
            return map;
        }).collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void resetFailedAttempts(String userEmail) {
        User userByEmailEquals = repository.findUserByEmailEquals(userEmail);
        userByEmailEquals.setAccessFailedCount(0);
    }

    public  User currentLoginUser() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User userByEmailEquals = repository.findUserByEmailEquals(name);
        return userByEmailEquals;
    }


}
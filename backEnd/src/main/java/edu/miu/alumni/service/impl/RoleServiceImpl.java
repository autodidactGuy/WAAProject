package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.RoleDto;
import edu.miu.alumni.entity.Role;
import edu.miu.alumni.repository.RoleRepository;
import edu.miu.alumni.service.RoleService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl extends BasicServiceImpl<Role, RoleDto,Long, RoleRepository>
implements RoleService<Role, RoleDto,Long>
{
    public RoleServiceImpl(RoleRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

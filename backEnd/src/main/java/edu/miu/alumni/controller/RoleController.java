package edu.miu.alumni.controller;


import edu.miu.alumni.dto.RoleDto;
import edu.miu.alumni.entity.Role;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.CityService;
import edu.miu.alumni.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/role")
public class RoleController extends BaseController<Role, RoleDto,Long> {

    public RoleController(RoleService<Role, RoleDto, Long> bs) {
        super(bs);
    }
}

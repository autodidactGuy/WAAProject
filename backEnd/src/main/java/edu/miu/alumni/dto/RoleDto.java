package edu.miu.alumni.dto;

import edu.miu.alumni.entity.User;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;

@Data
public class RoleDto {

    private long id;

    private String name;


}

package edu.miu.alumni.controller;

import edu.miu.alumni.dto.StateDto;
import edu.miu.alumni.entity.State;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.StateService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/state")
public class StateController extends BaseController<State, StateDto,String> {
    public StateController(StateService<State, StateDto, String> bs) {
        super(bs);
    }
}

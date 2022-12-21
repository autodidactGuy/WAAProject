package edu.miu.alumni.controller;

import edu.miu.alumni.dto.CommentDto;
import edu.miu.alumni.dto.StateDto;
import edu.miu.alumni.entity.Comment;
import edu.miu.alumni.entity.State;
import edu.miu.alumni.model.StateCustomEntityResponse;
import edu.miu.alumni.service.BasicService;
import edu.miu.alumni.service.CommentService;
import edu.miu.alumni.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
@RestController
@CrossOrigin
@RequestMapping("/state")
public class StateController extends BaseController<State, StateDto,String> {


    @Autowired
    private StateService<State, StateDto, String> bs ;

    public StateController(StateService<State, StateDto, String> bs) {
        super(bs);
        this.bs = bs;
    }

    /**
     * /state/getAllCitiesPerState
     * @return
     */
    @GetMapping("/getAllCitiesPerState")

    public ResponseEntity<List<StateCustomEntityResponse>> getAllCitiesPerState(){
        List<StateCustomEntityResponse> stateDtoList= bs.getAllCitiesPerState();

        return ResponseEntity.ok(stateDtoList);
    }
}

package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.StateDto;
import edu.miu.alumni.entity.State;
import edu.miu.alumni.repository.StateRepository;
import edu.miu.alumni.service.StateService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class StateServiceImpl extends BasicServiceImpl<State, StateDto,String, StateRepository>
    implements StateService<State, StateDto,String> {
    public StateServiceImpl(StateRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }
}

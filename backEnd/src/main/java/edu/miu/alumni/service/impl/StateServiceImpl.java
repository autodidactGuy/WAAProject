package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.StateDto;
import edu.miu.alumni.entity.State;
import edu.miu.alumni.model.CityChild;
import edu.miu.alumni.model.StateCustomEntityResponse;
import edu.miu.alumni.repository.CityRepository;
import edu.miu.alumni.repository.StateRepository;
import edu.miu.alumni.service.StateService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class StateServiceImpl extends BasicServiceImpl<State, StateDto,String, StateRepository>
    implements StateService<State, StateDto,String> {

    @Autowired
    private CityRepository cityRepository;
    public StateServiceImpl(StateRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }

    @Override
    public List<StateCustomEntityResponse> getAllCitiesPerState() {

        Object[] allStatesAndCities = repository.getAllStatesAndCities();

        var stateCustomEntityResponses = new ArrayList<StateCustomEntityResponse>();
        for(Object h :allStatesAndCities){

            if(h instanceof  Object[]){
                Object [] y = (Object []) h;
                StateCustomEntityResponse stateCustomEntityResponse = new StateCustomEntityResponse();
                List<CityChild> list = new ArrayList<CityChild>();
                String cities = (String) y[2];
                for (String s : cities.split(",")) {
                    list.add(new CityChild(s,s));
                }
                stateCustomEntityResponses.add( new StateCustomEntityResponse((String)y[0],(String )y[1],list));
            }
        }

        return stateCustomEntityResponses;
    }
}

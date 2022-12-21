package edu.miu.alumni.service;

import edu.miu.alumni.model.StateCustomEntityResponse;

import java.util.List;

public interface StateService <T,H,A> extends BasicService<T,H,A>{
    List<StateCustomEntityResponse> getAllCitiesPerState();
}

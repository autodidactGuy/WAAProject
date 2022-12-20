package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.CityDto;
import edu.miu.alumni.entity.SoftDeleteBaseClass;
import edu.miu.alumni.service.BasicService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.lang.reflect.ParameterizedType;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 *
 * @param <T> is Entity type
 * @param <H> is DTO type
 *  @param <A> is ID type
 */
@NoArgsConstructor
public abstract  class BasicServiceImpl<T  extends SoftDeleteBaseClass ,H,A, D extends CrudRepository>  implements BasicService<T, H,A > {
    public D repository;

    public ModelMapper modelMapper;

    public BasicServiceImpl(D repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void save(H ad) {
        repository.save(ad);
    }

    @Override
    public H getById(A id) {
        return  modelMapper.map(
                repository.findById(id).get(), getDToClassName());

    }

    @Override
    public void update(H ad, A id) {
        T entity = modelMapper.map(ad, getEntityClassName());
        repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(A id) {
        T h = (T) repository.findById(id).stream().findFirst().get();
        h.setDeleted(true);
    }

    @Override
    public List<H> getAll() {
        Iterator<T> iterator = repository.findAll().iterator();
        List<H> dtos = new ArrayList<H>();
        while (iterator.hasNext()){
            T next = iterator.next();
            if(!next.isDeleted()){
                dtos.add(modelMapper.map(next, getDToClassName()));
            }
        }
        return dtos;
    }

    private Class<H> getDToClassName(){
        return (Class<H>) ((ParameterizedType) this.getClass().getGenericSuperclass())
                .getActualTypeArguments()[1];
    }
    private Class<T> getEntityClassName(){
        return (Class<T>) ((ParameterizedType) this.getClass().getGenericSuperclass())
                .getActualTypeArguments()[0];
    }
}

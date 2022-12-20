package edu.miu.alumni.controller;

import edu.miu.alumni.service.BasicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @useage
 * public class CityController extends BaseController<City,CityDto, CityId>{
 *
 *     @Autowired
 *     public CityController(CityService<City, CityDto, CityId> bs) {
 *         super(bs);
 *     }
 * }
 *
 *
 *
 * @param <T> is the Entity type
 * @param <H> is the Dto type
 * @param <A> is the primary key type in entity
 */
public class BaseController<T,H,A> implements BasicControllerInterface<T,H,A>{

    public BasicService<T,H,A> bs ;

    public BaseController(  BasicService<T, H, A> bs) {
        this.bs = bs;
    }


    @Override
    @GetMapping
    public List<H> findAll() {
        return bs.getAll();
    }

    @Override
    @PostMapping
    public void save(@RequestBody H t) {
        bs.save(t);
    }


    @Override
    @PutMapping("/{id}")
    public void update(@RequestBody H t,  @PathVariable  A id) {

            bs.update(t,id);
    }

    @Override
    @GetMapping("/{id}")
    public H findById(@PathVariable A id) {
       return  bs.getById(id);
    }

    @Override
    @DeleteMapping("/{id}")
    public void delete(@PathVariable A id) {
        bs.delete(id);
    }
}

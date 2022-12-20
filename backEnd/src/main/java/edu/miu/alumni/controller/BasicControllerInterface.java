package edu.miu.alumni.controller;

import java.util.List;


/**
* @param <T> is the Entity type
* @param <H> is the Dto type
* @param <A> is the primary key type in entity
*/
public interface BasicControllerInterface<T,H,A> {
    List<H> findAll();
    void save(H t);
    void update(H t, A id);

    H findById(A id);

    void delete(A id);
}

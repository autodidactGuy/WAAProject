package edu.miu.alumni.controller;

import java.util.List;

public interface BasicControllerInterface<T,H,A> {
    List<H> findAll();
    void save(H t);
    void update(H t, int id);

    H findById(A id);

    void delete(A id);
}

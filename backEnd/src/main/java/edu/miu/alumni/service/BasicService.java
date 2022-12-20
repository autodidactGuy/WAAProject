package edu.miu.alumni.service;

import edu.miu.alumni.dto.StudentDto;
import edu.miu.alumni.model.SearchStudentRequest;
import org.springframework.stereotype.Service;

import java.util.List;
/**
 *
 * @param <T> is Entity type
 * @param <H> is DTO type
 *  @param <A> is ID type
 */
@Service
public interface BasicService<T,H,A> {


    void save(H ad);
    H getById(A id);
    void update(H ad,A id);
    void delete(A id);

    List<H> getAll();

}

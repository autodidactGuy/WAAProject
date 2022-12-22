package edu.miu.alumni.service;

import edu.miu.alumni.dto.FileDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileService <T,H,A> extends BasicService<T,H,A>{
    FileDto saveFile(MultipartFile multipartFile) throws IOException;
}

package edu.miu.alumni.controller;


import edu.miu.alumni.dto.FileDto;
import edu.miu.alumni.entity.File;
import edu.miu.alumni.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/file")
public class FileController {

    @Autowired
    private FileService<File,FileDto,Long> fileService;

    @PostMapping
    public ResponseEntity<?> file(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        try{
            FileDto fileDto = fileService.saveFile(multipartFile);
            return new ResponseEntity<>(fileDto, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("upload failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}

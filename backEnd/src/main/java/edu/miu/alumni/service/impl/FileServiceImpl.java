package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.FileDto;
import edu.miu.alumni.entity.File;
import edu.miu.alumni.exceptions.InvalideUserOperationExceptions;
import edu.miu.alumni.repository.FacultyRepository;
import edu.miu.alumni.repository.FileRepository;
import edu.miu.alumni.service.FileService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileServiceImpl extends BasicServiceImpl<File, FileDto,Long, FileRepository>
implements FileService<File,FileDto,Long>
{

    public FileServiceImpl(FileRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }

    @Override
    public FileDto saveFile(MultipartFile multipartFile) throws IOException {
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        if(fileName.isEmpty()){
            throw new InvalideUserOperationExceptions("upload file is null");
        }
        String filecode = saveFileToServer(fileName, multipartFile);
        FileDto  response = new FileDto();
        response.setFileName(fileName);
        response.setFileUrl("/download/" + filecode+ "-" + fileName);
        FileDto save = save(response);
        return save;
    }

    public  String saveFileToServer(String fileName, MultipartFile multipartFile)
            throws IOException {
        Path uploadPath = Paths.get("file-upload");

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        String fileCode = UUID.randomUUID().toString().substring(1,8);

        try (InputStream inputStream = multipartFile.getInputStream()) {
            Path filePath = uploadPath.resolve(fileCode + "-" + fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ioe) {
            throw new IOException("Could not save file: " + fileName, ioe);
        }

        return fileCode;
    }
}

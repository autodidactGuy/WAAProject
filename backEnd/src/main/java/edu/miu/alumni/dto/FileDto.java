package edu.miu.alumni.dto;

import edu.miu.alumni.entity.JobAdvertisement;
import lombok.Builder;
import lombok.Data;


@Data
public class FileDto {

    private Long id;

    private String fileUrl;

    private String fileName;

}

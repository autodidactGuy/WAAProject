package edu.miu.alumni.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSubscribTag {
    private List<String> tags;
}

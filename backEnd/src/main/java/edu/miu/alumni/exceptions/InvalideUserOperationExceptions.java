package edu.miu.alumni.exceptions;

public class InvalideUserOperationExceptions extends RuntimeException{
    public InvalideUserOperationExceptions(String invalideActiveExceptions) {
        super(invalideActiveExceptions);
    }
}

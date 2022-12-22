package edu.miu.alumni.consts;

import javax.xml.bind.annotation.XmlType;

public class Consts {

    public static final String DEFAULT_ROLE= "STUDENT";

    public static final String ROLE_STUDENT = "STUDENT";

    public static final String ROLE_ADMIN = "ADMIN";

    public static final String ROLE_FACULT = "FACULTY";

    public static final String INVALIDE_ACTIVE_EXCEPTIONS = "you are only allowed to operate the faculty and student active status";


    public static final String USER_REGIST_SUCCESS = "user register successful";

    public static final String THIS_USER_EMAIL_NOT_VALID = "the user email is not valid";
    public static final String INVALIE_USER_OR_PASSWORD = "your username/password is wrong ,please check it";
    public static final int MAX_FAILED_ATTEMPTS = 5;

    public static final String  INITIAL_PASSWORD = "123";

    public static final String DEFUALT_PORT = ":8080";

}

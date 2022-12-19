package edu.miu.alumni.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.miu.alumni.entity.Role;
import edu.miu.alumni.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

public class AlumniUserDetails implements UserDetails {

    private String email;

    @JsonIgnore
    private String password;

    private List<Role> roles;

    private String firstName;

    private String lastName;

    private boolean isActivated;

    private boolean isLockedUser;

    private boolean isDeletedUser;
    public AlumniUserDetails(User user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.roles  = user.getRole();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.isActivated = user.isActivated();
        this.isLockedUser = !user.isLockoutEnd();
        this.isDeletedUser = user.isDeleted();

    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

           return  roles.stream().map(role->{
                    return new SimpleGrantedAuthority("ROLE_"+role.getName().toUpperCase(Locale.ROOT));
            }).collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.isActivated;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.isLockedUser;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return !this.isDeletedUser;
    }
}

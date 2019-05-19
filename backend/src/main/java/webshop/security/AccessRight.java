package webshop.security;

import org.springframework.security.core.GrantedAuthority;

public enum AccessRight implements GrantedAuthority {
    ROLE_USER;

    @Override
    public String getAuthority(){
        return this.toString();
    }
}

package webshop.security;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.Instant;
import java.util.Collection;
import java.util.UUID;

@Data
public class CustomUserImpl extends User {

    private final UUID id;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Instant joinDate;

    public CustomUserImpl(webshop.entity.User user,
                          Collection<? extends GrantedAuthority> authorities) {
        super(user.getEmail(), user.getPassword(), authorities);
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.joinDate = user.getRegistrationDate();
    }
}

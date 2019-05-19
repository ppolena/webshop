package polenapeter.mercuryserver.security;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.time.Instant;
import java.util.Collection;
import java.util.UUID;

@Data
public class CustomUserImpl extends User {

    private final UUID id;
    private final String email;
    private final Instant joinDate;

    public CustomUserImpl(polenapeter.mercuryserver.entity.User user,
                          Collection<? extends GrantedAuthority> authorities) {
        super(user.getUsername(), user.getPassword(), authorities);
        this.id = user.getId();
        this.email = user.getEmail();
        this.joinDate = user.getJoinDate();
    }
}

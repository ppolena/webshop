package webshop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.experimental.Accessors;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;

@Data
@Accessors(chain = true)
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "users")
public class User extends BaseEntity {

    @NotNull
    @Size(min = 1, max = 50)
    @Length(min = 1, max = 50)
    @Column(name = "firstName", nullable = false, length = 50)
    private String firstName;

    @NotNull
    @Size(min = 1, max = 50)
    @Length(min = 1, max = 50)
    @Column(name = "lastName", nullable = false, length = 50)
    private String lastName;

    @NotNull
    @Email
    @Size(min = 3, max = 254)
    @Length(min = 3, max = 254)
    @Column(name = "email", nullable = false, unique = true, updatable = false, length = 254)
    private String email;

    @CreationTimestamp
    @Column(name = "registrationDate", nullable = false, updatable = false)
    private Instant registrationDate;

    @NotNull
    @Size(min = 8)
    @Length(min = 8)
    @Column(name = "password", nullable = false, columnDefinition = "text")
    private String password;

    @Column(name = "phone", columnDefinition = "text")
    private String phone;

    @Column(name = "postalCode", columnDefinition = "text")
    private String postalCode;

    @Column(name = "city", columnDefinition = "text")
    private String city;

    @Column(name = "address", columnDefinition = "text")
    private String address;

    @JsonIgnore
    public String getPassword() {
        return this.password;
    }

    @JsonProperty
    public User setPassword(String password) {
        this.password = new BCryptPasswordEncoder().encode(password);
        return this;
    }
}

package webshop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;

@Data
@Entity
@Table(name = "user")
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
    @Column(name = "joinDate", nullable = false, updatable = false)
    private Instant joinDate;

    @NotNull
    @Size(min = 8)
    @Length(min = 8)
    @Column(name = "password", nullable = false, columnDefinition = "text")
    private String password;

    @JsonIgnore
    public String getPassword() {
        return this.password;
    }

    @JsonProperty
    public User setPassword(String password) {
        this.password = password;
        return this;
    }
}

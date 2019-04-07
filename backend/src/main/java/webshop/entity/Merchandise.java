package webshop.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import lombok.experimental.Accessors;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

import static javax.persistence.EnumType.STRING;

@Data
@Accessors(chain = true)
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "merchandise")
public class Merchandise extends BaseEntity {

    @NotNull
    @Size(min = 1, max = 100)
    @Length(min = 1, max = 100)
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @NotNull
    @Enumerated(STRING)
    private MerchandiseType type;

    @NotNull
    @Size(min = 1, max = 100)
    @Length(min = 1, max = 100)
    @Column(name = "manufacturer", nullable = false, length = 100)
    private String manufacturer;

    @NotNull
    @PositiveOrZero
    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "thumbnail", columnDefinition = "text")
    private String thumbnail;

    @Column(name = "image", columnDefinition = "text")
    private String image;

    @Column(name = "description", columnDefinition = "text")
    private String description;
}

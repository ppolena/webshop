package webshop.entity;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

public class CartItem {

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "merchandise_id")
    private Merchandise merchandise;

    @NotNull
    @Positive
    @Column(name = "amount")
    private int amount;
}

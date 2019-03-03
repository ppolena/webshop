package webshop.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import webshop.entity.CartItem;

import java.util.UUID;

@RepositoryRestResource(collectionResourceRel = "cart-items", path = "cart-items")
public interface CartItemRepository extends JpaRepository<CartItem, UUID> {

    @Override
    @RestResource
    <S extends CartItem> S save(S entity);
}

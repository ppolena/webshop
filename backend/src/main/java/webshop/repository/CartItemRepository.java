package webshop.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import webshop.entity.CartItem;

import java.util.Optional;
import java.util.UUID;

@RepositoryRestResource(collectionResourceRel = "cart-items", path = "cart-items")
public interface CartItemRepository extends JpaRepository<CartItem, UUID> {

    @Override
    @RestResource
    <S extends CartItem> S save(S entity);

    @Override
    @RestResource
    Page<CartItem> findAll(Pageable pageable);

    @RestResource(path = "by-user", rel = "by-user")
    Page<CartItem> findByUserId(@Param("id") UUID id, Pageable pageable);

    @RestResource(path = "by-merchandise", rel = "by-merchandise")
    Page<CartItem> findByMerchandiseId(@Param("id") UUID id, Pageable pageable);

    @RestResource(path = "by-user-and-merchandise", rel = "by-user-and-merchandise")
    Optional<CartItem> findByUserIdAndMerchandiseId(@Param("uid") UUID uid, @Param("mid") UUID mid);
}

package webshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import webshop.entity.Merchandise;

import java.util.UUID;

@RepositoryRestResource(collectionResourceRel = "merchandise", path = "merchandise")
public interface MerchandiseRepository extends JpaRepository<Merchandise, UUID> {

    @Override
    @RestResource
    <S extends Merchandise> S save(S entity);
}

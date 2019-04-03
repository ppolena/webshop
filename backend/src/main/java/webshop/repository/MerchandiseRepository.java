package webshop.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import webshop.entity.Merchandise;
import webshop.entity.MerchandiseType;

import java.util.Optional;
import java.util.UUID;

@RepositoryRestResource(collectionResourceRel = "merchandise", path = "merchandise")
public interface MerchandiseRepository extends JpaRepository<Merchandise, UUID> {

    @Override
    @RestResource
    <S extends Merchandise> S save(S entity);

    @Override
    @RestResource
    Optional<Merchandise> findById(UUID id);

    @Override
    @RestResource
    Page<Merchandise> findAll(Pageable pageable);

    @RestResource(path = "by-type", rel = "by-type")
    Page<Merchandise> findByType(@Param("type") MerchandiseType type, Pageable pageable);

    @RestResource(path = "by-search-text", rel = "by-search-text")
    @Query(
            value = "select m " +
                    "from Merchandise m " +
                    "where " +
                    "(lower(m.name) like '%' || lower(?1) || '%') " +
                    "or " +
                    "(lower(m.manufacturer) like '%' || lower(?1) || '%') " +
                    "or " +
                    "(lower(m.description) like '%' || lower(?1) || '%')",

            countQuery = "select count(m.id) " +
                    "from Merchandise m " +
                    "where " +
                    "(lower(m.name) like '%' || lower(?1) || '%') " +
                    "or " +
                    "(lower(m.manufacturer) like '%' || lower(?1) || '%') " +
                    "or " +
                    "(lower(m.description) like '%' || lower(?1) || '%')")
    Page<Merchandise> findBySearchText(@Param("search-text") String searchText, Pageable pageable);
}

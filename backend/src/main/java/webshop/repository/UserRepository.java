package webshop.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import webshop.entity.User;

import java.util.Optional;
import java.util.UUID;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends JpaRepository<User, UUID> {

    @Override
    @RestResource
    <S extends User> S save(S entity);

    @Override
    @RestResource
    Optional<User> findById(UUID id);

    @Override
    @RestResource
    Page<User> findAll(Pageable pageable);

    @RestResource(path = "by-first-and-last-name", rel = "by-first-and-last-name")
    Optional<User> findByFirstNameAndLastName(@Param("firstname") String firstName, @Param("lastname") String lastName);

    @RestResource(path = "by-email", rel = "by-email")
    Optional<User> findByEmail(@Param("email") String email);

    @RestResource(path = "by-search-text", rel = "by-search-text")
    @Query(
            value = "select u " +
                    "from User u " +
                    "where " +
                    "(lower(u.firstName) like '%' || lower(?1) || '%') " +
                    "or " +
                    "(lower(u.lastName) like '%' || lower(?1) || '%')",

            countQuery = "select count(u.id) " +
                    "from User u " +
                    "where " +
                    "(lower(u.firstName) like '%' || lower(?1) || '%') " +
                    "or " +
                    "(lower(u.lastName) like '%' || lower(?1) || '%')"
    )
    Page<User> findBySearchText(@Param("search-text") String searchText, Pageable pageable);
}

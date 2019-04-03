package webshop;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;
import webshop.entity.User;
import webshop.repository.UserRepository;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryIntegrationTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void findById() {
        //given
        User user = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("test@test.test")
                .setPassword("12345678");

        User persistedUser = entityManager.persist(user);
        entityManager.flush();

        //when
        Optional<User> foundUser = userRepository.findById(persistedUser.getId());

        //then
        assertThat(foundUser.isPresent()).isTrue();
        assertThat(foundUser.get().getFirstName()).isEqualTo("John");
        assertThat(foundUser.get().getLastName()).isEqualTo("Doe");
        assertThat(foundUser.get().getEmail()).isEqualTo("test@test.test");
    }

    @Test
    public void findAllSortedByFirstNameAsc() {
        User user1 = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("user1@test.test")
                .setPassword("12345678");

        User user2 = new User()
                .setFirstName("Jane")
                .setLastName("Doe")
                .setEmail("user2@test.test")
                .setPassword("12345678");

        User user3 = new User()
                .setFirstName("Jim")
                .setLastName("Doe")
                .setEmail("user3@test.test")
                .setPassword("12345678");

        entityManager.persist(user1);
        entityManager.persist(user2);
        entityManager.persist(user3);
        entityManager.flush();

        //when
        Page<User> userPageSortedByFirstNameAsc = userRepository.findAll(PageRequest.of(0, 10, Sort.by("firstName").ascending()));

        //then
        assertThat(userPageSortedByFirstNameAsc.getTotalElements()).isEqualTo(3);
        assertThat(userPageSortedByFirstNameAsc.getContent()).extracting(User::getFirstName).containsExactly("Jane", "Jim", "John");
    }

    @Test
    public void findAllSortedByLastNameAsc() {
        User user1 = new User()
                .setFirstName("John")
                .setLastName("Ace")
                .setEmail("user1@test.test")
                .setPassword("12345678");

        User user2 = new User()
                .setFirstName("Jane")
                .setLastName("Bane")
                .setEmail("user2@test.test")
                .setPassword("12345678");

        User user3 = new User()
                .setFirstName("Jim")
                .setLastName("Cram")
                .setEmail("user3@test.test")
                .setPassword("12345678");

        entityManager.persist(user1);
        entityManager.persist(user2);
        entityManager.persist(user3);
        entityManager.flush();

        //when
        Page<User> userPageSortedByFirstNameAsc = userRepository.findAll(PageRequest.of(0, 10, Sort.by("lastName").ascending()));

        //then
        assertThat(userPageSortedByFirstNameAsc.getTotalElements()).isEqualTo(3);
        assertThat(userPageSortedByFirstNameAsc.getContent()).extracting(User::getLastName).containsExactly("Ace", "Bane", "Cram");
    }

    @Test
    public void findAllSortedByEmailAsc() {
        User user1 = new User()
                .setFirstName("John")
                .setLastName("Ace")
                .setEmail("user1@test.test")
                .setPassword("12345678");

        User user2 = new User()
                .setFirstName("Jane")
                .setLastName("Bane")
                .setEmail("user2@test.test")
                .setPassword("12345678");

        User user3 = new User()
                .setFirstName("Jim")
                .setLastName("Cram")
                .setEmail("user3@test.test")
                .setPassword("12345678");

        entityManager.persist(user1);
        entityManager.persist(user2);
        entityManager.persist(user3);
        entityManager.flush();

        //when
        Page<User> userPageSortedByFirstNameAsc = userRepository.findAll(PageRequest.of(0, 10, Sort.by("email").ascending()));

        //then
        assertThat(userPageSortedByFirstNameAsc.getTotalElements()).isEqualTo(3);
        assertThat(userPageSortedByFirstNameAsc.getContent()).extracting(User::getEmail).containsExactly("user1@test.test", "user2@test.test", "user3@test.test");
    }

    @Test
    public void findByFirstNameAndLastName() {
        //given
        User user = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("test@test.test")
                .setPassword("12345678");

        entityManager.persist(user);
        entityManager.flush();

        //when
        Optional<User> foundUser = userRepository.findByFirstNameAndLastName("John", "Doe");

        //then
        assertThat(foundUser.isPresent()).isTrue();
        assertThat(foundUser.get().getFirstName()).isEqualTo("John");
        assertThat(foundUser.get().getLastName()).isEqualTo("Doe");
        assertThat(foundUser.get().getEmail()).isEqualTo("test@test.test");
    }

    @Test
    public void findByEmail() {
        //given
        User user = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("test@test.test")
                .setPassword("12345678");

        entityManager.persist(user);
        entityManager.flush();

        //when
        Optional<User> foundUser = userRepository.findByEmail("test@test.test");

        //then
        assertThat(foundUser.isPresent()).isTrue();
        assertThat(foundUser.get().getFirstName()).isEqualTo("John");
        assertThat(foundUser.get().getLastName()).isEqualTo("Doe");
        assertThat(foundUser.get().getEmail()).isEqualTo("test@test.test");
    }

    @Test
    public void findBySearchText() {
        User user1 = new User()
                .setFirstName("John")
                .setLastName("Ace")
                .setEmail("user1@test.test")
                .setPassword("12345678");

        User user2 = new User()
                .setFirstName("Jane")
                .setLastName("Bane")
                .setEmail("user2@test.test")
                .setPassword("12345678");

        User user3 = new User()
                .setFirstName("Jim")
                .setLastName("Cram")
                .setEmail("user3@test.test")
                .setPassword("12345678");

        entityManager.persist(user1);
        entityManager.persist(user2);
        entityManager.persist(user3);
        entityManager.flush();

        //when
        Page<User> userPage = userRepository.findBySearchText("ban", PageRequest.of(0, 10));

        //then
        assertThat(userPage.getTotalElements()).isEqualTo(1);
        assertThat(userPage.getContent()).extracting(User::getFirstName).containsExactly("Jane");
    }
}

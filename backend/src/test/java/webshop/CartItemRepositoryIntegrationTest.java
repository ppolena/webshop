package webshop;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringRunner;
import webshop.entity.CartItem;
import webshop.entity.Merchandise;
import webshop.entity.User;
import webshop.repository.CartItemRepository;
import webshop.repository.MerchandiseRepository;
import webshop.repository.UserRepository;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static webshop.entity.MerchandiseType.ELECTRONICS;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CartItemRepositoryIntegrationTest{
	@Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MerchandiseRepository merchandiseRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Test
    public void findAll() {
        //given
        User user = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("test@test.test")
                .setPassword("12345678");

        Merchandise merchandise1 = new Merchandise()
                .setName("Galaxy S1")
                .setType(ELECTRONICS)
                .setManufacturer("Samsung")
                .setPrice(199.99);

        Merchandise merchandise2 = new Merchandise()
                .setName("Galaxy S2")
                .setType(ELECTRONICS)
                .setManufacturer("Samsung")
                .setPrice(299.99);

        Merchandise merchandise3 = new Merchandise()
                .setName("Galaxy S3")
                .setType(ELECTRONICS)
                .setManufacturer("Samsung")
                .setPrice(399.99);

        User persistedUser = entityManager.persist(user);
        Merchandise persistedMerchandise1 = entityManager.persist(merchandise1);
        Merchandise persistedMerchandise2 = entityManager.persist(merchandise2);
        Merchandise persistedMerchandise3 = entityManager.persist(merchandise3);
        entityManager.flush();

        CartItem cartItem1 = new CartItem()
                .setUser(persistedUser)
                .setMerchandise(persistedMerchandise1)
                .setAmount(1);

        CartItem cartItem2 = new CartItem()
                .setUser(persistedUser)
                .setMerchandise(persistedMerchandise2)
                .setAmount(1);

        CartItem cartItem3 = new CartItem()
                .setUser(persistedUser)
                .setMerchandise(persistedMerchandise3)
                .setAmount(1);

        entityManager.persist(cartItem1);
        entityManager.persist(cartItem2);
        entityManager.persist(cartItem3);
        entityManager.flush();

        //when
        Page<CartItem> cartItemPage = cartItemRepository.findAll(PageRequest.of(0, 10));

        //then
        assertThat(cartItemPage.getTotalElements()).isEqualTo(3);
        assertThat(cartItemPage.getContent()).extracting(CartItem::getUser).extracting(User::getLastName).containsExactly("Doe", "Doe", "Doe");
        assertThat(cartItemPage.getContent()).extracting(CartItem::getMerchandise).extracting(Merchandise::getName).containsExactlyInAnyOrder("Galaxy S1", "Galaxy S2", "Galaxy S3");
    }

	@Test
	public void findByUserId(){
		//given
		User user = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("test@test.test")
                .setPassword("12345678");

        Merchandise merchandise = new Merchandise()
                .setName("Galaxy X")
                .setType(ELECTRONICS)
                .setManufacturer("Samsung")
                .setPrice(999.99);

        User persistedUser = entityManager.persist(user);
        Merchandise persistedMerchandise = entityManager.persist(merchandise);
        entityManager.flush();

        CartItem cartItem = new CartItem()
                .setUser(persistedUser)
                .setMerchandise(persistedMerchandise)
                .setAmount(3);

        entityManager.persist(cartItem);
        entityManager.flush();
		
		//when
        Page<CartItem> cartItemPage = cartItemRepository.findByUserId(persistedUser.getId(), PageRequest.of(0, 10));
		
		//then
        assertThat(cartItemPage.getTotalElements()).isEqualTo(1);
        assertThat(cartItemPage.getContent()).extracting(CartItem::getUser).extracting(User::getLastName).containsExactly("Doe");
	}
	
	@Test
	public void findByMerchandiseId(){
        //given
        User user = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("test@test.test")
                .setPassword("12345678");

        Merchandise merchandise = new Merchandise()
                .setName("Galaxy X")
                .setType(ELECTRONICS)
                .setManufacturer("Samsung")
                .setPrice(999.99);

        User persistedUser = entityManager.persist(user);
        Merchandise persistedMerchandise = entityManager.persist(merchandise);
        entityManager.flush();

        CartItem cartItem = new CartItem()
                .setUser(persistedUser)
                .setMerchandise(persistedMerchandise)
                .setAmount(3);

        entityManager.persist(cartItem);
        entityManager.flush();

        //when
        Page<CartItem> cartItemPage = cartItemRepository.findByMerchandiseId(persistedMerchandise.getId(), PageRequest.of(0, 10));

        //then
        assertThat(cartItemPage.getTotalElements()).isEqualTo(1);
        assertThat(cartItemPage.getContent()).extracting(CartItem::getMerchandise).extracting(Merchandise::getName).containsExactly("Galaxy X");
    }

    @Test
    public void findByUserAndMerchandiseId() {
        //given
        User user = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("test@test.test")
                .setPassword("12345678");

        Merchandise merchandise = new Merchandise()
                .setName("Galaxy X")
                .setType(ELECTRONICS)
                .setManufacturer("Samsung")
                .setPrice(999.99);

        User persistedUser = entityManager.persist(user);
        Merchandise persistedMerchandise = entityManager.persist(merchandise);
        entityManager.flush();

        CartItem cartItem = new CartItem()
                .setUser(persistedUser)
                .setMerchandise(persistedMerchandise)
                .setAmount(1);

        entityManager.persist(cartItem);
        entityManager.flush();

        //when
        Optional<CartItem> foundCartItem = cartItemRepository.findByUserIdAndMerchandiseId(persistedUser.getId(), persistedMerchandise.getId());

        //then
        assertThat(foundCartItem.isPresent()).isTrue();
        assertThat(foundCartItem.get().getUser().getId()).isEqualTo(persistedUser.getId());
        assertThat(foundCartItem.get().getMerchandise().getId()).isEqualTo(persistedMerchandise.getId());
        assertThat(foundCartItem.get().getAmount()).isEqualTo(1);
    }
}
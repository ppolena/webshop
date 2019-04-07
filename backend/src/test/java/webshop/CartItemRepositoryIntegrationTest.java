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
import webshop.entity.CartItem;
import webshop.repository.CartItemRepository;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CartItemRepositoryIntegrationTest{
	@Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CartItemRepository cartItemRepository;
	
	@Test
	public void findByUserId(){
		//given
		User user = new User()
                .setFirstName("John")
                .setLastName("Doe")
                .setEmail("test@test.test")
                .setPassword("12345678");

        CartItem persistedCartItem = entityManager.persist(cartItem);
        entityManager.flush();
		
		//when
		Optional<CartItem> foundCartItem = cartItemRepository.findByUserId(persistedCartItem.getId());
		
		//then
		assertThat(foundCartItem.isPresent()).isTrue();
        assertThat(foundCartItem.get().getFirstName()).isEqualTo("John");
        assertThat(foundCartItem.get().getLastName()).isEqualTo("Doe");
        assertThat(foundCartItem.get().getEmail()).isEqualTo("test@test.test");
	}
	
	@Test
	public void findByMerchandiseId(){
		//given
		Merchandise merchandise = new Merchandise()
                .setName("Galaxy X")
                .setType(ELECTRONICS)
                .setManufacturer("Samsung")
                .setPrice(999.99);

        CartItem persistedCartItem = entityManager.persist(cartItem);
        entityManager.flush();
		
		//when
		Optional<CartItem> foundCartItem = cartItemRepository.findByMerchandiseId(persistedCartItem.getId());
		
		//then
		assertThat(foundCartItem.isPresent()).isTrue();
        assertThat(foundCartItem.get().getName()).isEqualTo("Galaxy X");
        assertThat(foundCartItem.get().getType()).isEqualTo(ELECTRONICS);
        assertThat(foundCartItem.get().getManufacturer()).isEqualTo("Samsung");
        assertThat(foundCartItem.get().getPrice()).isEqualTo(999.99);
        assertThat(foundCartItem.get().getImage()).isNull();
        assertThat(foundCartItem.get().getThumbnail()).isNull();
        assertThat(foundCartItem.get().getDescription()).isNull();
	}
}
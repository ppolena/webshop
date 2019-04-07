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
import webshop.entity.Merchandise;
import webshop.repository.MerchandiseRepository;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static webshop.entity.MerchandiseType.ELECTRONICS;

@RunWith(SpringRunner.class)
@DataJpaTest
public class MerchandiseRepositoryIntegrationTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private MerchandiseRepository merchandiseRepository;

    @Test
    public void findById() {
        //given
        Merchandise merchandise = new Merchandise()
                .setName("Galaxy X")
                .setType(ELECTRONICS)
                .setManufacturer("Samsung")
                .setPrice(999.99);

        Merchandise persistedMerchandise = entityManager.persist(merchandise);
        entityManager.flush();

        //when
        Optional<Merchandise> foundMerchandise = merchandiseRepository.findById(persistedMerchandise.getId());

        //then
        assertThat(foundMerchandise.isPresent()).isTrue();
        assertThat(foundMerchandise.get().getName()).isEqualTo("Galaxy X");
        assertThat(foundMerchandise.get().getType()).isEqualTo(ELECTRONICS);
        assertThat(foundMerchandise.get().getManufacturer()).isEqualTo("Samsung");
        assertThat(foundMerchandise.get().getPrice()).isEqualTo(999.99);
        assertThat(foundMerchandise.get().getImage()).isNull();
        assertThat(foundMerchandise.get().getThumbnail()).isNull();
        assertThat(foundMerchandise.get().getDescription()).isNull();
    }

    @Test
    public void findAllSortedByNameAsc() {
        //given
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

        entityManager.persist(merchandise1);
        entityManager.persist(merchandise2);
        entityManager.persist(merchandise3);
        entityManager.flush();

        //when
        Page<Merchandise> merchandisePage = merchandiseRepository.findAll(PageRequest.of(0, 10, Sort.by("name").ascending()));

        //then
        assertThat(merchandisePage.getTotalElements()).isEqualTo(3);
        assertThat(merchandisePage.getContent()).extracting(Merchandise::getName).containsExactly("Galaxy S1", "Galaxy S2", "Galaxy S3");
    }
	
	public void findByType() {
        //given
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

        entityManager.persist(merchandise1);
        entityManager.persist(merchandise2);
        entityManager.persist(merchandise3);
        entityManager.flush();

        //when
        Page<Merchandise> merchandisePage = merchandiseRepository.findByType(ELECTRONICS, PageRequest.of(0, 10, Sort.by("name").ascending()));

        //then
        assertThat(merchandisePage.getTotalElements()).isEqualTo(3);
        assertThat(merchandisePage.getContent()).extracting(Merchandise::getName).containsExactly("Galaxy S1", "Galaxy S2", "Galaxy S3");
	}
	
	public void findBySearchText() {
		//given
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

        entityManager.persist(merchandise1);
        entityManager.persist(merchandise2);
        entityManager.persist(merchandise3);
        entityManager.flush();

        //when
        Page<Merchandise> merchandisePage = merchandiseRepository.findBySearchText("sung", PageRequest.of(0, 10, Sort.by("name").ascending()));
		
        //then		
        assertThat(merchandisePage.getTotalElements()).isEqualTo(3);
        assertThat(merchandisePage.getContent()).extracting(Merchandise::getName).containsExactly("Galaxy S1", "Galaxy S2", "Galaxy S3");
	}
}
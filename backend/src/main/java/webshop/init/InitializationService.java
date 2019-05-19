package webshop.init;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;
import webshop.entity.Merchandise;
import webshop.entity.User;
import webshop.repository.MerchandiseRepository;
import webshop.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

import static webshop.entity.MerchandiseType.ELECTRONICS;
import static webshop.entity.MerchandiseType.FASHION;
import static webshop.entity.MerchandiseType.HEALTH;
import static webshop.entity.MerchandiseType.HOME;
import static webshop.entity.MerchandiseType.SOFTWARE;
import static webshop.entity.MerchandiseType.SPORT;

@Service
@RequiredArgsConstructor
public class InitializationService implements InitializingBean {

    private final UserRepository userRepository;
    private final MerchandiseRepository merchandiseRepository;

    @Override
    public void afterPropertiesSet() {
        generateData();
    }

    @Transactional
    private void generateData() {
        generateUsers(30);
        generateMerchandise(60);
    }

    private List<User> generateUsers(int count) {
        List<User> users = new ArrayList<>();
        for (int i = 1; i <= count; ++i) {
            users.add(new User()
                    .setFirstName("User")
                    .setLastName(String.valueOf(i))
                    .setEmail("user" + i + "@webshop.hu")
                    .setPassword("userPassword" + i));
        }
        return userRepository.saveAll(users);
    }

    private List<Merchandise> generateMerchandise(int count) {
        List<Merchandise> merchandise = new ArrayList<>();
        for (int i = 1; i <= count; ++i) {
            if (i < 11) {
                merchandise.add(new Merchandise()
                        .setName("Software product " + i)
                        .setType(SOFTWARE)
                        .setManufacturer("Software product manufacturer " + i)
                        .setPrice(i * 10.0)
                        .setImage("https://chiefexecutive.net/wp-content/uploads/2018/11/AdobeStock_92323963-compressor-1024x662.jpeg")
                        .setDescription("Description of Software product " + i));
            }
            if (11 <= i && i < 21) {
                merchandise.add(new Merchandise()
                        .setName("Electronics product " + i)
                        .setType(ELECTRONICS)
                        .setManufacturer("Electronics product manufacturer " + i)
                        .setPrice(i * 100.0)
                        .setImage("https://www.ineos-styrolution.com/INTERSHOP/static/WFS/Styrolution-Portal-Site/-/Styrolution-Portal/en_US/industry/Electrics/Electronics_Overview.jpg")
                        .setDescription("Description of Electronics product " + i));
            }
            if (21 <= i && i < 31) {
                merchandise.add(new Merchandise()
                        .setName("Home product " + i)
                        .setType(HOME)
                        .setManufacturer("Home product manufacturer " + i)
                        .setPrice(i * 100.0)
                        .setImage("https://rukminim1.flixcart.com/image/612/612/jmi22kw0/mixer-grinder-juicer/n/z/a/butterfly-rapid-4-jar-750-watts-original-imaf5dvgugcqyug3.jpeg")
                        .setDescription("Description of Home product " + i));
            }
            if (31 <= i && i < 41) {
                merchandise.add(new Merchandise()
                        .setName("Health product " + i)
                        .setType(HEALTH)
                        .setManufacturer("Health product manufacturer " + i)
                        .setPrice(i * 100.0)
                        .setImage("https://resources.stuff.co.nz/content/dam/images/1/9/z/h/j/y/image.related.StuffLandscapeSixteenByNine.620x349.19z23a.png/1456289705631.jpg")
                        .setDescription("Description of Health product " + i));
            }
            if (41 <= i && i < 51) {
                merchandise.add(new Merchandise()
                        .setName("Fashion product " + i)
                        .setType(FASHION)
                        .setManufacturer("Fashion product manufacturer " + i)
                        .setPrice(i * 100.0)
                        .setImage("http://www.productphotographerphilippines.com/uploads/5/0/8/3/5083585/2009572_orig.jpg")
                        .setDescription("Description of Fashion product " + i));
            }
            if (51 <= i) {
                merchandise.add(new Merchandise()
                        .setName("Sport product " + i)
                        .setType(SPORT)
                        .setManufacturer("Sport product manufacturer " + i)
                        .setPrice(i * 100.0)
                        .setImage("https://appec.asia/wp-content/uploads/2016/07/Products.jpg")
                        .setDescription("Description of Sport product " + i));
            }
        }
        return merchandiseRepository.saveAll(merchandise);
    }
}

package webshop.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import webshop.entity.CartItem;
import webshop.entity.Merchandise;
import webshop.entity.User;

@Configuration
public class RepositoryRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(User.class);
        config.exposeIdsFor(Merchandise.class);
        config.exposeIdsFor(CartItem.class);
        config.setExposeRepositoryMethodsByDefault(false);
    }
}

package restaurante.backend.Menu.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.Menu.domain.Menu;

@Repository
public interface DaoMenu extends JpaRepository<Menu, Long> {
}
package restaurante.backend.IngredienteMenu.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.IngredienteMenu.domain.IngredienteMenu;

@Repository
public interface DaoIngredienteMenu extends JpaRepository<IngredienteMenu, restaurante.backend.IngredienteMenu.domain.IngredienteMenuPK> {


}

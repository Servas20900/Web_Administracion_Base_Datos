package restaurante.backend.StoreIngrediente.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.StoreIngrediente.domain.StoreIngrediente;

@Repository
public interface DaoStoreIngrediente extends JpaRepository<StoreIngrediente, Long> {
}

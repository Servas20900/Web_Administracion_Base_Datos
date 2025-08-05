package restaurante.backend.Vendedor.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.Vendedor.domain.Vendedor;

@Repository
public interface DaoVendedor extends JpaRepository<Vendedor, Long> {
}

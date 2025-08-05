package restaurante.backend.Factura.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.Factura.domain.Factura;

@Repository
public interface DaoFactura extends JpaRepository<Factura, Long> {
}

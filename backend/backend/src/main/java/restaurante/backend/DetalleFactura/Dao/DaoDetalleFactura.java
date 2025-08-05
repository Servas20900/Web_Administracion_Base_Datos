package restaurante.backend.DetalleFactura.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.DetalleFactura.domain.DetalleFactura;

@Repository
public interface DaoDetalleFactura extends JpaRepository<DetalleFactura, Long> {
}

package restaurante.backend.DetallePurchaseOrder.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.DetallePurchaseOrder.domain.DetallePurchaseOrder;

@Repository
public interface DaoDetallePurchaseOrder extends JpaRepository<DetallePurchaseOrder, Long> {
}

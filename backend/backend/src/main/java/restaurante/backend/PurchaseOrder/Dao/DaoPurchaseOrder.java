package restaurante.backend.PurchaseOrder.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.PurchaseOrder.domain.PurchaseOrder;

@Repository
public interface DaoPurchaseOrder extends JpaRepository<PurchaseOrder, Long> {
}

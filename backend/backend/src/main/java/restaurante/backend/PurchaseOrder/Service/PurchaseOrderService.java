package restaurante.backend.PurchaseOrder.Service;

import java.util.List;
import restaurante.backend.PurchaseOrder.domain.PurchaseOrder;

public interface PurchaseOrderService {
    List<PurchaseOrder> listarTodos();
    PurchaseOrder guardar(PurchaseOrder purchaseOrder);
    PurchaseOrder actualizar(PurchaseOrder purchaseOrder);
    void eliminar(Long id);
    PurchaseOrder obtenerPorId(Long id);
}

package restaurante.backend.DetallePurchaseOrder.Service;

import java.util.List;
import restaurante.backend.DetallePurchaseOrder.domain.DetallePurchaseOrder;

public interface DetallePurchaseOrderService {
    List<DetallePurchaseOrder> listarTodos();
    DetallePurchaseOrder guardar(DetallePurchaseOrder detallePurchaseOrder);
    DetallePurchaseOrder actualizar(DetallePurchaseOrder detallePurchaseOrder);
    void eliminar(Long id);
    DetallePurchaseOrder obtenerPorId(Long id);
}

package restaurante.backend.DetallePurchaseOrder.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.DetallePurchaseOrder.Dao.DaoDetallePurchaseOrder;
import restaurante.backend.DetallePurchaseOrder.domain.DetallePurchaseOrder;

@Service
public class DetallePurchaseOrderServiceImpl implements DetallePurchaseOrderService {

    @Autowired
    private DaoDetallePurchaseOrder dao;

    public List<DetallePurchaseOrder> listarTodos() {
        return dao.findAll();
    }

    public DetallePurchaseOrder guardar(DetallePurchaseOrder detallePurchaseOrder) {
        return dao.save(detallePurchaseOrder);
    }

    public DetallePurchaseOrder actualizar(DetallePurchaseOrder detallePurchaseOrder) {
        return dao.save(detallePurchaseOrder);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public DetallePurchaseOrder obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}

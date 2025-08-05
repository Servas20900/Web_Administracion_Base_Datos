package restaurante.backend.PurchaseOrder.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.PurchaseOrder.Dao.DaoPurchaseOrder;
import restaurante.backend.PurchaseOrder.domain.PurchaseOrder;

@Service
public class PurchaseOrderServiceImpl implements PurchaseOrderService {

    @Autowired
    private DaoPurchaseOrder dao;

    public List<PurchaseOrder> listarTodos() {
        return dao.findAll();
    }

    public PurchaseOrder guardar(PurchaseOrder purchaseOrder) {
        return dao.save(purchaseOrder);
    }

    public PurchaseOrder actualizar(PurchaseOrder purchaseOrder) {
        return dao.save(purchaseOrder);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public PurchaseOrder obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}

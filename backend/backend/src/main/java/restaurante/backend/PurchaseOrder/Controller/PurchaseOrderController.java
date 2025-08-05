package restaurante.backend.PurchaseOrder.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.PurchaseOrder.Service.PurchaseOrderService;
import restaurante.backend.PurchaseOrder.domain.PurchaseOrder;
import java.util.List;

@RestController
@RequestMapping("/api/purchaseorders")
@CrossOrigin(origins = "http://localhost:3000")
public class PurchaseOrderController {

    @Autowired
    private PurchaseOrderService purchaseOrderService;

    @GetMapping
    public List<PurchaseOrder> listar() {
        return purchaseOrderService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PurchaseOrder> obtenerPorId(@PathVariable Long id) {
        PurchaseOrder purchaseOrder = purchaseOrderService.obtenerPorId(id);
        return (purchaseOrder != null)
                ? ResponseEntity.ok(purchaseOrder)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<PurchaseOrder> guardar(@RequestBody PurchaseOrder purchaseOrder) {
        PurchaseOrder nuevo = purchaseOrderService.guardar(purchaseOrder);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PurchaseOrder> actualizar(@PathVariable Long id, @RequestBody PurchaseOrder purchaseOrder) {
        PurchaseOrder existente = purchaseOrderService.obtenerPorId(id);
        if (existente != null) {
            // purchaseOrder.setId_purchaseorder(id); // Ajusta el setter si existe
            PurchaseOrder actualizado = purchaseOrderService.guardar(purchaseOrder);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        purchaseOrderService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

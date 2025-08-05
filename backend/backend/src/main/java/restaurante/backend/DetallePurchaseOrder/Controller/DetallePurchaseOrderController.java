package restaurante.backend.DetallePurchaseOrder.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.DetallePurchaseOrder.Service.DetallePurchaseOrderService;
import restaurante.backend.DetallePurchaseOrder.domain.DetallePurchaseOrder;
import java.util.List;

@RestController
@RequestMapping("/api/detallepurchaseorders")
@CrossOrigin(origins = "http://localhost:3000")
public class DetallePurchaseOrderController {

    @Autowired
    private DetallePurchaseOrderService detallePurchaseOrderService;

    @GetMapping
    public List<DetallePurchaseOrder> listar() {
        return detallePurchaseOrderService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetallePurchaseOrder> obtenerPorId(@PathVariable Long id) {
        DetallePurchaseOrder detallePurchaseOrder = detallePurchaseOrderService.obtenerPorId(id);
        return (detallePurchaseOrder != null)
                ? ResponseEntity.ok(detallePurchaseOrder)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<DetallePurchaseOrder> guardar(@RequestBody DetallePurchaseOrder detallePurchaseOrder) {
        DetallePurchaseOrder nuevo = detallePurchaseOrderService.guardar(detallePurchaseOrder);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetallePurchaseOrder> actualizar(@PathVariable Long id, @RequestBody DetallePurchaseOrder detallePurchaseOrder) {
        DetallePurchaseOrder existente = detallePurchaseOrderService.obtenerPorId(id);
        if (existente != null) {
            // detallePurchaseOrder.setId_detallepurchaseorder(id); // Ajusta el setter si existe
            DetallePurchaseOrder actualizado = detallePurchaseOrderService.guardar(detallePurchaseOrder);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        detallePurchaseOrderService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

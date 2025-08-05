package restaurante.backend.DetalleFactura.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.DetalleFactura.Service.DetalleFacturaService;
import restaurante.backend.DetalleFactura.domain.DetalleFactura;
import java.util.List;

@RestController
@RequestMapping("/api/detallefacturas")
@CrossOrigin(origins = "http://localhost:3000")
public class DetalleFacturaController {

    @Autowired
    private DetalleFacturaService detalleFacturaService;

    @GetMapping
    public List<DetalleFactura> listar() {
        return detalleFacturaService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetalleFactura> obtenerPorId(@PathVariable Long id) {
        DetalleFactura detalleFactura = detalleFacturaService.obtenerPorId(id);
        return (detalleFactura != null)
                ? ResponseEntity.ok(detalleFactura)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<DetalleFactura> guardar(@RequestBody DetalleFactura detalleFactura) {
        DetalleFactura nuevo = detalleFacturaService.guardar(detalleFactura);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetalleFactura> actualizar(@PathVariable Long id, @RequestBody DetalleFactura detalleFactura) {
        DetalleFactura existente = detalleFacturaService.obtenerPorId(id);
        if (existente != null) {
            detalleFactura.setId_detalle_factura(id);
            DetalleFactura actualizado = detalleFacturaService.guardar(detalleFactura);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        detalleFacturaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

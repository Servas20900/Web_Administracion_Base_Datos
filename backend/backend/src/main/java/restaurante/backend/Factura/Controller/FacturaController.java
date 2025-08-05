package restaurante.backend.Factura.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.Factura.Service.FacturaService;
import restaurante.backend.Factura.domain.Factura;
import java.util.List;

@RestController
@RequestMapping("/api/facturas")
@CrossOrigin(origins = "http://localhost:3000")
public class FacturaController {

    @Autowired
    private FacturaService facturaService;

    @GetMapping
    public List<Factura> listar() {
        return facturaService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Factura> obtenerPorId(@PathVariable Long id) {
        Factura factura = facturaService.obtenerPorId(id);
        return (factura != null)
                ? ResponseEntity.ok(factura)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Factura> guardar(@RequestBody Factura factura) {
        Factura nuevo = facturaService.guardar(factura);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Factura> actualizar(@PathVariable Long id, @RequestBody Factura factura) {
        Factura existente = facturaService.obtenerPorId(id);
        if (existente != null) {
            // factura.setId_factura(id); // Ajusta el setter si existe
            Factura actualizado = facturaService.guardar(factura);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        facturaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

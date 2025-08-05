package restaurante.backend.Vendedor.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.Vendedor.Service.VendedorService;
import restaurante.backend.Vendedor.domain.Vendedor;
import java.util.List;

@RestController
@RequestMapping("/api/vendedores")
@CrossOrigin(origins = "http://localhost:3000")
public class VendedorController {

    @Autowired
    private VendedorService vendedorService;

    @GetMapping
    public List<Vendedor> listar() {
        return vendedorService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vendedor> obtenerPorId(@PathVariable Long id) {
        Vendedor vendedor = vendedorService.obtenerPorId(id);
        return (vendedor != null)
                ? ResponseEntity.ok(vendedor)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Vendedor> guardar(@RequestBody Vendedor vendedor) {
        Vendedor nuevo = vendedorService.guardar(vendedor);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vendedor> actualizar(@PathVariable Long id, @RequestBody Vendedor vendedor) {
        Vendedor existente = vendedorService.obtenerPorId(id);
        if (existente != null) {
            // vendedor.setId_vendedor(id); // Ajusta el setter si existe
            Vendedor actualizado = vendedorService.guardar(vendedor);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        vendedorService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

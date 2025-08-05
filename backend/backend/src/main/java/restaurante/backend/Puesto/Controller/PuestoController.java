package restaurante.backend.Puesto.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.Puesto.Service.PuestoService;
import restaurante.backend.Puesto.domain.Puesto;
import java.util.List;

@RestController
@RequestMapping("/api/puestos")
@CrossOrigin(origins = "http://localhost:3000")
public class PuestoController {

    @Autowired
    private PuestoService puestoService;

    @GetMapping
    public List<Puesto> listar() {
        return puestoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Puesto> obtenerPorId(@PathVariable Long id) {
        Puesto puesto = puestoService.obtenerPorId(id);
        return (puesto != null)
                ? ResponseEntity.ok(puesto)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Puesto> guardar(@RequestBody Puesto puesto) {
        Puesto nuevo = puestoService.guardar(puesto);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Puesto> actualizar(@PathVariable Long id, @RequestBody Puesto puesto) {
        Puesto existente = puestoService.obtenerPorId(id);
        if (existente != null) {
            // puesto.setId_puesto(id); // Ajusta el setter si existe
            Puesto actualizado = puestoService.guardar(puesto);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        puestoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

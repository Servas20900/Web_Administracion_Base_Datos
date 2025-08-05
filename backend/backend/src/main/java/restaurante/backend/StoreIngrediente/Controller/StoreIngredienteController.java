package restaurante.backend.StoreIngrediente.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.StoreIngrediente.Service.StoreIngredienteService;
import restaurante.backend.StoreIngrediente.domain.StoreIngrediente;
import java.util.List;

@RestController
@RequestMapping("/api/storeingredientes")
@CrossOrigin(origins = "http://localhost:3000")
public class StoreIngredienteController {

    @Autowired
    private StoreIngredienteService storeIngredienteService;

    @GetMapping
    public List<StoreIngrediente> listar() {
        return storeIngredienteService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<StoreIngrediente> obtenerPorId(@PathVariable Long id) {
        StoreIngrediente storeIngrediente = storeIngredienteService.obtenerPorId(id);
        return (storeIngrediente != null)
                ? ResponseEntity.ok(storeIngrediente)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<StoreIngrediente> guardar(@RequestBody StoreIngrediente storeIngrediente) {
        StoreIngrediente nuevo = storeIngredienteService.guardar(storeIngrediente);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StoreIngrediente> actualizar(@PathVariable Long id, @RequestBody StoreIngrediente storeIngrediente) {
        StoreIngrediente existente = storeIngredienteService.obtenerPorId(id);
        if (existente != null) {
            // storeIngrediente.setId_storeingrediente(id); // Ajusta el setter si existe
            StoreIngrediente actualizado = storeIngredienteService.guardar(storeIngrediente);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        storeIngredienteService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

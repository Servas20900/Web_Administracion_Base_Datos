package restaurante.backend.Empleado.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.Empleado.Service.EmpleadoService;
import restaurante.backend.Empleado.domain.Empleado;
import java.util.List;

@RestController
@RequestMapping("/api/empleados")
@CrossOrigin(origins = "http://localhost:3000")
public class EmpleadoController {

    @Autowired
    private EmpleadoService empleadoService;

    @GetMapping
    public List<Empleado> listar() {
        return empleadoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empleado> obtenerPorId(@PathVariable Long id) {
        Empleado empleado = empleadoService.obtenerPorId(id);
        return (empleado != null)
                ? ResponseEntity.ok(empleado)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Empleado> guardar(@RequestBody Empleado empleado) {
        Empleado nuevo = empleadoService.guardar(empleado);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empleado> actualizar(@PathVariable Long id, @RequestBody Empleado empleado) {
        Empleado existente = empleadoService.obtenerPorId(id);
        if (existente != null) {
            // empleado.setId_empleado(id); // Ajusta el setter si existe
            Empleado actualizado = empleadoService.guardar(empleado);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        empleadoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

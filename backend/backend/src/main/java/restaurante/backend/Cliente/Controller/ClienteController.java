package restaurante.backend.Cliente.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import restaurante.backend.Cliente.Service.ClienteService;
import restaurante.backend.Cliente.domain.Cliente;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "http://localhost:3000") // permite acceso desde el frontend
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    // GET /api/clientes → lista todos los clientes
    @GetMapping
    public List<Cliente> listar() {
        return clienteService.listarTodos();
    }

    // GET /api/clientes/{id} → obtiene un cliente por ID
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> obtenerPorId(@PathVariable Long id) {
        Cliente cliente = clienteService.obtenerPorId(id);
        return (cliente != null)
                ? ResponseEntity.ok(cliente)
                : ResponseEntity.notFound().build();
    }

    // POST /api/clientes → guarda nuevo cliente
    @PostMapping
    public ResponseEntity<Cliente> guardar(@RequestBody Cliente cliente) {
        Cliente nuevo = clienteService.guardar(cliente);
        return ResponseEntity.ok(nuevo);
    }

    // PUT /api/clientes/{id} → actualiza cliente existente
    @PutMapping("/{id}")
    public ResponseEntity<Cliente> actualizar(@PathVariable Long id, @RequestBody Cliente cliente) {
        Cliente existente = clienteService.obtenerPorId(id);
        if (existente != null) {
            cliente.setId_cliente(id);
            Cliente actualizado = clienteService.guardar(cliente);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE /api/clientes/{id} → elimina cliente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        clienteService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

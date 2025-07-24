package restaurante.backend.Menu.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import restaurante.backend.Menu.domain.Menu;
import restaurante.backend.Menu.Service.MenuService;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @GetMapping
    public List<Menu> listar() {
        return menuService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Menu> obtenerPorId(@PathVariable Long id) {
        Menu menu = menuService.obtenerPorId(id);
        return (menu != null)
                ? ResponseEntity.ok(menu)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Menu> guardar(@RequestBody Menu menu) {
        Menu nuevo = menuService.guardar(menu);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Menu> actualizar(@PathVariable Long id, @RequestBody Menu menu) {
        Menu existente = menuService.obtenerPorId(id);
        if (existente != null) {
            menu.setId_platillo(id);
            Menu actualizado = menuService.guardar(menu);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        menuService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

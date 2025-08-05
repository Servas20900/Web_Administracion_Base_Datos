package restaurante.backend.IngredienteMenu.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurante.backend.IngredienteMenu.Service.IngredienteMenuService;
import restaurante.backend.IngredienteMenu.domain.IngredienteMenu;
import restaurante.backend.IngredienteMenu.domain.IngredienteMenuPK;
import java.util.List;

@RestController
@RequestMapping("/api/ingredientemenus")
@CrossOrigin(origins = "http://localhost:3000")
public class IngredienteMenuController {

    @Autowired
    private IngredienteMenuService ingredienteMenuService;

    @GetMapping
    public List<IngredienteMenu> listar() {
        return ingredienteMenuService.listarTodos();
    }

    @GetMapping("/{idPlatilloFk}/{idIngredienteFk}")
    public ResponseEntity<IngredienteMenu> obtenerPorId(@PathVariable Long idPlatilloFk, @PathVariable Long idIngredienteFk) {
        IngredienteMenuPK pk = new IngredienteMenuPK();
        pk.setIdPlatilloFk(idPlatilloFk);
        pk.setIdIngredienteFk(idIngredienteFk);
        IngredienteMenu ingredienteMenu = ingredienteMenuService.obtenerPorId(pk);
        return (ingredienteMenu != null)
                ? ResponseEntity.ok(ingredienteMenu)
                : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<IngredienteMenu> guardar(@RequestBody IngredienteMenu ingredienteMenu) {
        IngredienteMenu nuevo = ingredienteMenuService.guardar(ingredienteMenu);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{idPlatilloFk}/{idIngredienteFk}")
    public ResponseEntity<IngredienteMenu> actualizar(@PathVariable Long idPlatilloFk, @PathVariable Long idIngredienteFk, @RequestBody IngredienteMenu ingredienteMenu) {
        IngredienteMenuPK pk = new IngredienteMenuPK();
        pk.setIdPlatilloFk(idPlatilloFk);
        pk.setIdIngredienteFk(idIngredienteFk);
        IngredienteMenu existente = ingredienteMenuService.obtenerPorId(pk);
        if (existente != null) {
            ingredienteMenu.setId(pk);
            IngredienteMenu actualizado = ingredienteMenuService.guardar(ingredienteMenu);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{idPlatilloFk}/{idIngredienteFk}")
    public ResponseEntity<Void> eliminar(@PathVariable Long idPlatilloFk, @PathVariable Long idIngredienteFk) {
        IngredienteMenuPK pk = new IngredienteMenuPK();
        pk.setIdPlatilloFk(idPlatilloFk);
        pk.setIdIngredienteFk(idIngredienteFk);
        ingredienteMenuService.eliminar(pk);
        return ResponseEntity.noContent().build();
    }
}

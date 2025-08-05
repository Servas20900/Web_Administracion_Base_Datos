package restaurante.backend.IngredienteMenu.Service;

import java.util.List;
import restaurante.backend.IngredienteMenu.domain.IngredienteMenu;
import restaurante.backend.IngredienteMenu.domain.IngredienteMenuPK;

public interface IngredienteMenuService {
    List<IngredienteMenu> listarTodos();
    IngredienteMenu guardar(IngredienteMenu ingredienteMenu);
    IngredienteMenu actualizar(IngredienteMenu ingredienteMenu);
    void eliminar(IngredienteMenuPK id);
    IngredienteMenu obtenerPorId(IngredienteMenuPK id);
}

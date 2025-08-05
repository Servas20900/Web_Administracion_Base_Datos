package restaurante.backend.StoreIngrediente.Service;

import java.util.List;
import restaurante.backend.StoreIngrediente.domain.StoreIngrediente;

public interface StoreIngredienteService {
    List<StoreIngrediente> listarTodos();
    StoreIngrediente guardar(StoreIngrediente storeIngrediente);
    StoreIngrediente actualizar(StoreIngrediente storeIngrediente);
    void eliminar(Long id);
    StoreIngrediente obtenerPorId(Long id);
}

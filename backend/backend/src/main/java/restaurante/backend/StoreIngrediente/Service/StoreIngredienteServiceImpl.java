package restaurante.backend.StoreIngrediente.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.StoreIngrediente.Dao.DaoStoreIngrediente;
import restaurante.backend.StoreIngrediente.domain.StoreIngrediente;

@Service
public class StoreIngredienteServiceImpl implements StoreIngredienteService {

    @Autowired
    private DaoStoreIngrediente dao;

    public List<StoreIngrediente> listarTodos() {
        return dao.findAll();
    }

    public StoreIngrediente guardar(StoreIngrediente storeIngrediente) {
        return dao.save(storeIngrediente);
    }

    public StoreIngrediente actualizar(StoreIngrediente storeIngrediente) {
        return dao.save(storeIngrediente);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public StoreIngrediente obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}

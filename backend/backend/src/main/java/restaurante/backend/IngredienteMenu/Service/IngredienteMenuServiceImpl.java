package restaurante.backend.IngredienteMenu.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.IngredienteMenu.Dao.DaoIngredienteMenu;
import restaurante.backend.IngredienteMenu.domain.IngredienteMenu;

import restaurante.backend.IngredienteMenu.domain.IngredienteMenuPK;

@Service
public class IngredienteMenuServiceImpl implements IngredienteMenuService {

    @Autowired
    private DaoIngredienteMenu dao;

    @Override
    public List<IngredienteMenu> listarTodos() {
        return dao.findAll();
    }

    @Override
    public IngredienteMenu guardar(IngredienteMenu ingredienteMenu) {
        return dao.save(ingredienteMenu);
    }

    @Override
    public IngredienteMenu actualizar(IngredienteMenu ingredienteMenu) {
        return dao.save(ingredienteMenu);
    }

    @Override
    public void eliminar(IngredienteMenuPK id) {
        dao.deleteById(id);
    }

    @Override
    public IngredienteMenu obtenerPorId(IngredienteMenuPK id) {
        return dao.findById(id).orElse(null);
    }
}

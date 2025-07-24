package restaurante.backend.Menu.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import restaurante.backend.Menu.Dao.DaoMenu;
import restaurante.backend.Menu.domain.Menu;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private DaoMenu dao;

    public List<Menu> listarTodos() {
        return dao.findAll();
    }

    public Menu guardar(Menu menu) {
        return dao.save(menu);
    }

    public Menu actualizar(Menu menu) {
        return dao.save(menu);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public Menu obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}
package restaurante.backend.Menu.Service;

import java.util.List;

import restaurante.backend.Menu.domain.Menu;

public interface MenuService {
    List<Menu> listarTodos();
    Menu guardar(Menu menu);
    Menu actualizar(Menu menu);
    void eliminar(Long id);
    Menu obtenerPorId(Long id);
}
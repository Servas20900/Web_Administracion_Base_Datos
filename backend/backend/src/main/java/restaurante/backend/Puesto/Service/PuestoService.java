package restaurante.backend.Puesto.Service;

import java.util.List;
import restaurante.backend.Puesto.domain.Puesto;

public interface PuestoService {
    List<Puesto> listarTodos();
    Puesto guardar(Puesto puesto);
    Puesto actualizar(Puesto puesto);
    void eliminar(Long id);
    Puesto obtenerPorId(Long id);
}

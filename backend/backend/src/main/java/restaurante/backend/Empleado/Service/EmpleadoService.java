package restaurante.backend.Empleado.Service;

import java.util.List;
import restaurante.backend.Empleado.domain.Empleado;

public interface EmpleadoService {
    List<Empleado> listarTodos();
    Empleado guardar(Empleado empleado);
    Empleado actualizar(Empleado empleado);
    void eliminar(Long id);
    Empleado obtenerPorId(Long id);
}

package restaurante.backend.Empleado.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.Empleado.Dao.DaoEmpleado;
import restaurante.backend.Empleado.domain.Empleado;

@Service
public class EmpleadoServiceImpl implements EmpleadoService {

    @Autowired
    private DaoEmpleado dao;

    public List<Empleado> listarTodos() {
        return dao.findAll();
    }

    public Empleado guardar(Empleado empleado) {
        return dao.save(empleado);
    }

    public Empleado actualizar(Empleado empleado) {
        return dao.save(empleado);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public Empleado obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}

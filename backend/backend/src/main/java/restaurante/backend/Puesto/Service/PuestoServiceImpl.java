package restaurante.backend.Puesto.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.Puesto.Dao.DaoPuesto;
import restaurante.backend.Puesto.domain.Puesto;

@Service
public class PuestoServiceImpl implements PuestoService {

    @Autowired
    private DaoPuesto dao;

    public List<Puesto> listarTodos() {
        return dao.findAll();
    }

    public Puesto guardar(Puesto puesto) {
        return dao.save(puesto);
    }

    public Puesto actualizar(Puesto puesto) {
        return dao.save(puesto);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public Puesto obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}

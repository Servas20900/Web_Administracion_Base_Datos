package restaurante.backend.Vendedor.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.Vendedor.Dao.DaoVendedor;
import restaurante.backend.Vendedor.domain.Vendedor;

@Service
public class VendedorServiceImpl implements VendedorService {

    @Autowired
    private DaoVendedor dao;

    public List<Vendedor> listarTodos() {
        return dao.findAll();
    }

    public Vendedor guardar(Vendedor vendedor) {
        return dao.save(vendedor);
    }

    public Vendedor actualizar(Vendedor vendedor) {
        return dao.save(vendedor);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public Vendedor obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}

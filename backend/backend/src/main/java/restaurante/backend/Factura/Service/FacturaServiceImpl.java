package restaurante.backend.Factura.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.Factura.Dao.DaoFactura;
import restaurante.backend.Factura.domain.Factura;

@Service
public class FacturaServiceImpl implements FacturaService {

    @Autowired
    private DaoFactura dao;

    public List<Factura> listarTodos() {
        return dao.findAll();
    }

    public Factura guardar(Factura factura) {
        return dao.save(factura);
    }

    public Factura actualizar(Factura factura) {
        return dao.save(factura);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public Factura obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}

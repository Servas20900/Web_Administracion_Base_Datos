package restaurante.backend.DetalleFactura.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurante.backend.DetalleFactura.Dao.DaoDetalleFactura;
import restaurante.backend.DetalleFactura.domain.DetalleFactura;

@Service
public class DetalleFacturaServiceImpl implements DetalleFacturaService {

    @Autowired
    private DaoDetalleFactura dao;

    public List<DetalleFactura> listarTodos() {
        return dao.findAll();
    }

    public DetalleFactura guardar(DetalleFactura detalleFactura) {
        return dao.save(detalleFactura);
    }

    public DetalleFactura actualizar(DetalleFactura detalleFactura) {
        return dao.save(detalleFactura);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public DetalleFactura obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}

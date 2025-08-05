package restaurante.backend.DetalleFactura.Service;

import java.util.List;
import restaurante.backend.DetalleFactura.domain.DetalleFactura;

public interface DetalleFacturaService {
    List<DetalleFactura> listarTodos();
    DetalleFactura guardar(DetalleFactura detalleFactura);
    DetalleFactura actualizar(DetalleFactura detalleFactura);
    void eliminar(Long id);
    DetalleFactura obtenerPorId(Long id);
}

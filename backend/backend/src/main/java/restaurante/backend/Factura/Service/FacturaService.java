package restaurante.backend.Factura.Service;

import java.util.List;
import restaurante.backend.Factura.domain.Factura;

public interface FacturaService {
    List<Factura> listarTodos();
    Factura guardar(Factura factura);
    Factura actualizar(Factura factura);
    void eliminar(Long id);
    Factura obtenerPorId(Long id);
}

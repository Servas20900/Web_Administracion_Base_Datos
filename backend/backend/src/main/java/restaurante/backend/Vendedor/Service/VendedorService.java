package restaurante.backend.Vendedor.Service;

import java.util.List;
import restaurante.backend.Vendedor.domain.Vendedor;

public interface VendedorService {
    List<Vendedor> listarTodos();
    Vendedor guardar(Vendedor vendedor);
    Vendedor actualizar(Vendedor vendedor);
    void eliminar(Long id);
    Vendedor obtenerPorId(Long id);
}

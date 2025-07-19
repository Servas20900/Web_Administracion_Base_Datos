package restaurante.backend.Cliente.Service;

import java.util.List;

import restaurante.backend.Cliente.domain.Cliente;

public interface ClienteService {
    List<Cliente> listarTodos();
    Cliente guardar(Cliente cliente);
    Cliente actualizar(Cliente cliente);
    void eliminar(Long id);
    Cliente obtenerPorId(Long id);
}
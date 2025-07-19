package restaurante.backend.Cliente.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import restaurante.backend.Cliente.Dao.DaoCliente;
import restaurante.backend.Cliente.domain.Cliente;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private DaoCliente dao;

    public List<Cliente> listarTodos() {
        return dao.findAll();
    }

    public Cliente guardar(Cliente cliente) {
        return dao.save(cliente);
    }

    public Cliente actualizar(Cliente cliente) {
        return dao.save(cliente);
    }

    public void eliminar(Long id) {
        dao.deleteById(id);
    }

    public Cliente obtenerPorId(Long id) {
        return dao.findById(id).orElse(null);
    }
}
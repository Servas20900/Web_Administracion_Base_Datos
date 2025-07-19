package restaurante.backend.Cliente.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.Cliente.domain.Cliente;

@Repository
public interface DaoCliente extends JpaRepository<Cliente, Long> {
}
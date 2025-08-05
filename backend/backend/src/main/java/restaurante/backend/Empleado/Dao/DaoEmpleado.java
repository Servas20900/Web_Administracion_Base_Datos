package restaurante.backend.Empleado.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.Empleado.domain.Empleado;

@Repository
public interface DaoEmpleado extends JpaRepository<Empleado, Long> {
}

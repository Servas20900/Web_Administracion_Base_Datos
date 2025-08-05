package restaurante.backend.Puesto.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restaurante.backend.Puesto.domain.Puesto;

@Repository
public interface DaoPuesto extends JpaRepository<Puesto, Long> {
}

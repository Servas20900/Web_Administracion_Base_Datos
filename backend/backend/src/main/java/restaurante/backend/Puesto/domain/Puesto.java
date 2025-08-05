package restaurante.backend.Puesto.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "puesto")
@Data
public class Puesto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_puesto;

    private String nombre_puesto;
    private String descripcion;
}

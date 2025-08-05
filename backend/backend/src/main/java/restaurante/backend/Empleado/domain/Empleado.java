package restaurante.backend.Empleado.domain;

import jakarta.persistence.*;
import lombok.Data;
import restaurante.backend.Puesto.domain.Puesto;
@Entity
@Table(name = "empleado")
@Data
public class Empleado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_empleado;

    private String nombre;
    private String primer_apellido;
    private String segundo_apellido;

    @ManyToOne
    @JoinColumn(name = "id_puesto_fk", nullable = false)
    private Puesto puesto;

    private double salario;
    private String telefono;
    private String email;
}

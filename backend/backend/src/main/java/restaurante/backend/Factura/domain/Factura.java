package restaurante.backend.Factura.domain;

import jakarta.persistence.*;
import lombok.Data;
import restaurante.backend.Cliente.domain.Cliente;
import restaurante.backend.Empleado.domain.Empleado;
import java.util.Date;

@Entity
@Table(name = "factura")
@Data
public class Factura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_factura;

    @ManyToOne
    @JoinColumn(name = "id_cliente_fk", nullable = false)
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name = "id_empleado_fk", nullable = false)
    private Empleado empleado;

    private Date fecha;
    private String estado;
}

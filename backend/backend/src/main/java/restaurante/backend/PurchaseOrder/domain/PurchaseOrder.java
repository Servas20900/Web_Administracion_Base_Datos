package restaurante.backend.PurchaseOrder.domain;

import jakarta.persistence.*;
import lombok.Data;
import restaurante.backend.Vendedor.domain.Vendedor;
import restaurante.backend.Empleado.domain.Empleado;
import java.util.Date;

@Entity
@Table(name = "purchase_order")
@Data
public class PurchaseOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_po;

    @ManyToOne
    @JoinColumn(name = "id_vendor_fk", nullable = false)
    private Vendedor proveedor;

    @ManyToOne
    @JoinColumn(name = "id_empleado_fk", nullable = false)
    private Empleado empleado;

    private Date fecha;
    private String estado;
}

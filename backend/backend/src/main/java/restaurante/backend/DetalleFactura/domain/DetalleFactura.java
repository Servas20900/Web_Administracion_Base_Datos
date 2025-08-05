package restaurante.backend.DetalleFactura.domain;

import jakarta.persistence.*;
import lombok.Data;

import restaurante.backend.Factura.domain.Factura;
import restaurante.backend.Menu.domain.Menu;

@Entity
@Table(name = "detalle_factura")
@Data
public class DetalleFactura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_detalle_factura;

    @ManyToOne
    @JoinColumn(name = "id_factura_fk", nullable = false)
    private Factura factura;

    @ManyToOne
    @JoinColumn(name = "id_platillo_fk", nullable = false)
    private Menu platillo;

    private double precio;
    private int cantidad;
}

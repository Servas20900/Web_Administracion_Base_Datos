package restaurante.backend.DetallePurchaseOrder.domain;

import jakarta.persistence.*;
import lombok.Data;
import restaurante.backend.StoreIngrediente.domain.StoreIngrediente;
import restaurante.backend.PurchaseOrder.domain.PurchaseOrder;
@Entity
@Table(name = "detalle_purchase_order")
@Data
public class DetallePurchaseOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_detalle_po;

    @ManyToOne
    @JoinColumn(name = "id_po_fk", nullable = false)
    private PurchaseOrder ordenCompra;

    @ManyToOne
    @JoinColumn(name = "id_ingrediente_fk", nullable = false)
    private StoreIngrediente ingrediente;

    private double precio;
    private int cantidad;
}

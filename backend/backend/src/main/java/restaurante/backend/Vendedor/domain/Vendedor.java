package restaurante.backend.Vendedor.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "vendor")
@Data
public class Vendedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_vendor;

    private String nombre_proveedor;
    private String telefono;
    private String email;
}

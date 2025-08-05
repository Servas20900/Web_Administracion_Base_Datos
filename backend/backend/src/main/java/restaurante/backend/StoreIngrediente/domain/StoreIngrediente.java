package restaurante.backend.StoreIngrediente.domain;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "store_ingrediente")
@Data
public class StoreIngrediente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_ingrediente;

    private String nombre_ingrediente;
    private int cantidad;
}

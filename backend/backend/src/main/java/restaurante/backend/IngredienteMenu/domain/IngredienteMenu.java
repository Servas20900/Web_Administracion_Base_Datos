package restaurante.backend.IngredienteMenu.domain;

import jakarta.persistence.*;
import lombok.Data;
import restaurante.backend.Menu.domain.Menu;
import restaurante.backend.StoreIngrediente.domain.StoreIngrediente;
@Entity
@Table(name = "ingrediente_menu")
@Data
public class IngredienteMenu {
    @EmbeddedId
    private IngredienteMenuPK id;

    @ManyToOne
    @MapsId("idPlatilloFk")
    @JoinColumn(name = "id_platillo_fk", nullable = false)
    private Menu platillo;

    @ManyToOne
    @MapsId("idIngredienteFk")
    @JoinColumn(name = "id_ingrediente_fk", nullable = false)
    private StoreIngrediente ingrediente;

    @Column(name = "cantidad_utilizada")
    private double cantidadUtilizada;
}

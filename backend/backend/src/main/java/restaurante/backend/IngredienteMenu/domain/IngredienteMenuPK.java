package restaurante.backend.IngredienteMenu.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.io.Serializable;
import lombok.Data;

@Data
@Embeddable
public class IngredienteMenuPK implements Serializable {
    @Column(name = "id_platillo_fk")
    private Long idPlatilloFk;

    @Column(name = "id_ingrediente_fk")
    private Long idIngredienteFk;
}

package restaurante.backend.Menu.domain;

import jakarta.persistence.*;
import lombok.Data;



@Entity
@Table(name = "menu")
@Data
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_platillo;
    private String nombre_platillo;
    private double precio;
    private String descripcion;


    
}

package restaurante.backend.Cliente.domain;

import jakarta.persistence.*;
import lombok.Data;



@Entity
@Table(name = "cliente")
@Data
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cliente;
    private String nombre;
    private String primer_apellido;
    private String segundo_apellido;
    private String telefono;
    private String email;

    
}

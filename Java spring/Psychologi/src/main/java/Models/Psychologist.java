package Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@ToString

@Document(collection = "Psychologist")
public class Psychologist {

    @Id
    private String id;
    private String nombre;
    private String apellidos;
    private String cedula;
    private String email;
    private String password;
    private int telephone;
    //auto generate a id for the user
    public void generateId(){
        id = String.valueOf(UUID.randomUUID());
    }
}


package Models;

import java.util.UUID;

public class psychologist {


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


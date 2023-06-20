package Models;

import lombok.Setter;

import java.util.UUID;

@Setter

public class Customer {
    private String id;
    private String name;
    private String Email;
    private int telephone;

    //auto generate a id for the user
    public void generateId(){
        id = String.valueOf(UUID.randomUUID());
    }
}


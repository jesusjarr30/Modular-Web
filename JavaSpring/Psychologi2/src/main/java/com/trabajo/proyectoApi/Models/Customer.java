package com.trabajo.proyectoApi.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@ToString

@Document(collection = "Customer")
public class Customer {
    @Id
    private String id;
    private String name;
    private String Email;
    private int telephone;


    //auto generate a id for the user
    public void generateId(){

        id = String.valueOf(UUID.randomUUID());
    }


}


package com.trabajo.proyectoApi.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


import javax.persistence.*;
import java.util.UUID;
@Getter
@Setter
@ToString

@Entity
@Table(name = "Customer")
public class Customer {
    @Id
    private String id;
    private String name;
    private String email;
    private String telephone;
    private String PsychologistID;
    private String direccion;
    private int birth_year;//año de nacimiento


    //auto generate a id for the user
    public void generateId(){

        id = String.valueOf(UUID.randomUUID());
    }
    public Customer(){

    }
}


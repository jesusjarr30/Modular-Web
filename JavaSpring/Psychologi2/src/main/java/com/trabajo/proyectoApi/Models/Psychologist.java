package com.trabajo.proyectoApi.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.UUID;

@Getter
@Setter
@ToString

@Entity
@Table(name = "Psychologist")
public class Psychologist {

    @Id
    private String id;
    private String nombre;
    private String apellidos;
    private String email;
    private String password;
    private String telephone;
    

    public void generateId(){
        id = String.valueOf(UUID.randomUUID());
    }
}


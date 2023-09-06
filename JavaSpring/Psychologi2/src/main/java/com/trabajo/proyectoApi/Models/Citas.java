package com.trabajo.proyectoApi.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.UUID;


@Getter
@Setter
@ToString

@Entity
@Table(name = "Citas")
public class Citas {
    private String id;
    private String fecha;//feha en la que se
    private String Usuario;
    private String tiempo;

    public Citas(){
        //contructor de la clase
        id = String.valueOf(UUID.randomUUID());
    }
    

}

package com.trabajo.proyectoApi.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Getter
@Setter
@ToString

@Entity
@Table(name = "Note")
public class Note {
    //Esta clase va a guardar los datos de la pestaña de contactanos
    @Id
    private String id;
    private String nameUser;
    private String lastNameUser;
    private String email;
    private String telephone;
    private String message;

    public void generateId(){
        id = String.valueOf(UUID.randomUUID());
    }
}

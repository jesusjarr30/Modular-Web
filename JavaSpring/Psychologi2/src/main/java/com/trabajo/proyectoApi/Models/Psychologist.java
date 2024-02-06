package com.trabajo.proyectoApi.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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

    //cubrir el generar un psicologo completo
    public Psychologist(String nombre, String apellidos,String email,String password, String telephone){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.email=email;
        this.password=password;
        this.telephone=telephone;
        generateId();
    }
    public Psychologist(){

    }

    public void generateId(){
        id = String.valueOf(UUID.randomUUID());
    }

    public void setPassword(String password) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        this.password = passwordEncoder.encode(password);
    }
}


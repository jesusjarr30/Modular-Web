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
@Table(name = "Game")
public class Game {
    @Id
    private String id;
    private int cubos;
    private int semejanzas;
    private int digitos;
    private int matriz;
    private int vocabulario;
    private int aritmetica;
    private int busquedaS;
    private int pluzzeV;
    private int ptnInformacion;
    private int claveNum;
    private int letrasNum;
    private int balanzas;
    private int comprension;
    private int cancelacion;
    private int figCompleta;
    private String codigo;//el codigo de contraseña para ingresar al juego
    private int active;//Quiere decir que es una oportunidad activa
    private String idCliente;//El id del cliente
    public void GenerateId(){
        this.id=id = String.valueOf(UUID.randomUUID());
    }
    public void GenerateCodigo(){
     this.codigo=String.valueOf((UUID.randomUUID()));
    }
    public Game(String idCliente) {
        GenerateId();
        GenerateCodigo();
        this.cubos = 0;
        semejanzas = 0;
        digitos = 0;
        matriz = 0;
        vocabulario = 0;
        aritmetica = 0;
        busquedaS = 0;
        pluzzeV = 0;
        ptnInformacion = 0;
        claveNum = 0;
        letrasNum = 0;
        balanzas = 0;
        comprension = 0;
        cancelacion=0;
        figCompleta=0;
        active=0;
        this.idCliente=idCliente;
    }


}


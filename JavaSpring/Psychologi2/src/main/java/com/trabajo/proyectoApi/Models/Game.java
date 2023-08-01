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
    //para almacenar los tiempos son los siguientes atributos
    private int tcubos;
    private int tsemejanzas;
    private int tdigitos;
    private int tmatriz;
    private int tvocabulario;
    private int taritmetica;
    private int tbusquedaS;
    private int tpluzzeV;
    private int tptnInformacion;
    private int tclaveNum;
    private int tletrasNum;
    private int tbalanzas;
    private int tcomprension;
    private int tcancelacion;
    private int tfigCompleta;

    private String codigo;//el codigo de contraseña para ingresar al juego
    private boolean active;//Quiere decir que es una oportunidad activa
    private String idCliente;//El id del cliente

    public Game() {

    }
    public Game(String idCliente) {
        GenerateId();
        GenerateCodigo();
        cubos = 0;
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


        //para los tiempos
        tcubos = 0;
        tsemejanzas = 0;
        tdigitos = 0;
        tmatriz = 0;
        tvocabulario = 0;
        taritmetica = 0;
        tbusquedaS = 0;
        tpluzzeV = 0;
        tptnInformacion = 0;
        tclaveNum = 0;
        tletrasNum = 0;
        tbalanzas = 0;
        tcomprension = 0;
        tcancelacion=0;
        tfigCompleta=0;
        active=true;
        this.idCliente=idCliente;
    }
    public void GenerateId(){
        this.id=id = String.valueOf(UUID.randomUUID());
    }
    public void GenerateCodigo(){
        this.codigo=String.valueOf((UUID.randomUUID()));
    }
    public int TiempoTotal(){
        int suma=tcubos+tsemejanzas+tdigitos+tmatriz+tvocabulario+taritmetica+tbusquedaS+tpluzzeV+
                tptnInformacion+tclaveNum+tletrasNum+tbalanzas+tcomprension+tfigCompleta;
        return suma;
    }


}


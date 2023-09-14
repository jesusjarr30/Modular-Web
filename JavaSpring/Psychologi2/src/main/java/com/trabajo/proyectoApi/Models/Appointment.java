package com.trabajo.proyectoApi.Models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.UUID;


@Getter
@Setter
@ToString

@Entity
@Table(name = "Appointment")
public class Appointment {
    @Id
    private String id;
    private Date start;
    private Date end;
    private String idPsycologist;
    private String idCustomer;

    public Appointment(){
        //contructor de la clase
        id = String.valueOf(UUID.randomUUID());
    }
    public void generateId(){

        id = String.valueOf(UUID.randomUUID());

    }
    

}

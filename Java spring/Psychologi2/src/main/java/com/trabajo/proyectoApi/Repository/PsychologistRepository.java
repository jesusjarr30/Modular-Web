package com.trabajo.proyectoApi.Repository;


import com.trabajo.proyectoApi.Models.Psychologist;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PsychologistRepository extends MongoRepository<Psychologist,String> {

    //Se requiere el modelo
    @Query("{ $and: [ { \"_id\": \"?0\" }, { \"password\": \"?1\" } ] }")
    Psychologist findUser(@Param("id")String id, @Param("password") String password);


    @Query("{ $and: [ { \"email\": \"?0\" }, { \"password\": \"?1\" } ] }")
    Psychologist login(@Param("correo")String correo,@Param("password")String password);

    @Query("{\"email\":\"?0\"}")
    String valCorreo(@Param("Correo")String correo);

}


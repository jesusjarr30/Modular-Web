package com.trabajo.proyectoApi.Repository;


import com.trabajo.proyectoApi.Models.Psychologist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PsychologistRepository extends JpaRepository<Psychologist,String> {

    //identificar usuario
    /*@Query("SELECT p FROM Psychologist p WHERE p.id = :id AND p.password = :password")
    Psychologist findUser(@Param("id") String id, @Param("password") String password);
    */
    //verficicacion de correo
    @Query("SELECT COUNT(*) AS count FROM Psychologist p WHERE p.email = :correoA")
    Integer VerificarCorreo(@Param("correoA") String correoA);
    //para el login
    @Query("SELECT p FROM Psychologist p WHERE p.email = :correo AND p.password = :password")
    Psychologist login(@Param("correo") String correo, @Param("password") String password);
    //validar que el correo no esta con una cuenta ya
    @Query("SELECT COUNT(p) FROM Psychologist p WHERE p.email = :correo")
    Long valCorreo(@Param("correo") String correo);

    @Query("SELECT p FROM Psychologist p WHERE p.email = :correo")
    Psychologist getByEmail(@Param("correo") String correo);

}


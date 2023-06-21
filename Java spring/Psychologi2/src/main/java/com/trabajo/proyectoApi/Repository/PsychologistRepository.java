package com.trabajo.proyectoApi.Repository;


import com.trabajo.proyectoApi.Models.Psychologist;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PsychologistRepository extends MongoRepository<Psychologist,String> {

}


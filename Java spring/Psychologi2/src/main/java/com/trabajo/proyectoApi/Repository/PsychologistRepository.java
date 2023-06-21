package com.example.Psychologi.Repository;

import com.example.Psychologi.Models.Psychologist;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PsychologistRepository extends MongoRepository<Psychologist,String> {

}


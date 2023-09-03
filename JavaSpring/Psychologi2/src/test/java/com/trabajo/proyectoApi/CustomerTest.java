package com.trabajo.proyectoApi;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trabajo.proyectoApi.Models.Psychologist;
import com.trabajo.proyectoApi.Repository.PsychologistRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;

import javax.transaction.Transactional;

@Transactional
@Rollback
@SpringBootTest
@AutoConfigureMockMvc
public class CustomerTest {

    ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private static PsychologistRepository psychologistRepository;
    String psico1;
    String psico2;

    @BeforeAll
    public static void setup() {
        Psychologist psychologist = new Psychologist("Maria del carmen", "Perez Perez", "mariade@email.com", "123", "33652369855");
        Psychologist psychologist2 = new Psychologist("Maria del carmen", "Perez Perez", "mariade@email.com", "123", "33652369855");
        psychologistRepository.save(psychologist);


    }
    @Test
    void contextLoads() {

    }


}

package com.trabajo.proyectoApi;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trabajo.proyectoApi.Repository.PsychologistRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import javax.transaction.Transactional;

@Transactional
@Rollback
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class GameTest {

    ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private PsychologistRepository psychologistRepository;

    @Autowired
    private

    @Test
    void contextLoads() {

    }
}

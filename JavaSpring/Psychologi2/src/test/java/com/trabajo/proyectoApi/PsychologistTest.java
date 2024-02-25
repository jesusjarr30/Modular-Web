package com.trabajo.proyectoApi;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trabajo.proyectoApi.Models.Psychologist;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@Rollback
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class PsychologistTest {
    ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private MockMvc mockMvc;

    @Test
    void Registrar() throws Exception {

        Psychologist psychologist = new Psychologist("Maria del carmen", "Perez Perez", "mariade@email.com", "123", "33652369855");
        MvcResult mvcResult = mockMvc.perform(
                MockMvcRequestBuilders.post("/addPsychologist").contentType(MediaType.APPLICATION_JSON).content
                        (objectMapper.writeValueAsString(psychologist))).andReturn();
        int status = mvcResult.getResponse().getStatus();
        String response = mvcResult.getResponse().getContentAsString();

        // Print content for debugging
        System.out.println("Response Status: " + status);
        System.out.println("Response Content: " + response);
        // Perform assertions on content
        //assertThat(status).isEqualTo(200);
    }

}

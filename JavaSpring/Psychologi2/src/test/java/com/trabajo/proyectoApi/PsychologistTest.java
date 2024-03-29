package com.trabajo.proyectoApi;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trabajo.proyectoApi.Models.Psychologist;
import com.trabajo.proyectoApi.Repository.PsychologistRepository;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.transaction.Transactional;

import java.util.Base64;

import static org.assertj.core.api.Assertions.assertThat;

//@Transactional
//@Rollback
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class PsychologistTest {
    ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private PsychologistRepository psychologistRepository;

    /*
    1 Add user
    2. Add user with the same email
    3. Add user with the same name
    4. Login user
    5. look for user
    6.
    * */
    @Test
    @Order(1)
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
        assertThat(status).isEqualTo(200);
    }

    @Test
    @Order(2)
    void RegistrarRepetido () throws Exception{
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
        assertThat(status).isEqualTo(403);
    }
    @Test
    void GetPsycologist() throws Exception {
        Psychologist psychologist = new Psychologist("Jose roberto", "Perez Perez", "jose12@email.com", "123", "33652369855");
        psychologistRepository.save(psychologist);

        // Codifica el nombre de usuario y la contraseña en Base64
        String credentials = "jesus:jesus";
        String encodedCredentials = Base64.getEncoder().encodeToString(credentials.getBytes());

        MvcResult mvcResult = mockMvc.perform(
                        MockMvcRequestBuilders.get("/getPsychologist")
                                .contentType(MediaType.APPLICATION_JSON)
                                .header(HttpHeaders.AUTHORIZATION, "Basic " + encodedCredentials)) // Agrega el encabezado de autorización con las credenciales codificadas en Base64
                .andReturn();

        int status = mvcResult.getResponse().getStatus();
        String response = mvcResult.getResponse().getContentAsString();

        System.out.println(response);

        assertThat(status).isEqualTo(200);
    }

    @Test
    public void validLogin() throws Exception{
        //Psychologist psychologist = new Psychologist("Jose roberto", "Perez Perez", "mjesususus@email.com", "123", "33652369855");
        String password="123";
        String correo="jose12@email.com";
        String url= "/find/{correo}/{pass}=?correo="+correo+"&password="+password;

        //MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(url).contentType(MediaType.APPLICATION_JSON))
        //		.andReturn();
//http://localhost:8080/find/{correo}/{pass}?correo=jesus&password=jesus

        //int status = mvcResult.getResponse().getStatus();
        //String response = mvcResult.getResponse().getContentAsString();
        //assertThat(status).isEqualTo(200);
    }
    @Test
    public void findbyemail() throws Exception{
        MvcResult mvcResult = mockMvc.perform(
                MockMvcRequestBuilders.get("/getPsychologist").contentType(MediaType.APPLICATION_JSON)).andReturn();
    }
}

package com.trabajo.proyectoApi.Services;


import com.trabajo.proyectoApi.Exception.ExceptionPe;
import com.trabajo.proyectoApi.Exception.ResourceNotFoundException;
import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Models.Game;
import com.trabajo.proyectoApi.Models.Psychologist;
import com.trabajo.proyectoApi.Repository.PsychologistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin("http://localhost:3000/")
@RestController

public class PsychologistAPI {

    //only 3 methods to test the front-end
    @Autowired
    private PsychologistRepository psychologistRepository;

    @PostMapping("/addPsychologist")
    public String addPsychologist(@RequestBody Psychologist p){
        p.generateId();
        if(psychologistRepository.VerificarCorreo(p.getEmail())!=0){
            throw new ExceptionPe("El Correo no es valido, ya esta registrado con otra cuenta");
        }
       psychologistRepository.save(p);
        return p.getId();
    }

    @DeleteMapping("/deletePsychologist")
    public void deletePsychologist(@RequestParam String id){

        psychologistRepository.deleteById(id);
    }
    @GetMapping("/getPsychologist")
    public List<Psychologist> getPshychologist(){
        return psychologistRepository.findAll();
    }

    @PostMapping("/check")
    public String check(){
        return "check";
    }

    @GetMapping("/find/{correo}/{pass}")
    public Psychologist login(@RequestParam String correo, @RequestParam String password){
        Psychologist a = psychologistRepository.login(correo,password);
        return a;
    }
    @GetMapping("/getUser/{id}")
    public Optional<Psychologist> getPsy(@RequestParam String id){
            return psychologistRepository.findById(id);
    }
    @GetMapping("getUser/{correo}")
    public Optional<Psychologist> getPsyC(@RequestParam String correo){
        return Optional.ofNullable(psychologistRepository.getByEmail(correo));
    }
    //no funciona
    @PutMapping("/Update/{id}")
    public Psychologist editPsychologistAPI(@PathVariable String id, @RequestBody Map<String, Object> updates) {

        Optional<Psychologist> toEdit = psychologistRepository.findById(id);

        if (!toEdit.isPresent())
            throw new ResourceNotFoundException("No se econtro el juego que se desea editar");

        Psychologist psychologist = toEdit.get();


        for (Map.Entry<String, Object> entry : updates.entrySet()) {
            String fieldName = entry.getKey();
            Object fieldValue = entry.getValue();

            if (fieldName.isEmpty())
                throw new ResourceNotFoundException("Field name can't be empty");
            if (fieldValue == null)
                throw new ResourceNotFoundException("Field value can't be null");
            if (fieldName.equals("id"))
                throw new ResourceNotFoundException("Id can't be changed");

            try {
                Field field = Game.class.getDeclaredField(fieldName);
                field.setAccessible(true);

                field.set(psychologist, fieldValue);

            } catch (NoSuchFieldException | IllegalAccessException error) {
                throw new ResourceNotFoundException("Error setting field " + fieldName + ": " + error);
            }
        }

        return psychologistRepository.save(psychologist);
    }

}

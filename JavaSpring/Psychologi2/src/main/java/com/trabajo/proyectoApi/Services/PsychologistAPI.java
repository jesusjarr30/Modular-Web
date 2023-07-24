package com.trabajo.proyectoApi.Services;


import com.trabajo.proyectoApi.Exception.ExceptionPe;
import com.trabajo.proyectoApi.Exception.ResourceNotFoundException;
import com.trabajo.proyectoApi.Models.Psychologist;
import com.trabajo.proyectoApi.Repository.PsychologistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @PutMapping("/psychologists/{id}")
    public void updatePsychologist(@PathVariable String id, @RequestBody HashMap<String,String> updateAttributes) {
        // Buscar el psicólogo existente por su ID
        Optional<Psychologist> existingPsychologist = psychologistRepository.findById(id);

        if (existingPsychologist.isPresent()) {
            Psychologist a =existingPsychologist.get();
            for (Map.Entry<String, String> entry : updateAttributes.entrySet()) {
                String attributeName = entry.getKey();
                String attributeValue = entry.getValue();

                // Verificar si el atributo existe en la clase Psychologist
                // y asignar el valor solo si existe el atributo
                if ("nombre".equals(attributeName)) {
                    a.setNombre(attributeValue);
                } else if ("email".equals(attributeName)) {
                    a.setEmail(attributeValue);
                }
                // Agrega más atributos si es necesario
            }

            // Guarda el psicólogo actualizado en la base de datos
            //return psychologistRepository.save(psychologist);
        } else {
            // Si no se encuentra el psicólogo con el ID proporcionado, puedes lanzar una excepción o devolver un valor específico, según lo que desees hacer en este caso.
            // Por ejemplo:
            throw new ResourceNotFoundException("No se encontró el psicólogo con el ID: " + id);
        }
    }

}

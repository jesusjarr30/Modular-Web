package com.trabajo.proyectoApi.Services;


import com.trabajo.proyectoApi.Models.Psychologist;
import com.trabajo.proyectoApi.Repository.PsychologistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
public class PsychologistAPI {

    //only 3 methods to test the front-end
    @Autowired
    private PsychologistRepository psychologistRepository;
    @PostMapping("/addPsychologist")
    public String addPsychologist(@RequestBody Psychologist p){
        p.generateId();
        psychologistRepository.save(p);
        return p.getNombre();
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


    @GetMapping("/findPsy/{user}/{id}")
    public Psychologist findUser(@RequestParam String id,@RequestParam String password){
        Psychologist a = psychologistRepository.findUser(id,password);
        return a;
    }
}

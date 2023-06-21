package com.trabajo.proyectoApi.Services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
public class PsychologistAPI {
/*
    //only 3 methods to test the front-end
    @Autowired
    private PsychologistRepository psychologistRepository;
    @PostMapping("/addPsychologist")
    public String addPsychologist(@RequestBody Psychologist p){
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

*/
    @PostMapping("/check")
    public String check(){
        return "check";
    }
}

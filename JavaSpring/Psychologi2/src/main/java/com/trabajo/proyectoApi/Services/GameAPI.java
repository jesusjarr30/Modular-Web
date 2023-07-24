package com.trabajo.proyectoApi.Services;

import com.trabajo.proyectoApi.Exception.ResourceNotFoundException;
import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Models.Game;
import com.trabajo.proyectoApi.Repository.CustomerRepository;
import com.trabajo.proyectoApi.Repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
public class GameAPI {
    @Autowired
    GameRepository gameRepository;
    @Autowired
    CustomerRepository customerRepository;
    @PostMapping("/addGame/{idUsuario}")
    public Game add(@RequestParam String idUsuario) {
        Optional<Customer> a=customerRepository.findById(idUsuario);
        if (a.isPresent()) {
            // Se encontró el Customer
            Customer customer = a.get();
            // Hacer algo con el Customer
            Game game =new Game(idUsuario);
            gameRepository.save(game);
            return game;
        } else {
            throw new ResourceNotFoundException("No se ecntro un customer con el id ID: " + idUsuario);
        }
    }
    @GetMapping("/GetGame")
    public List<Game> getGame(){
        return gameRepository.findAll();
    }
    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@RequestParam String id) {
        Optional<Game> a = gameRepository.findById(id);
        if (a.isPresent()) {
            gameRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("No se encontro el id que desea eliminar de la base : " + id);
        }
    }
    @PutMapping("Update/{id}")
    public void editar(@RequestBody HashMap<String,String> updateAttributes){

    }




}

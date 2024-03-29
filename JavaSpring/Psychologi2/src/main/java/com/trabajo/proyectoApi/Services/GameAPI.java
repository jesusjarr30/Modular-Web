package com.trabajo.proyectoApi.Services;

import com.trabajo.proyectoApi.Exception.ResourceNotFoundException;
import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Models.Game;
import com.trabajo.proyectoApi.Repository.CustomerRepository;
import com.trabajo.proyectoApi.Repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@CrossOrigin("http://localhost:3000")
@RestController
public class GameAPI {
    @Autowired
    GameRepository gameRepository;
    @Autowired
    CustomerRepository customerRepository;
    @PostMapping("/addGame/{idUsuario}")
    public Game addGame(@RequestParam String idUsuario) {
        Optional<Customer> a=customerRepository.findById(idUsuario);
        if (a.isPresent()) {
            Customer customer = a.get();
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
    @PutMapping("/UpdateGame/{id}")
    public Game editGame(@PathVariable String id, @RequestBody Map<String, Object> updates) {

        Optional<Game> toEdit = gameRepository.findById(id);

        if (!toEdit.isPresent())
            throw new ResourceNotFoundException("No se econtro el juego que se desea editar");

        Game game = toEdit.get();


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

                field.set(game, fieldValue);

            } catch (NoSuchFieldException | IllegalAccessException error) {
                throw new ResourceNotFoundException("Error setting field " + fieldName + ": " + error);
            }
        }

        return gameRepository.save(game);
    }
    @GetMapping("/GetCustomerGame/{id}")
    public List<Game> getGameById(@RequestParam String id){
       return gameRepository.searchByGame(id);
    }
    @GetMapping("/verificatedGame/{codigo}")
    public Game verificateGame(@RequestParam String codigo){
        return gameRepository.searchByCodigo(codigo);

    }
    @GetMapping("/verificateGame2/{codigo}")
    public boolean verificateGame2(@RequestParam String codigo){
        Game a= gameRepository.searchByCodigo(codigo);
        if(a==null){
            return false;
        }
        if(a.getCodigo().equals(codigo)){
            return true;
        }
        return false;

    }
}

package com.trabajo.proyectoApi.Services;

import com.trabajo.proyectoApi.Models.Appointment;
import com.trabajo.proyectoApi.Models.Note;
import com.trabajo.proyectoApi.Repository.AppointmentRepository;
import com.trabajo.proyectoApi.Repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
public class NoteAPI {

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping("/AddNote")
    public String addNote(@RequestBody Note note){
        note.generateId();
        noteRepository.save(note);
        return note.getId();
    }
    @GetMapping("/GetNotes")
    public List<Note> getNotes(){
        return noteRepository.findAll();
    }
    @DeleteMapping("/deleteNote/{id}")
    public String deleteAppointment(@RequestParam String id){
        //borra todos los datos de juego y al final borra
        noteRepository.deleteById(id);
        return id;
    }

}

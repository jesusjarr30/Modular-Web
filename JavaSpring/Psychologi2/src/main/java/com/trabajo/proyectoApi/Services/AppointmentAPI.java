package com.trabajo.proyectoApi.Services;

import com.trabajo.proyectoApi.Exception.ResourceNotFoundException;
import com.trabajo.proyectoApi.Models.Appointment;
import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
public class AppointmentAPI {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping("/AddAppointment")
    public String addAppointment(@RequestBody Appointment appointment){
        appointment.generateId();
        appointmentRepository.save(appointment);
        return appointment.getId();
    }
    @GetMapping("/GetAppointment/{id}")
    public List<Appointment> getCustomerAppointment(){
        return appointmentRepository.findAll();
    }
    @DeleteMapping("/deletAppointment/{id}")
    public String deleteAppointment(@RequestParam String id){
        //borra todos los datos de juego y al final borra
        appointmentRepository.deleteById(id);
        return id;
    }


}

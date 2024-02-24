package com.trabajo.proyectoApi.Services;

import com.trabajo.proyectoApi.Exception.ExceptionPe;
import com.trabajo.proyectoApi.Exception.ResourceNotFoundException;
import com.trabajo.proyectoApi.Models.Appointment;
import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


@RestController
public class AppointmentAPI {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping("/AddAppointment")
    public String addAppointment(@RequestBody Appointment appointment){
        appointment.generateId();

        Date start = appointment.getStart();
        Date end = appointment.getEnd();
        if (start.before(end)) {
            // La fecha de inicio (start) es anterior a la fecha de fin (end)
            // Realiza las acciones necesarias aquí

        } else if (start.after(end)) {
            // La fecha de inicio (start) es posterior a la fecha de fin (end)
            // Realiza las acciones necesarias aquí
            throw new ExceptionPe("Fecha invalida salida 2");
        } else {
            // Las fechas de inicio (start) y fin (end) son iguales
            // Puedes manejar esta situación según tus requerimientos
            throw new ExceptionPe("Fechas iguales por favor de verificar");
        }

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

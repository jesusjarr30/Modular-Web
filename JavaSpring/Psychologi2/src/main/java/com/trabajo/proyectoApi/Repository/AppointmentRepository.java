package com.trabajo.proyectoApi.Repository;

import com.trabajo.proyectoApi.Models.Appointment;
import com.trabajo.proyectoApi.Models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment,String> {

}

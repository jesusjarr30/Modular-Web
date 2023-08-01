package com.trabajo.proyectoApi.Services;


import com.trabajo.proyectoApi.Exception.ResourceNotFoundException;
import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Models.Game;
import com.trabajo.proyectoApi.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin("http://localhost:3000/")
@RestController
public class CustomerAPI {

    @Autowired
    private CustomerRepository customerRepository;

    //only add the require
    @PostMapping("/AddCustomer")
    public String addCustsomer(@RequestBody Customer customer){
        customer.generateId();
        customerRepository.save(customer);
        return customer.getId();
    }
    @GetMapping("/getCustomer")
    public List<Customer> getCustomer(){
        return customerRepository.findAll();
    }
    @DeleteMapping("/deletCustomer")
    public String deleteCustomer(@RequestBody String id){
        customerRepository.deleteById(id);
        return id;
    }
    @PutMapping("/UpdateCustomer/{id}")
    public Customer editCustomer(@PathVariable String id, @RequestBody Map<String, Object> updates) {

        Optional<Customer> toEdit = customerRepository.findById(id);

        if (!toEdit.isPresent())
            throw new ResourceNotFoundException("No se econtro el juego que se desea editar");

        Customer customer = toEdit.get();


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
                Field field = Customer.class.getDeclaredField(fieldName);
                field.setAccessible(true);

                field.set(customer, fieldValue);

            } catch (NoSuchFieldException | IllegalAccessException error) {
                throw new ResourceNotFoundException("Error setting field " + fieldName + ": " + error);
            }
        }

        return customerRepository.save(customer);
    }
    @GetMapping("/GetCustomerId/{id}")
    public Customer GetCustomerId(@RequestParam String id){
        Optional<Customer> a=customerRepository.findById(id);
        if(a.isPresent()){
            return a.get();
        }
        throw new ResourceNotFoundException("Customer not found, please check the id");
    }
    @GetMapping("/BuscarPorNombres/{id}/{name}")
    public List<Customer> BuscarPorNombres(@RequestParam String id,@RequestParam String name){
        List<Customer> list =customerRepository.findByname(id,name);
        if(!list.isEmpty()){
            return list;
        }
        throw new ResourceNotFoundException("Not a coincidence with the name "+ name );
    }



}

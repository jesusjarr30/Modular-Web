package com.trabajo.proyectoApi.Repository;


import com.trabajo.proyectoApi.Models.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends MongoRepository<Customer,String> {

}


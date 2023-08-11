package com.trabajo.proyectoApi.Repository;


import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Models.Psychologist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface CustomerRepository extends JpaRepository<Customer,String>{

    //for the login
    @Query("SELECT p FROM Customer p WHERE p.PsychologistID = :PsychologistID2 AND p.id = :id")
    Customer getCustomer(@Param("PsychologistID2") String PsychologistID2, @Param("id") String id);

    @Query(value = "SELECT * FROM customer WHERE PsychologistID = :PsychologistID2 AND name LIKE CONCAT('%', :name2, '%')", nativeQuery = true)
    List<Customer> findByname(@Param("PsychologistID2") String PsychologistID2, @Param("name2") String name2);
    //validate to create a user
    @Query("SELECT c FROM Customer c WHERE c.Email = :email")
    List<Customer> searchDuplicateEmail(@Param("email") String email);
    @Query("SELECT c FROM Customer c WHERE c.name = :name")
    List<Customer> searchDuplicateName(@Param("name") String name);

    //Query to get the all the customer relate to Psycologi id
    @Query("SELECT c FROM Customer c WHERE c.PsychologistID = :PsychologistID")
    List<Customer> SearchIDPSichologist(@Param("PsychologistID") String PsychologistID);



}




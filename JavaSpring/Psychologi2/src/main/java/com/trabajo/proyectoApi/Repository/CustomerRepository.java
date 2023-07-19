package com.trabajo.proyectoApi.Repository;


import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Models.Psychologist;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends MongoRepository<Customer,String> {



}
/*
Query("{ \"$or\": [" +
            "{ \"id\": { \"$eq\": ?0 } }, " +
            "{ \"status\": { \"$eq\": ?1 } }, " +
            "{ \"location\": { \"$eq\": ?2 } }, " +
            "{ \"groupID\": { \"$eq\": ?3 } }, " +
            "{ \"available\": { \"$eq\": ?4 } }, " +
            "] }")
    List<Book> findByParameters(@Param("id") String id,
                                     @Param("status") String status,
                                     @Param("location") String location,
                                     @Param("groupID") String groupID,
                                     @Param("available") boolean available);
 */



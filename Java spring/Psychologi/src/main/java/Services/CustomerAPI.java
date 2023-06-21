package Services;

import Models.Customer;
import Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
public class CustomerAPI {

    @Autowired
    private CustomerRepository customerRepository;


    //only add the require
    @PostMapping("/AddCustomer")
    public String addCustsomer(@RequestBody Customer customer){
        customerRepository.save(customer);
        return customer.getName();
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
}

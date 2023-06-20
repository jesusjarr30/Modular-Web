package Repository;

import Models.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Psychologist extends MongoRepository<Psychologist,String> {

}
//add the personalize query here

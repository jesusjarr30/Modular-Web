package Repository;

import Models.Psychologist;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PsychologistRepository extends MongoRepository<Psychologist,String> {

}
//add the personalize query here

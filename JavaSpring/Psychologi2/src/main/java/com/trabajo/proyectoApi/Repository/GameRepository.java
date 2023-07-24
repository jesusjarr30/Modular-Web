package com.trabajo.proyectoApi.Repository;

import com.trabajo.proyectoApi.Models.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  GameRepository extends JpaRepository<Game, String> {

}

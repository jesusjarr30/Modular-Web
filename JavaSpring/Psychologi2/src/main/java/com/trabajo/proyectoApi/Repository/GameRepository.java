package com.trabajo.proyectoApi.Repository;

import com.trabajo.proyectoApi.Models.Customer;
import com.trabajo.proyectoApi.Models.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface  GameRepository extends JpaRepository<Game, String> {

    @Query("SELECT g FROM Game g WHERE g.idCliente = :id")
    List<Game> searchByGame(@Param("id") String id);

    @Query("SELECT g FROM Game g WHERE g.codigo = :codigo")
    Game searchByCodigo(@Param("codigo") String codigo);


    @Query("DELETE FROM Game g WHERE g.idCliente = :idCLiente")
    @Modifying
    @Transactional
    void deleteByClientId(@Param("idCLiente") String id);


}

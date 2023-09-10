package com.trabajo.proyectoApi.Repository;

import com.trabajo.proyectoApi.Models.Game;
import com.trabajo.proyectoApi.Models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, String> {

}

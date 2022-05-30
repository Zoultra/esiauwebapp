package com.esiau.backendesiauapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.esiau.backendesiauapp.models.Classe;
import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Matiere;
import com.esiau.backendesiauapp.models.Note;

public interface NoteRepository extends JpaRepository  <Note, Integer>{
      
	@Query("select n from Note n where n.etudiant.classe=:x and n.matiere=:y")                                        
    List<Note> findParClasseMatiere(@Param("x") Classe classe,@Param("y") Matiere matiere);
	
	@Query("select n from Note n where n.etudiant.classe=:x and n.etudiant=:y and n.examen=:z")                                        
    List<Note> findNoteByEtudiant(@Param("x") Classe classe,@Param("y") Etudiant etudiant, @Param("z") int examen);
	
	
} 
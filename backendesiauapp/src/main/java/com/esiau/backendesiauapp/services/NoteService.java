package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Classe;
import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Matiere;
import com.esiau.backendesiauapp.models.Note;



public interface NoteService {
     
	// Enregistrer une note pour un eleve dans une matiere
	  public Note saveNote(Note note);
	
	 // Liste de tous les Notes
	   public	List<Note> getAllNotes();
	 
	   // Consulter un etudiant
	    Optional<Note> getNote(int idNote);
	   
	  // Lister les notes par classe et par matiere des etudiants
	    
	   List<Note> findNoteByClasseEtMatiere(Classe classe, Matiere matiere);
	  // Liste des notes d'un eleve dans chaque matiere
	   List<Note> findNoteByEtudiant(Etudiant etudiant);
	
}

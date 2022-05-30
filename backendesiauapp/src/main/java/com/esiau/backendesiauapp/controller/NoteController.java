package com.esiau.backendesiauapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.esiau.backendesiauapp.models.Classe;
import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Matiere;
import com.esiau.backendesiauapp.models.Note;
import com.esiau.backendesiauapp.services.ClasseService;
import com.esiau.backendesiauapp.services.EtudiantService;
import com.esiau.backendesiauapp.services.MatiereService;
import com.esiau.backendesiauapp.services.NoteService;

@RestController
public class NoteController {
    
	@Autowired
	private NoteService noteService;
	@Autowired
    private ClasseService classeService;
	@Autowired
	private MatiereService matiereService;
	@Autowired
	private EtudiantService etudiantService;
	
		// Web service pour enregistrer un Note
			 @PostMapping("/note")
				public Note createNote(@RequestBody Note note) {
					return noteService.saveNote(note);
				}

		//	Web service pour afficher tous les Notes
				 @GetMapping("/notes")
			     public Iterable<Note> getAllNotes() {
				return noteService.getAllNotes();
				}   
				 
		// Web service pour afficher une note
				 @GetMapping("/note/{idNote}")
					public Note getNote(@PathVariable("idNote") final int idNote) {
						Optional<Note> note = noteService.getNote(idNote);
						 
						if(note.isPresent()) {
							return note.get();
						} else {
							return null;
						}
}
		// ------------------- recuperer les notes par classe et matiere----------------------------------------
		    @GetMapping("/matiere/notes/{nomClasse}/{idMatiere}")
				public  List<Note> findNoteByClasseEtMatiere(@PathVariable("nomClasse") final String nomClasse,@PathVariable("idMatiere") final Integer idMatiere) {
		    	 Classe classe =classeService.findByNom(nomClasse);
		    	Matiere matiere =matiereService.findMatiereByIdentifiant(idMatiere);
		    	 List<Note> notes = noteService.findNoteByClasseEtMatiere(classe,matiere);
						return notes;
			 }
			 
		 // ------------------- recuperer les notes d'un etudiant par matiere ----------------------------------------	
			
		 // ------------------- recuperer les notes d'un etudiant dans chaque matiere d'une semestre----------------------------------------
		    @GetMapping("/matieres/notes/{nomClasse}/{idEtudiant}/{examen}")
			public  List<Note> findNoteByEtudiant(@PathVariable("nomClasse") final String nomClasse,@PathVariable("idEtudiant") final Integer idEtudiant,@PathVariable("examen") final Integer examen) {
	    	 Classe classe =classeService.findByNom(nomClasse);
	    	Etudiant etudiant =etudiantService.findEtudiantByIdentifiant(idEtudiant);
	    	 List<Note> notes = noteService.findNoteByEtudiant(classe,etudiant,examen);
					return notes;
		 }
		 // ------------------- Releve d'un eleve--------------		
		 // Le releve contient toutes les matieres de l'année avc notes et les ues respectifs   
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
}

package com.esiau.backendesiauapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.esiau.backendesiauapp.models.Professeur;
import com.esiau.backendesiauapp.models.ProfesseurMatiere;
import com.esiau.backendesiauapp.services.ProfesseurMatiereService;
import com.esiau.backendesiauapp.services.ProfesseurService;

@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")

public class ProfesseurController {
    
	@Autowired
	private ProfesseurService professeurService;
	
	@Autowired
	private ProfesseurMatiereService professeurmatiereservice;
	
	// Créer un prof
	@PostMapping("/professeur")
	public Professeur createProf(@RequestBody Professeur prof) {
    return professeurService.saveProf(prof);
	} 
	
	
	 @PutMapping("/professeur/{idProf}")
		public Professeur updateUE(@PathVariable("idProf") final int idProf, @RequestBody Professeur prof) {
			Optional<Professeur> p = professeurService.getProf(idProf);
			if(p.isPresent()){
				
				Professeur currentProf = p.get();
				
				String nomProf = prof.getNomProf();
				if(nomProf != null) {
					currentProf.setNomProf(nomProf);
				}  
				
				String prenomProf = prof.getPrenomProf();
				if(nomProf != null) {
					currentProf.setPrenomProf(prenomProf);
				} 
				
				String telProf = prof.getTelProf();
				if(telProf != null) {
					currentProf.setTelProf(telProf);
				} 
				
				String specialite = prof.getSpecialite();
				if(specialite != null) {
					currentProf.setSpecialite(specialite);
				} 
				
				String diplome = prof.getDiplome();
				if(diplome != null) {
					currentProf.setDiplome(diplome);
				} 
				
				String emailProf = prof.getEmailProf();
				if(emailProf != null) {
					currentProf.setEmailProf(emailProf);
				} 
				
				
				professeurService.saveProf(currentProf);
				return currentProf;
			} else {
				return null;
			}
		}
	 
	// Liste de tous les profs
	@GetMapping("/professeur")
	public Iterable<Professeur> getAlls(){
		return professeurService.getAlls();
	}
	
	// Consulter un prof
	
	@GetMapping("/professeur/{idProf}")
	public Professeur getProf(@PathVariable("idProf") final int idProf) {
		Optional<Professeur> prof = professeurService.getProf(idProf);
		 
		if(prof.isPresent()) {
			return prof.get();
		} else {
			return   null;
		}
}      
	 
	// Supprimer un prof
	 @DeleteMapping("/professeur/{idProf}")
	 public void deleteProfById(@PathVariable("idProf") final int idProf) {
		 professeurService.deleteProfById(idProf);
		}
	 
	 /* ------------------- recuperer les matieres pour un prof ------------*/
	    @GetMapping("/professeur/matiere/{idProf}")
	    
		public  List<ProfesseurMatiere> findMatiereForProf(@PathVariable("idProf") final Integer idProf) {
 	
 	    Professeur professeur = professeurService.findProfByIdentifiant(idProf);
 	    
 	    List<ProfesseurMatiere> matieresduprofs = professeurmatiereservice.findMatiereForProf(professeur);
 	    
				return matieresduprofs;
	

	    }
	    
	 // Attribuer des matieres à un prof
	    
		@PostMapping("/professeur/addmatiere")
		public ProfesseurMatiere createMatiereProf(@RequestBody ProfesseurMatiere professeurmatiere) {
	    return professeurmatiereservice.saveProfMatiere(professeurmatiere);
		}
		
	// Supprimer matiere pour un  prof
		@DeleteMapping("/professeur/matiere/{idProfMatiere}")
		public void deleteProfMatiereById(@PathVariable("idProfMatiere") final int idProfMatiere) {
			professeurmatiereservice.deleteProfMatiereById(idProfMatiere);
			}
		
		// Liste de tous les profs
		@GetMapping("/professeur/matieres")
		public Iterable<ProfesseurMatiere> getAllsMatiereProf(){
			return professeurmatiereservice.getAllsMatiereProf();
		}
		
	
}

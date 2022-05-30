package com.esiau.backendesiauapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.esiau.backendesiauapp.models.Professeur;
import com.esiau.backendesiauapp.services.ProfesseurService;

@RestController
public class ProfesseurController {
    
	@Autowired
	private ProfesseurService professeurService;
	
	// Créer un prof
	@PostMapping("/prof")
	public Professeur createProf(@RequestBody Professeur prof) {
    return professeurService.saveProf(prof);
	} 
	
	
	 @PutMapping("/prof/update/{idProf}")
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
	@GetMapping("/profs")
	public Iterable<Professeur> getAlls(){
		return professeurService.getAlls();
	}
	
	// Consulter un prof
	
	@GetMapping("/prof/{idProf}")
	public Professeur getProf(@PathVariable("idProf") final int idProf) {
		Optional<Professeur> prof = professeurService.getProf(idProf);
		 
		if(prof.isPresent()) {
			return prof.get();
		} else {
			return   null;
		}
}      
	 
	// Supprimer un prof
	 @DeleteMapping("/prof/delete/{idProf}")
	 public void deleteProfById(@PathVariable("idProf") final int idProf) {
		 professeurService.deleteProfById(idProf);
		}
	


}

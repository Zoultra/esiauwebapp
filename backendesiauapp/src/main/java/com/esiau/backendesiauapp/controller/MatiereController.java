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

import com.esiau.backendesiauapp.models.Matiere;
import com.esiau.backendesiauapp.services.MatiereService;
 
@RestController
public class MatiereController {
   
	@Autowired
	private MatiereService matiereService;
	
	// Web service pour enregistrer une matiere
			 @PostMapping("/matiere")
				public Matiere createMatiere(@RequestBody Matiere matiere) {
					return matiereService.saveMatiere(matiere) ;
				}
	     
			// Web service pour afficher tous les matieres
			 @GetMapping("/matieres")
		     public Iterable<Matiere> getAllMatieres() {
			return matiereService.getAllMatieres();
			}   
			 
			// Web service pour modifier une matiere
			 @PutMapping("/matiere/{idMatiere}")
				public Matiere updateMatiere(@PathVariable("idMatiere") final int idMatiere, @RequestBody Matiere matiere) {
					Optional<Matiere> m = matiereService.getMatiere(idMatiere);
					if(m.isPresent()){
						
						Matiere currentMatiere = m.get();
						
						String nomMatiere = matiere.getNomMatiere();
						if(nomMatiere != null) {
							currentMatiere.setNomMatiere(nomMatiere);
						} 
						
						 
						matiereService.saveMatiere(currentMatiere);
						return currentMatiere;
					} else {
						return null;
					}
				}
			 
			// Web service pour afficher une matiere
			 @GetMapping("/matiere/{idMatiere}")
				public Matiere getMatiere(@PathVariable("idMatiere") final int idMatiere) {
					Optional<Matiere> matiere = matiereService.getMatiere(idMatiere);
					 
					if(matiere.isPresent()) {
						return matiere.get();
					} else {
						return null;
					}
			 

			 }
			 
			// Web service pour supprimer une UE
			 @DeleteMapping("/matiere/{idUe}")
				public void deleteMatiereById(@PathVariable("idUe") final int idMatiere) {
				 matiereService.deleteMatiereById(idMatiere);
				}
}

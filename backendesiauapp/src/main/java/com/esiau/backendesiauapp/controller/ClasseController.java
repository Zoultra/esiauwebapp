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

import com.esiau.backendesiauapp.models.Classe;
import com.esiau.backendesiauapp.services.ClasseService;



@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")
public class ClasseController {
	
	@Autowired
    private ClasseService classeService;
	
	// Web service pour enregistrer une classe
	 @PostMapping("/classes")
		public Classe createClasse(@RequestBody Classe classe) {
		    
			return classeService.saveClasse(classe) ;
		}
	// Web service pour modifier une classe
	 @PutMapping("/classes/{idClasse}")
		public Classe updateClasse(@PathVariable("idClasse") final Integer idClasse, @RequestBody Classe classe) {
			Optional<Classe> c = classeService.getClasse(idClasse);
			if(c.isPresent()){
				
				Classe currentClasse = c.get();
				
				String nomClasse = classe.getNomClasse();
				if(nomClasse != null) {
					currentClasse.setNomClasse(nomClasse);
				} 
				
				int nombreEtudiant = classe.getNombreEtudiant();
				if(nomClasse != null){
					currentClasse.setNombreEtudiant(nombreEtudiant);
				} 
				classeService.updateClasse(currentClasse);
				return currentClasse;
			} else {
				return null;
			}
		}
	// Web service pour afficher tous les classes
	 @GetMapping("/classes")
     public List<Classe> getAllClasses() {
		return classeService.getAllClasses();
	}
	// Web service pour afficher une classe
	 @GetMapping("/classes/{idClasse}")
		public Classe getClasse(@PathVariable("idClasse") final Integer idClasse) {
			Optional<Classe> classe = classeService.getClasse(idClasse);
			 
			if(classe.isPresent()) {
				return classe.get();
			} else {
				return null;
			}
	 

	 }
	 
	// Web service pour supprimer une classe
			 @DeleteMapping("/classes/{idClasse}")
				public void deleteClasseById(@PathVariable("idClasse") final int idClasse) {
				 classeService.deleteClasseById(idClasse);
				}
}

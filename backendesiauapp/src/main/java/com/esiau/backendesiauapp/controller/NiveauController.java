package com.esiau.backendesiauapp.controller;

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

import com.esiau.backendesiauapp.models.Niveau;
import com.esiau.backendesiauapp.services.NiveauService;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/backendesiauapp/v1")
public class NiveauController {
   
	@Autowired
	private NiveauService niveauService;
	
	// Web service pour enregistrer un niveau
		 @PostMapping("/niveaux")
			public Niveau createNiveau(@RequestBody Niveau niveau) {
				return niveauService.saveNiveau(niveau) ;
			}
		 
		// Web service pour afficher tous les niveaus
		 @GetMapping("/niveaux")
	     public Iterable<Niveau> getAllNiveaus() {
		return niveauService.getAllNiveaus();
		}
		 
		// Web service pour modifier une niveau
		 @PutMapping("/niveaux/{idNiveau}")
			public Niveau updateNiveau(@PathVariable("idNiveau") final int idNiveau, @RequestBody Niveau niveau) {
				Optional<Niveau> n = niveauService.getNiveau(idNiveau);
				if(n.isPresent()){
					
					Niveau currentNiveau = n.get();
					
					String nomNiveau = niveau.getNomNiveau();
					if(nomNiveau != null) {
						currentNiveau.setNomNiveau(nomNiveau);
					} 
					
					 
					niveauService.saveNiveau(currentNiveau);
					return currentNiveau;
				} else {
					return null;
				}
			}
		 
		 
		 
		// Web service pour afficher un niveau
		 @GetMapping("/niveaux/{idNiveau}")
			public Niveau getNiveau(@PathVariable("idNiveau") final int idNiveau) {
				Optional<Niveau> niveau = niveauService.getNiveau(idNiveau);
				 
				if(niveau.isPresent()) {
					return niveau.get();
				} else {
					return null;
				}
		 

		 }
		 
		// Web service pour supprimer un niveau
		 @DeleteMapping("/niveaux/{idNiveau}")
			public void deleteNiveauById(@PathVariable("idNiveau") final int idNiveau) {
			 niveauService.deleteNiveauById(idNiveau);
			}
}

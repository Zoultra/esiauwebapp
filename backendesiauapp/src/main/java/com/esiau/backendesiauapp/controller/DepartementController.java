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
import com.esiau.backendesiauapp.models.Departement;
import com.esiau.backendesiauapp.services.DepartementService;

@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")
public class DepartementController {
	
	@Autowired
	private DepartementService departementService;
	
	// Web service pour enregistrer un Departement
		 @PostMapping("/departement")
			public Departement createDepartement(@RequestBody Departement departement) {
			    
				return departementService.saveDepartement(departement) ;
			}
		 
		// Web service pour modifier un Departement
		 @PutMapping("/departement/{idDepartement}")
			public Departement updateDepartement(@PathVariable("idDepartement") final Integer idDepartement, @RequestBody Departement departement) {
				Optional<Departement> d = departementService.getDepartement(idDepartement);
				if(d.isPresent()){
					
					Departement currentDepartement = d.get();
					
					String nomDepartement = departement.getNomDepartement();
					if(nomDepartement != null) {
						currentDepartement.setNomDepartement(nomDepartement);
					} 
					
					 
					departementService.updateDepartement(currentDepartement);
					return currentDepartement;
				} else {
					return null;
				}
			}
		// Web service pour afficher tous les Departements
		 @GetMapping("/departement")
	     public List<Departement> getAllDepartements() {
			return departementService.getAllDepartements();
		}
		// Web service pour afficher un Departement
		 @GetMapping("/departement/{idDepartement}")
			public Departement getDepartement(@PathVariable("idDepartement") final Integer idDepartement) {
				Optional<Departement> departement = departementService.getDepartement(idDepartement);
				 
				if(departement.isPresent()) {
					return departement.get();
				} else {
					return null;
				}
		 

		 }
		 
		// Web service pour supprimer une classe
				 @DeleteMapping("/departement/{idDepartement}")
					public void deleteDepartementById(@PathVariable("idDepartement") final int idDepartement) {
					 departementService.deleteDepartementById(idDepartement);
					}

}

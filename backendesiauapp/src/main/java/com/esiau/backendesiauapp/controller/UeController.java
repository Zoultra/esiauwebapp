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

import com.esiau.backendesiauapp.models.UE;
import com.esiau.backendesiauapp.services.UeService;

@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")
public class UeController {
    
	@Autowired
	private UeService ueService;
	
	// Web service pour enregistrer une UE
			 @PostMapping("/ue")
				public UE createUE(@RequestBody UE ue) {
					return ueService.saveUE(ue) ;
				}
	     
			// Web service pour afficher tous les UEs
			 @GetMapping("/ue")
		     public Iterable<UE> getAllUEs() {
			return ueService.getAllUEs();
			}   
			 
			// Web service pour modifier une UE
			 @PutMapping("/ue/{idUe}")
				public UE updateUE(@PathVariable("idUe") final int idUe, @RequestBody UE ue) {
					Optional<UE> u = ueService.getUE(idUe);
					if(u.isPresent()){
						
						UE currentUe = u.get();
						
						String nomUe = ue.getNomUe();
						if(nomUe != null) {
							currentUe.setNomUe(nomUe);
						} 
						
						 
						ueService.saveUE(currentUe);
						return currentUe;
					} else {
						return null;
					}
				}
			 
			// Web service pour afficher une UE
			 @GetMapping("/ue/{idUe}")
				public UE getUE(@PathVariable("idUe") final int idUe) {
					Optional<UE> ue = ueService.getUE(idUe);
					 
					if(ue.isPresent()) {
						return ue.get();
					} else {
						return null;
					}
			 

			 }
			 
			// Web service pour supprimer une UE
			 @DeleteMapping("/ue/{idUe}")
				public void deleteUEById(@PathVariable("idUe") final int idUe) {
				 ueService.deleteUEById(idUe);
				}
}

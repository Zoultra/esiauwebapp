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

import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Paiement;
import com.esiau.backendesiauapp.services.EtudiantService;
import com.esiau.backendesiauapp.services.PaiementService;

@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")
public class PaiementController {
	
	@Autowired
	private PaiementService paiementService;
	
	@Autowired
	private EtudiantService etudiantService;
	
	@PostMapping("/paiement")
	public Paiement createPaiement(@RequestBody Paiement paiement) {
    return paiementService.addPaiement(paiement) ;
	}
	/*@PutMapping("/paiement/{idPaiement}")
		public Paiement updatePaiement(@PathVariable("idPaiement") final int idPaiement, @RequestBody Paiement paiement) {
			Optional<Paiement> p = paiementService.getPaiement(idPaiement);
			if(p.isPresent()){
				
				Paiement currentPaiement = p.get();
				
				String montantPaiement = paiement.getMontantPaiement();
				if(montantPaiement != null) {
					currentPaiement.setMontantPaiement(montantPaiement);
				} 
				
				 
				paiementService.addPaiement(currentPaiement);
				return currentPaiement;
			} else {
				return null;
			}
		}*/
	 @GetMapping("/paiement")
		public Iterable<Paiement> getAllPaiements(){
			return paiementService.allPaiements();
		}
	 @GetMapping("/paiement/{idPaiement}")
		public Paiement getPaiementById(@PathVariable("idPaiement") final int idPaiement) {
			Optional<Paiement> paiement = paiementService.getPaiement(idPaiement);
			 
			if(paiement.isPresent()) {
				return paiement.get();
			} else {
				return   null;
			}
	} 
	 @DeleteMapping("/paiement/{idPaiement}")
	 public void deletePaiementById(@PathVariable("idPaiement") final int idPaiement) {
		 paiementService.deletePaiement(idPaiement);
		}
	 
	  @GetMapping("/paiement/etudiant/{idEtudiant}")
		public  List<Paiement> findPaiementByEtudiant(@PathVariable("idEtudiant") final Integer idEtudiant) {
  	Etudiant etudiant =etudiantService.findEtudiantByIdentifiant(idEtudiant);
  	 List<Paiement> paiements = paiementService.findPaiementByEtudiant(etudiant);
  	       
				return paiements;
	 }

}

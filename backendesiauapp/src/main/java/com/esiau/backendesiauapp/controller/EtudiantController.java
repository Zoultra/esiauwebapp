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
import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Niveau;
import com.esiau.backendesiauapp.services.ClasseService;
import com.esiau.backendesiauapp.services.EtudiantService;
import com.esiau.backendesiauapp.services.NiveauService;




@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")
public class EtudiantController {
 
  @Autowired
  private EtudiantService etudiantService;	 
  
  @Autowired
  private ClasseService classeService;
  
  @Autowired
  private NiveauService niveauService;
  
  
 
  @PostMapping("/etudiants")
	public Etudiant createEtudiant(@RequestBody Etudiant etu) {
		return etudiantService.saveEtudiant(etu);
	}
	
	@PutMapping("/etudiants/{idEtudiant}")
	public Etudiant updateEtudiant(@PathVariable("idEtudiant") final Integer idEtudiant, @RequestBody Etudiant etudiant) {
		Optional<Etudiant> e = etudiantService.getEtudiant(idEtudiant);
		if(e.isPresent()) {
			
			Etudiant currentEtudiant = e.get();
			
			
			
			String nom = etudiant.getNomEtudiant();
			if(nom != null) {
				currentEtudiant.setNomEtudiant(nom);
			}
			String prenom = etudiant.getPrenomEtudiant();
			if(prenom != null) {
				currentEtudiant.setPrenomEtudiant(prenom);
			}
			
			String date_naissance = etudiant.getDateNaissance();
			if(date_naissance != null) {
				currentEtudiant.setDateNaissance(date_naissance);
			}
			
			String lieu_naissance = etudiant.getLieuNaissance();
			if(lieu_naissance != null) {
				currentEtudiant.setLieuNaissance(lieu_naissance);
			}
			
			String telephone = etudiant.getTelEtudiant();
			if(telephone != null) {
				currentEtudiant.setTelEtudiant(telephone);
			}
			
			String prenom_pere = etudiant.getPrenomPere();
			if(prenom_pere != null) {
				currentEtudiant.setPrenomPere(prenom_pere);
			}
			
			String contactPere = etudiant.getContactPere();
			if(contactPere != null) {
				currentEtudiant.setContactPere(contactPere);
			}
			
			int id_inscription = etudiant.getIdInscription();
			if(id_inscription != 0) {
				currentEtudiant.setIdInscription(id_inscription);
			}
			
			
			 
			etudiantService.saveEtudiant(currentEtudiant);
			return currentEtudiant;
		} else {
			return null;
		}
	}
	
	
	@GetMapping("/etudiants")
      public Iterable<Etudiant> getAllEtudiants() {
		return etudiantService.getAllEtudiants();
	}
	
	 
	@GetMapping("/etudiants/{idEtudiant}")
	public Etudiant getEtudiant(@PathVariable("idEtudiant") final Integer idEtudiant) {
		Optional<Etudiant> etudiant = etudiantService.getEtudiant(idEtudiant);
		 
		if(etudiant.isPresent()) {
			return etudiant.get();
		} else {
			return null;
		}
	}
	 
	
	@DeleteMapping("/etudiants/{idEtudiant}")
	public void deleteEtudiantById(@PathVariable("idEtudiant") final Integer idEtudiant) {
		etudiantService.deleteEtudiantById(idEtudiant);
	}
	
	// -------------------recuperer les eleves d'une classe---------------------------------------------
	
		@GetMapping("/etudiants/classe/{nomClasse}")
			public List<Etudiant> getEtudiantFormClasse(@PathVariable("nomClasse") String nomClasse) {
				Classe classe =classeService.findByNom(nomClasse);
				 
				List<Etudiant> etudiants=etudiantService.findEtudinatParClasse(classe);
				return etudiants;
				  
			}
		
		// -------------------recuperer les eleves d'un niveau ( ex: Tous les eleves de la 1ere années )---------------------------------------------
		
		/*	@GetMapping("/etudiants/niveau/{nomNiveau}")
				public List<Etudiant> getNiveauFormNiveau(@PathVariable("nomNiveau") String nomNiveau) {
					Niveau niveau =niveauService.findByNom(nomNiveau);
					 
					List<Etudiant> etudiants=etudiantService.findEtudianttParNiveau(niveau);
					return etudiants;
					
					 
					 
				}*/
	
	
	
	
}

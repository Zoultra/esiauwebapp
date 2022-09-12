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
import com.esiau.backendesiauapp.models.Personnel;
import com.esiau.backendesiauapp.models.Pret;
import com.esiau.backendesiauapp.services.PersonnelService;
import com.esiau.backendesiauapp.services.PretService;



@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")
public class PersonnelController {
	@Autowired
	private PersonnelService personnelSerice;
	@Autowired
	private PretService pretSerice;
	

	@PostMapping("/personnel")
	public Personnel createPersonnel(@RequestBody Personnel personnel) {
    return personnelSerice.addPersonnel(personnel);
	}
	
	@PutMapping("/personnel/{idPersonnel}")
	public Personnel updatePersonnel(@PathVariable("idPersonnel") final int idPersonnel, @RequestBody Personnel personnel) {
		Optional<Personnel> p = personnelSerice.getPersonnel(idPersonnel);
		if(p.isPresent()){
			
			Personnel currentPersonnel = p.get();
			
			String nomPersonnel = personnel.getNomPersonnel();
			if(nomPersonnel != null) {
				currentPersonnel.setNomPersonnel(nomPersonnel);
			}
			String prenomPersonnel = personnel.getPrenomPersonnel();
			if(prenomPersonnel != null) {
				currentPersonnel.setPrenomPersonnel(prenomPersonnel);
			}
			String telPersonnel = personnel.getTelPersonnel();
			if(telPersonnel != null) {
				currentPersonnel.setTelPersonnel(telPersonnel);
			}
			String emailPersonnel = personnel.getEmailPersonnel();
			if(emailPersonnel != null) {
				currentPersonnel.setEmailPersonnel(emailPersonnel);
			}
			int montantSalaire = personnel.getMontantSalaire();
			if(montantSalaire != 0) {
				currentPersonnel.setMontantSalaire(montantSalaire);
			}
			String emploi = personnel.getEmploi();
			if(emploi != null) {
				currentPersonnel.setEmploi(emploi);
			}
			String modePaiement = personnel.getModePaiement();
			if(modePaiement != null) {
				currentPersonnel.setModePaiement(modePaiement);
			}
			String categoriePersonnel = personnel.getCategoriePersonnel();
			if(categoriePersonnel != null) {
				currentPersonnel.setCategoriePersonnel(categoriePersonnel);
			}
			
			 
			personnelSerice.addPersonnel(currentPersonnel);
			return currentPersonnel;
		} else {
			return null;
		}
	}
	 @GetMapping("/personnel")
		public Iterable<Personnel> getAllPersonnels(){
			return personnelSerice.allPersonnels();
		}
	 @GetMapping("/personnel/{idPersonnel}")
		public Personnel getPersonnelById(@PathVariable("idPersonnel") final int idPersonnel) {
			Optional<Personnel> personnel = personnelSerice.getPersonnel(idPersonnel);
			 
			if(personnel.isPresent()) {
				return personnel.get();
			} else {
				return   null;
			}
	} 
	 @DeleteMapping("/personnel/{idPersonnel}")
	 public void deletePersonnelById(@PathVariable("idPersonnel") final int idPersonnel) {
		 personnelSerice.deletePersonnel(idPersonnel) ;
		 
		}
	 
	 @PostMapping("/pret")
		public Pret createPret(@RequestBody Pret pret) {
	    return pretSerice.addPret(pret);
		}
	 
	 @DeleteMapping("/pret/{idPret}")
	 public void deletePretById(@PathVariable("idPret") final int idPret) {
		 pretSerice.deletePret(idPret) ;
		 
		}
	 
	 @GetMapping("/pret/totalpret/{idPersonnel}")
		public  Double findMontantPretByPersonnel(@PathVariable("idPersonnel") final Integer idPersonnel) {
	    Personnel montantPret =personnelSerice.findPersonnelById(idPersonnel);
	    Double prets = pretSerice.findMontantPretbyPersonnel(montantPret);
				return prets;
	 }
	 
	 @GetMapping("/pret/personnel/{idPersonnel}/{mois}")
		public  List<Pret> findPretByPersonnel(@PathVariable("idPersonnel")  final Integer idPersonnel, @PathVariable("mois") String mois) {
	    Personnel personnel =personnelSerice.findPersonnelById(idPersonnel);
	    List<Pret> prets = pretSerice.findPretByPersonnel(personnel,mois);
				return prets;
	 }
	 
}

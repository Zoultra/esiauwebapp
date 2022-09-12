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

import com.esiau.backendesiauapp.models.Depense;
import com.esiau.backendesiauapp.services.DepenseService;

@RestController

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/backendesiauapp/v1/")
public class DepenseController {
    

	@Autowired
	private DepenseService depenseService;
	
	 @PostMapping("/depense")
	 public Depense createDepense(@RequestBody Depense depense) {
		return depenseService.saveDepense(depense);
		 
	 }
	 
	 @PutMapping("/depense/{idDepense}")
	 public Depense updateDepense(@PathVariable ("idDepense") final Integer idDepense, @RequestBody Depense depense ) {
		 
          Optional<Depense> d = depenseService.getDepense(idDepense);
          
          if(d.isPresent()) {
        	  
        	  Depense currentDepense = d.get();
        	  
        	  String motifDepense = depense.getMotif();
        	  if(motifDepense != null) {
        		  currentDepense.setMotif(motifDepense);
        	  }
        	  int montantDepense = depense.getMontantDepense();
        	  if(montantDepense != 0) {
        		  
        		  currentDepense.setMontantDepense(montantDepense);
        		  
        	  }
        	  
        	  depenseService.updateDepense(currentDepense);
        	    return currentDepense;
          }else {
		     return null;
          }
		 
	 }
	 
	 @GetMapping("/depense")
	 public List<Depense> allDepense() {
		return depenseService.allDepense();
		}
	 
	 @GetMapping("/depense/{idDepense}")
	 public Depense getDepense(@PathVariable ("idDepense") final Integer idDepense) {
		 Optional<Depense> depense = depenseService.getDepense(idDepense);
		 if(depense.isPresent()) {
			 return depense.get();
		 }else {
			 return null;
		 }
		
		 
	 }
	 
	 @DeleteMapping("/depense/{idDepense}")
		public void deleteDepenseById(@PathVariable("idDepense") final int idDepense) {
		 depenseService.deleteDepenseById(idDepense);
		}
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
}

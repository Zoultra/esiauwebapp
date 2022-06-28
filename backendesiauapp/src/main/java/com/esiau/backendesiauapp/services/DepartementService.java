package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Departement;


public interface DepartementService {
	
	// En un Departement
		public Departement saveDepartement(Departement departement);
		// Modifier un Departement
	    public Departement updateDepartement(Departement departement);
	   // Liste de tous les Departements
	   public	List<Departement> getAllDepartements();
	    // Supprimer un Departement
	   void  deleteDepartementById(int idDepartement);
	    // Consulter un Departement
	    Optional<Departement> getDepartement(int idDepartement);

}

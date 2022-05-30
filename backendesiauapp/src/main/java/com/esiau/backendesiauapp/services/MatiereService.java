package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Matiere;

public interface MatiereService {
	// Modifier un Matiere
		public Matiere saveMatiere(Matiere matiere);
		// Modifier un Matiere
	    public Matiere updateMatiere(Matiere matiere);
	   // Liste de tous les Matiere
	   public	List<Matiere> getAllMatieres();
	    // Supprimer une Matiere
	   void  deleteMatiereById(int idMatiere);
	    // Consulter une Matiere
	    Optional<Matiere> getMatiere(int idMatiere);
	    
	    // Chercher matiere by nom matiere
	   public Matiere findMatiereByIdentifiant(int idMatiere);
}

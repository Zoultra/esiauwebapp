package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Professeur;

public interface ProfesseurService {
        
	         // Inerstion dans la base
	  
	public Professeur saveProf (Professeur prof);
	
	// Modification dans la base
	
	public Professeur updateProf(Professeur prof);
	
	// Liste des professeurs
	
	public List<Professeur> getAlls();
	
	// Consulter un professeur
	
	Optional<Professeur> getProf(int idProf);
	
	// Supprimer un professeur
	
	void  deleteProfById(int idProf);
	
	public Professeur findProfByIdentifiant(Integer idProf);
}

package com.esiau.backendesiauapp.services;


import java.util.List;

import com.esiau.backendesiauapp.models.Professeur;
import com.esiau.backendesiauapp.models.ProfesseurMatiere;

public interface ProfesseurMatiereService {
  
	public ProfesseurMatiere saveProfMatiere (ProfesseurMatiere professeurmatiere);
	 
	List<ProfesseurMatiere> findMatiereForProf(Professeur professeur);
	 
	void  deleteProfMatiereById(int idProfMatiere);
	
	public List<ProfesseurMatiere> getAllsMatiereProf();
}

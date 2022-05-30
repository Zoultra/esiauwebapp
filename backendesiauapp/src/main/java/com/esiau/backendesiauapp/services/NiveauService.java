package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Niveau;


public interface NiveauService {
        
	// Modifier un classe
	public Niveau saveNiveau(Niveau niveau);
	// Modifier un classe
    public Niveau updateNiveau(Niveau niveau);
   // Liste de tous les classe
   public	List<Niveau> getAllNiveaus();
    // Supprimer une classe
   void  deleteNiveauById(int idNiveau);
    // Consulter un etudiant
    Optional<Niveau> getNiveau(int idNiveau);
    
 // Chercher la classe par son nom
 	public Niveau findByNom(String name);
}

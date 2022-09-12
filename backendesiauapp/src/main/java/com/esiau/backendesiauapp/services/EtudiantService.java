package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Classe;
import com.esiau.backendesiauapp.models.Etudiant;

public interface EtudiantService {
    
	// Enregistrer un etudiant
	Etudiant saveEtudiant(Etudiant etu);
	// Modifier un etudiant
	Etudiant updateEtudiant(Etudiant etu);
	// Supprimer un etudiant Methode entité
	void deleteEtudiant(Etudiant etu);
	// Supprimer un etudiant Methode par son Id
	 void deleteEtudiantById(Integer idEtudiant);
	 // Consulter un etudiant
	 Optional<Etudiant> getEtudiant(Integer idEtudiant);
	 // Liste de tous les etudiants
	List<Etudiant> getAllEtudiants();
	 
	List<Etudiant> findEtudinatParClasse(Classe idClasse);
	
	//List<Etudiant> findEtudianttParNiveau(Niveau niveau);
	// Chercher l'etudiant par son ID
	public Etudiant findEtudiantByIdentifiant(Integer idEtudiant);
}

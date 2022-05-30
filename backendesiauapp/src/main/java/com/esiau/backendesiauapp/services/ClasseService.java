package com.esiau.backendesiauapp.services;


import java.util.List;
import java.util.Optional;


import com.esiau.backendesiauapp.models.Classe;

 
public interface ClasseService {
	
	// Chercher la classe par son nom
	public Classe findByNom(String name);
	
	// Enregistrement d'une classe avec un niveau
   // <S extends Classe> S save(S arg0);
	
	//public <S extends Classe> S saveClasse(S arg0,String niveau) ;
	
	 
	// Enregistrer une classe
	public Classe saveClasse(Classe classe);
		// Modifier un classe
	public Classe updateClasse(Classe classe);
	 // Liste de tous les classe
	public	List<Classe> getAllClasses();
	// Supprimer une classe
	void  deleteClasseById(Integer idClasse);
	 // Consulter un etudiant
	 Optional<Classe> getClasse(Integer idClasse);
	  
}

package com.esiau.backendesiauapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.esiau.backendesiauapp.models.Classe;
import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Niveau;
 
@Repository
public interface EtudiantRepository extends JpaRepository <Etudiant, Integer>{
 
	@Query("select e from Etudiant e where e.classe=:x ")    
	List<Etudiant> findEtudinatParClasse(@Param("x") Classe idClasse);
	
	/*@Query("select e from Etudiant e where e.niveau=:x ")    
	List<Etudiant> findEtudianttParNiveau(@Param("x") Niveau niveau);
	*/
}

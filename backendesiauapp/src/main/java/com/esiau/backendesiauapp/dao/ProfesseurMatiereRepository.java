
package com.esiau.backendesiauapp.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.esiau.backendesiauapp.models.Professeur;
import com.esiau.backendesiauapp.models.ProfesseurMatiere;
 
public interface ProfesseurMatiereRepository extends JpaRepository <ProfesseurMatiere, Integer>{
              
	@Query("select m from ProfesseurMatiere m where m.professeur=:x")                                        
    List<ProfesseurMatiere> findMatiereForProf(@Param("x") Professeur professeur);
	//@Query("select m, p from ProfesseurMatiere m, Professeur p where m.idProf = p.idProf") 
	//List<ProfesseurMatiere> findMatiereForProf(ProfesseurMatiere professeurpatiere);
	
	
}

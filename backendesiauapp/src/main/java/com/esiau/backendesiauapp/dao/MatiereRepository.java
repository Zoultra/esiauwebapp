package com.esiau.backendesiauapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.esiau.backendesiauapp.models.Matiere;

@Repository
public interface MatiereRepository extends JpaRepository <Matiere, Integer>{
         
	@Query("select m from Matiere m where m.idMatiere=:x ")                                        
	Matiere findMatiereByIdentifiant(@Param("x") Integer idMatiere);
}

package com.esiau.backendesiauapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.esiau.backendesiauapp.models.Professeur;


public interface ProfesseurRepository extends JpaRepository <Professeur, Integer>{
      
	@Query("select p from Professeur p where p.idProf=:x ")                                        
	Professeur findProfesseurById(@Param("x") Integer idProf);
}

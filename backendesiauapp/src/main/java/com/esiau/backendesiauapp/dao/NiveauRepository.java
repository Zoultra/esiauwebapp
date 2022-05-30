package com.esiau.backendesiauapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.esiau.backendesiauapp.models.Niveau;

@Repository
public interface NiveauRepository extends JpaRepository <Niveau, Integer>{
      
	@Query("select n from Niveau n where n.nomNiveau=:x")                                        
	Niveau findByNom(@Param("x") String niveau);
}

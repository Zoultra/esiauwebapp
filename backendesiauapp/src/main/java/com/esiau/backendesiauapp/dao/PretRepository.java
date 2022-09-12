package com.esiau.backendesiauapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.esiau.backendesiauapp.models.Personnel;
import com.esiau.backendesiauapp.models.Pret;

@Repository
public interface PretRepository  extends JpaRepository<Pret, Integer>{
	@Query("select p from Pret p where p.personnel=:x and p.mois=:m")                                        
   List<Pret> findPretByPersonnel(@Param("x") Personnel personnel,@Param("m") String mois);
	
	@Query("select coalesce (sum(p.montantPret),0) from Pret p where p.personnel=:x")                                        
    public double montantPret(@Param("x") Personnel montantPret);
	 
	
}

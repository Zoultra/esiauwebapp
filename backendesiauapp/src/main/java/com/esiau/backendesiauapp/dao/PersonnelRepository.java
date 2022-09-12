package com.esiau.backendesiauapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.esiau.backendesiauapp.models.Personnel;


@Repository
public interface PersonnelRepository  extends JpaRepository<Personnel, Integer>{
     
	@Query("select p from Personnel p where p.idPersonnel=:x ")                                        
	Personnel findPersonnelById(@Param("x") Integer idPersonnel);
	
}

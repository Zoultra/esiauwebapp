package com.esiau.backendesiauapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Paiement;


public interface PaiementRepository extends JpaRepository  <Paiement, Integer> {
	
	@Query("select n from Paiement n where n.etudiant=:x")                                        
  //  List<Paiement> findNoteByEtudiant(@Param("x") Etudiant etudiant);
	//SELECT SUM(nom_colonne)
	//FROM table
	
	//@Query(value = "SELECT  SUM(montantPaiement)  FROM Paiement  WHERE etudiant=:x", nativeQuery = true)                                       
   List<Paiement> findNoteByEtudiant(@Param("x") Etudiant etudiant);
	
	//@Query(value = "SELECT  SUM(montantPaiement)  FROM Paiement  WHERE etudiant=:x", nativeQuery = true)                                       
	  // List<Paiement> findNoteByEtudiant(@Param("x") Etudiant etudiant);

}

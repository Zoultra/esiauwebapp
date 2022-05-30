package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.UE;

public interface UeService {
   
	// En un UE
	public UE saveUE(UE ue);
	// Modifier un UE
    public UE updateUE(UE ue);
   // Liste de tous les UEs
   public	List<UE> getAllUEs();
    // Supprimer une UE
   void  deleteUEById(int idUe);
    // Consulter une UE
    Optional<UE> getUE(int idUe);
}

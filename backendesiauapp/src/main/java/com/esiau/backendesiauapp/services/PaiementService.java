package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Paiement;



public interface PaiementService {
	
	    public Paiement addPaiement(Paiement paiement);
	    public  List<Paiement> allPaiements();
	    Optional<Paiement> getPaiement(int idPaiement);
	    void deletePaiement(int idPaiement);
	    public Paiement updatePaiement(Paiement paiement);
	    List<Paiement> findPaiementByEtudiant (Etudiant etudiant);

}

package com.esiau.backendesiauapp.services;

import java.util.List;

import com.esiau.backendesiauapp.models.Personnel;
import com.esiau.backendesiauapp.models.Pret;


public interface PretService {
	
	    public Pret addPret(Pret pret);
	    void deletePret(int idPret);
	    List<Pret> findPretByPersonnel (Personnel personnel, String mois);
	    public Double findMontantPretbyPersonnel(Personnel montantPret);
}

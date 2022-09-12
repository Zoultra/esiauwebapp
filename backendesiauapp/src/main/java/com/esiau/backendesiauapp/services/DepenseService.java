package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Depense;

public interface DepenseService {
        
	public Depense saveDepense(Depense depense);
	
	public Depense updateDepense(Depense depense);
	
	void deleteDepenseById(int idDepense);
	
	Optional<Depense> getDepense(int idDepense);
	
	public List<Depense> allDepense();
	
}

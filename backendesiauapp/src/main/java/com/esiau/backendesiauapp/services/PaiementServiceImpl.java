package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.PaiementRepository;
import com.esiau.backendesiauapp.models.Paiement;
@Service
public class PaiementServiceImpl implements PaiementService{
    
	@Autowired
	private PaiementRepository paiementRepository;
	
	@Override
	public Paiement addPaiement(Paiement paiement) {
		// TODO Auto-generated method stub
		return paiementRepository.save(paiement);
	}

	@Override
	public List<Paiement> allPaiements() {
		// TODO Auto-generated method stub
		return paiementRepository.findAll();
	}

	@Override
	public Optional<Paiement> getPaiement(int idPaiement) {
		// TODO Auto-generated method stub
		return paiementRepository.findById(idPaiement);
	}

	@Override
	public void deletePaiement(int idPaiement) {
		// TODO Auto-generated method stub
		paiementRepository.deleteById(idPaiement);
	}

	@Override
	public Paiement updatePaiement(Paiement paiement) {
		// TODO Auto-generated method stub
		return paiementRepository.save(paiement);
	}

	

}

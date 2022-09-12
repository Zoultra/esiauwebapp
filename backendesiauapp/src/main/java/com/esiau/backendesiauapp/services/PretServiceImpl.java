package com.esiau.backendesiauapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.PretRepository;
import com.esiau.backendesiauapp.models.Personnel;
import com.esiau.backendesiauapp.models.Pret;

@Service
public class PretServiceImpl implements PretService{

	@Autowired
	private PretRepository pretRepository;
	
	@Override
	public Pret addPret(Pret pret) {
		// TODO Auto-generated method stub
		return pretRepository.save(pret);
	}

	@Override
	public void deletePret(int idPret) {
		// TODO Auto-generated method stub
		pretRepository.deleteById(idPret);
	}

	@Override
	public Double findMontantPretbyPersonnel(Personnel montantPret) {
		// TODO Auto-generated method stub
		return pretRepository.montantPret(montantPret);
	}

	@Override
	public List<Pret> findPretByPersonnel(Personnel personnel, String mois) {
		// TODO Auto-generated method stub
		return pretRepository.findPretByPersonnel(personnel,mois);
	}

}

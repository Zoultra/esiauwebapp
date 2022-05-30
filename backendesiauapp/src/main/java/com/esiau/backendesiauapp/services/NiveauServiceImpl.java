package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.NiveauRepository;
import com.esiau.backendesiauapp.models.Niveau;

@Service
public class NiveauServiceImpl implements NiveauService{
    
	@Autowired
	private NiveauRepository niveauRepository;
	@Override
	public Niveau saveNiveau(Niveau niveau) {
		// TODO Auto-generated method stub
		return niveauRepository.save(niveau);
	}

	@Override
	public Niveau updateNiveau(Niveau niveau) {
		// TODO Auto-generated method stub
		return niveauRepository.save(niveau);
	}

	@Override
	public List<Niveau> getAllNiveaus() {
		// TODO Auto-generated method stub
		return niveauRepository.findAll();
	}

	@Override
	public void deleteNiveauById(int idNiveau) {
		// TODO Auto-generated method stub
		niveauRepository.deleteById(idNiveau);
	}

	@Override
	public Optional<Niveau> getNiveau(int idNiveau) {
		// TODO Auto-generated method stub
		return niveauRepository.findById(idNiveau);
	}

	@Override
	public Niveau findByNom(String name) {
		// TODO Auto-generated method stub
		return niveauRepository.findByNom(name);
	}
    
	 

}

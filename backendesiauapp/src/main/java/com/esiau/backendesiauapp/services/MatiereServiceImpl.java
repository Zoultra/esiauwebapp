package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.MatiereRepository;
import com.esiau.backendesiauapp.models.Matiere;

@Service
public class MatiereServiceImpl implements MatiereService{
    
	@Autowired
	private MatiereRepository matiereRepository;
	@Override
	public Matiere saveMatiere(Matiere matiere) {
		// TODO Auto-generated method stub
		return matiereRepository.save(matiere);
	}

	@Override
	public Matiere updateMatiere(Matiere matiere) {
		// TODO Auto-generated method stub
		return matiereRepository.save(matiere);
	}

	@Override
	public List<Matiere> getAllMatieres() {
		// TODO Auto-generated method stub
		return matiereRepository.findAll();
	}

	@Override
	public void deleteMatiereById(int idMatiere) {
		// TODO Auto-generated method stub
		matiereRepository.deleteById(idMatiere);
	}

	@Override
	public Optional<Matiere> getMatiere(int idMatiere) {
		// TODO Auto-generated method stub
		return matiereRepository.findById(idMatiere);
	}

	@Override
	public Matiere findMatiereByIdentifiant(int idMatiere) {
		// TODO Auto-generated method stub
		return matiereRepository.findMatiereByIdentifiant(idMatiere);
	}

	 

	 

}

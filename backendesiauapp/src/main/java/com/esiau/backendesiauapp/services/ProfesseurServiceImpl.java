package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.ProfesseurRepository;
import com.esiau.backendesiauapp.models.Professeur;

@Service
public class ProfesseurServiceImpl implements ProfesseurService{
    @Autowired
    private ProfesseurRepository professeurRepository;
	@Override
	public Professeur saveProf(Professeur prof) {
		// TODO Auto-generated method stub
		return professeurRepository.save(prof);
	}

	@Override
	public Professeur updateProf(Professeur prof) {
		// TODO Auto-generated method stub
		return professeurRepository.save(prof);
	}

	@Override
	public List<Professeur> getAlls() {
		// TODO Auto-generated method stub
		return professeurRepository.findAll();
	}

	@Override
	public Optional<Professeur> getProf(int idProf) {
		// TODO Auto-generated method stub
		return professeurRepository.findById(idProf);
	}

	@Override
	public void deleteProfById(int idProf) {
		// TODO Auto-generated method stub
		professeurRepository.deleteById(idProf);
	}

	@Override
	public Professeur findProfByIdentifiant(Integer idProf) {
		// TODO Auto-generated method stub
		return professeurRepository.findProfesseurById(idProf);
	}

}

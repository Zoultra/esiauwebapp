package com.esiau.backendesiauapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.ProfesseurMatiereRepository;
import com.esiau.backendesiauapp.models.Professeur;
import com.esiau.backendesiauapp.models.ProfesseurMatiere;

@Service
public class ProfesseurMatiereServiceImpl implements ProfesseurMatiereService {
	
    @Autowired
    private ProfesseurMatiereRepository professeurmatiererepo;
    
	@Override
	public ProfesseurMatiere saveProfMatiere(ProfesseurMatiere professeurmatiere) {
		// TODO Auto-generated method stub
		return professeurmatiererepo.save(professeurmatiere) ;
	}

	@Override
	public List<ProfesseurMatiere> findMatiereForProf(Professeur idProf) {
		// TODO Auto-generated method stub
		return professeurmatiererepo.findMatiereForProf(idProf);
	}

	@Override
	public void deleteProfMatiereById(int idProfMatiere) {
		// TODO Auto-generated method stub
		professeurmatiererepo.deleteById(idProfMatiere);
	}

	@Override
	public List<ProfesseurMatiere> getAllsMatiereProf() {
		// TODO Auto-generated method stub
		return professeurmatiererepo.findAll();
	}

}

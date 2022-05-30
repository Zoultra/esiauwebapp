package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.ClasseRepository;
import com.esiau.backendesiauapp.dao.NiveauRepository;
import com.esiau.backendesiauapp.models.Classe;

@Service
public class ClasseServiceImpl implements ClasseService {
    
	@Autowired
	private ClasseRepository classeRepository;
	@Autowired
	private NiveauRepository niveauRepository;
	
	@Override
	public Classe findByNom(String name) {
		// TODO Auto-generated method stub
		return classeRepository.findByNom(name);
	}
 

	@Override
	public Classe updateClasse(Classe classe) {
		// TODO Auto-generated method stub
		return classeRepository.save(classe);
	}

	@Override
	public List<Classe> getAllClasses() {
		// TODO Auto-generated method stub
		return classeRepository.findAll();
	}

	@Override
	public void deleteClasseById(Integer idClasse) {
		// TODO Auto-generated method stub
		classeRepository.deleteById(idClasse);
		
	}

	@Override
	public Optional<Classe> getClasse(Integer idClasse) {
		// TODO Auto-generated method stub
		return classeRepository.findById(idClasse);
	}


	@Override
	public Classe saveClasse(Classe classe) {
		// TODO Auto-generated method stub
		return classeRepository.save(classe);
	}



	/*@Override
	public <S extends Classe> S saveClasse(S arg0, String niveau) {
		// TODO Auto-generated method stub
		arg0.setNiveau(niveauRepository.findByNom(niveau));
		return classeRepository.save(arg0);
	}*/

	 
	
	
}

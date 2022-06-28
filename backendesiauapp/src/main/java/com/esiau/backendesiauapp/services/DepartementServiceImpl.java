package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.DepartementRepository;
import com.esiau.backendesiauapp.models.Departement;

@Service
public class DepartementServiceImpl implements DepartementService  {
    
	@Autowired
	private DepartementRepository departementRepository;
	
	@Override
	public Departement saveDepartement(Departement departement) {
		// TODO Auto-generated method stub
		return departementRepository.save(departement);
	}

	@Override
	public Departement updateDepartement(Departement departement) {
		// TODO Auto-generated method stub
		return departementRepository.save(departement);
	}

	@Override
	public List<Departement> getAllDepartements() {
		// TODO Auto-generated method stub
		return departementRepository.findAll();
	}

	@Override
	public void deleteDepartementById(int idDepartement) {
		// TODO Auto-generated method stub
		
		departementRepository.deleteById(idDepartement);
		
	}

	@Override
	public Optional<Departement> getDepartement(int idDepartement) {
		// TODO Auto-generated method stub
		return departementRepository.findById(idDepartement);
	}

}

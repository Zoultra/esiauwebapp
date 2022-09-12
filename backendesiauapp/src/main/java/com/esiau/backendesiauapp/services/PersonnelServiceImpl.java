package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.PersonnelRepository;
import com.esiau.backendesiauapp.models.Personnel;

@Service
public class PersonnelServiceImpl implements PersonnelService{
    @Autowired
    private PersonnelRepository personnelRepository;
    
	@Override
	public Personnel addPersonnel(Personnel personnel) {
		// TODO Auto-generated method stub
		return personnelRepository.save(personnel);
	}

	@Override
	public List<Personnel> allPersonnels() {
		// TODO Auto-generated method stub
		return personnelRepository.findAll();
	}

	@Override
	public Optional<Personnel> getPersonnel(int idPersonnel) {
		// TODO Auto-generated method stub
		return personnelRepository.findById(idPersonnel);
	}

	@Override
	public void deletePersonnel(int idPersonnel) {
		// TODO Auto-generated method stub
		personnelRepository.deleteById(idPersonnel);;
	}

	@Override
	public Personnel updatePersonnel(Personnel personnel) {
		// TODO Auto-generated method stub
		return personnelRepository.save(personnel);
	}

	@Override
	public Personnel findPersonnelById(Integer idPersonnel) {
		// TODO Auto-generated method stub
		Personnel persontrouve = personnelRepository.findPersonnelById(idPersonnel);
		return persontrouve;
	}

	 

}

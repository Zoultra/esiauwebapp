package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import com.esiau.backendesiauapp.models.Personnel;



public interface PersonnelService {
	
	 public Personnel addPersonnel(Personnel personnel);
	    public  List<Personnel> allPersonnels();
	    Optional<Personnel> getPersonnel(int idPersonnel);
	    void deletePersonnel(int idPersonnel);
	    public Personnel updatePersonnel(Personnel personnel);
	    Personnel findPersonnelById(Integer idPersonnel);
	    


}

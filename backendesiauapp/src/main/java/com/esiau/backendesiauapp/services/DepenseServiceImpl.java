package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.DepenseRepository;
import com.esiau.backendesiauapp.models.Depense;

@Service
public class DepenseServiceImpl implements DepenseService{
	
	@Autowired
	private DepenseRepository depenseRepository;

	@Override
	public Depense saveDepense(Depense depense) {
		// TODO Auto-generated method stub
		return depenseRepository.save(depense);
	}

	@Override
	public Depense updateDepense(Depense depense) {
		// TODO Auto-generated method stub
		return depenseRepository.save(depense);
	}

	@Override
	public void  deleteDepenseById(int idDepense) {
		// TODO Auto-generated method stub
		depenseRepository.deleteById(idDepense);;
	}

	@Override
	public Optional<Depense> getDepense(int idDepense) {
		// TODO Auto-generated method stub
		return depenseRepository.findById(idDepense);
	}

	@Override
	public List<Depense> allDepense() {
		// TODO Auto-generated method stub
		return depenseRepository.findAll();
	}

}

package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.UeRepository;
import com.esiau.backendesiauapp.models.UE;

@Service
public class UeServiceImpl implements UeService {
    
	@Autowired
	private UeRepository ueRepository;
	@Override
	public UE saveUE(UE ue) {
		// TODO Auto-generated method stub
		return ueRepository.save(ue);
	}

	@Override
	public UE updateUE(UE ue) {
		// TODO Auto-generated method stub
		return ueRepository.save(ue);
	}

	@Override
	public List<UE> getAllUEs() {
		// TODO Auto-generated method stub
		return ueRepository.findAll();
	}

	@Override
	public void deleteUEById(int idUe) {
		// TODO Auto-generated method stub
		ueRepository.deleteById(idUe);
	}

	@Override
	public Optional<UE> getUE(int idUe) {
		// TODO Auto-generated method stub
		return ueRepository.findById(idUe);
	}

}

package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.esiau.backendesiauapp.dao.EtudiantRepository;
import com.esiau.backendesiauapp.models.Classe;
import com.esiau.backendesiauapp.models.Etudiant;


@Service
public class EtudiantServiceImpl implements EtudiantService{

	@Autowired
	private EtudiantRepository etudiantRepository;
	@Override
	public Etudiant saveEtudiant(Etudiant etu) {
		// TODO Auto-generated method stub
		return etudiantRepository.save(etu);
	}

	@Override
	public Etudiant updateEtudiant(Etudiant etu) {
		// TODO Auto-generated method stub
		return etudiantRepository.save(etu);
	}

	@Override
	public void deleteEtudiant(Etudiant etu) {
		// TODO Auto-generated method stub
		etudiantRepository.delete(etu);
	}

	@Override
	public void deleteEtudiantById(Integer idEtudiant) {
		// TODO Auto-generated method stub
		etudiantRepository.deleteById(idEtudiant);
	}

	@Override
	public Optional<Etudiant> getEtudiant(Integer idEtudiant) {
		// TODO Auto-generated method stub
		return etudiantRepository.findById(idEtudiant);
	}

	@Override
	public List<Etudiant> getAllEtudiants() {
		// TODO Auto-generated method stub
		return etudiantRepository.findAll();
	}
	@Transactional
	@Override
	public List<Etudiant> findEtudinatParClasse(Classe idClasse) {
		// TODO Auto-generated method stub
		return etudiantRepository.findEtudinatParClasse(idClasse);
	}
   
	/*
	@Override
	public List<Etudiant> findEtudianttParNiveau(Niveau niveau) {
		// TODO Auto-generated method stub
		return etudiantRepository.findEtudianttParNiveau(niveau);
	}
	*/

	@Override
	public Etudiant findEtudiantByIdentifiant(Integer idEtudiant) {
		// TODO Auto-generated method stub
		return etudiantRepository.findEtudiantById(idEtudiant);
	}
 
	 

}

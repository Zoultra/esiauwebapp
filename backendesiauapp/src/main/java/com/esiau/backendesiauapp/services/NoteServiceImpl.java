package com.esiau.backendesiauapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esiau.backendesiauapp.dao.NoteRepository;
import com.esiau.backendesiauapp.models.Classe;
import com.esiau.backendesiauapp.models.Etudiant;
import com.esiau.backendesiauapp.models.Matiere;
import com.esiau.backendesiauapp.models.Note;

@Service
public class NoteServiceImpl implements NoteService {
    
	@Autowired
	private NoteRepository noteRepository;
	
	@Override
	public Note saveNote(Note note) {
		// TODO Auto-generated method stub
		return noteRepository.save(note);
	}

	@Override
	public List<Note> getAllNotes() {
		// TODO Auto-generated method stub
		return noteRepository.findAll();
	}

	@Override
	public Optional<Note> getNote(int idNote) {
		// TODO Auto-generated method stub
		return noteRepository.findById(idNote);
	}

	@Override
	public List<Note> findNoteByClasseEtMatiere(Classe idClasse, Matiere idMatiere) {
		// TODO Auto-generated method stub
		return noteRepository.findParClasseMatiere(idClasse, idMatiere);
	}

	@Override
	public List<Note> findNoteByEtudiant(Classe classe, Etudiant etudiant, int examen) {
		// TODO Auto-generated method stub
		return noteRepository.findNoteByEtudiant(classe,etudiant,examen);
	}

	 

}

package com.esiau.backendesiauapp.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.Data;


@Entity
@Table( name = "professeur_matiere")
@Data 
public class ProfesseurMatiere {
  
	@Id
	@GeneratedValue
	@Column(name="idProfMatiere")
	private int  idProfMatiere;
	

	@ManyToOne()
	@JoinColumn(name = "idMatiere")
	private Matiere matiere;
	
	@ManyToOne()
	@JoinColumn(name = "idProf")
	private Professeur professeur;
	
	@ManyToOne()
	@JoinColumn(name = "idClasse")
	private Classe classe;
	
	
}

package com.esiau.backendesiauapp.models;

 
import java.util.List;

 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
 
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "niveau")

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Niveau   {
     
	/**
	 * 
	 */
	 
	@Id
	@GeneratedValue
	@Column(name="idNiveau")
	private int idNiveau;
	@Column(name="nom_niveau")
	private String nomNiveau;
	
	@OneToMany(mappedBy = "niveau",fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Classe> classes ;
	
	//@OneToMany(mappedBy = "niveau",fetch = FetchType.LAZY)
	//@JsonIgnore
	//private List<Etudiant> etudiants ;
	
}

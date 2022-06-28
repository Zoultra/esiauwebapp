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

import lombok.Data;

@Entity
@Table(name = "departement")
@Data
public class Departement {
	
	@Id
	@GeneratedValue
	@Column(name="id_departement")
	private int idDepartement;
	@Column(name="nom_departement")
	private String nomDepartement;
	
	@OneToMany(mappedBy = "departement",fetch = FetchType.LAZY)
	@JsonIgnore
	private List<UE> ues ;
	
	@OneToMany(mappedBy = "departement",fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Professeur> professeurs ;

}

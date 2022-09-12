package com.esiau.backendesiauapp.models;

import java.util.List;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name = "personnel")
@Data
public class Personnel {
	
	 
	@Id
	@GeneratedValue
	@Column(name = "id_personnel")
	 private Integer idPersonnel;
	@Column(name = "nom_personnel")
	private String nomPersonnel;
	@Column(name = "prenom_personnel")
	private String prenomPersonnel;
	@Column(name = "tel_personnel")
	private String telPersonnel;
	@Column(name = "email_personnel")
	private String emailPersonnel;
	@Column(name = "montant_salaire")
	private int montantSalaire;
	@Column(name = "emploi")
	private String emploi;
	@Column(name = "mode_paiement")
	private String modePaiement;
	@Column(name = "categorie_personnel")
	private String categoriePersonnel;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "roles")
	private String roles;
	
	 @OneToMany(fetch = FetchType.LAZY, mappedBy = "personnel")
	 @JsonIgnore
	 List<Pret> prets;
}



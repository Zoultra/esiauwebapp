package com.esiau.backendesiauapp.models;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; 


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "etudiant")
 
public class Etudiant  {

	  
	
	/**
	 * 
	 */
	

	@Id
	@GeneratedValue
	@Column(name="id_etudiant")
	private Integer idEtudiant; 
	  
	@Column(name="nom_etudiant")
	private String nomEtudiant;
	
	@Column(name="prenom_etudiant")
	private String prenomEtudiant;
	
	@Column(name="date_naissance")
	private String dateNaissance;
	
	@Column(name="lieu_naissance")
	private String 	lieuNaissance;
	
	@Column(name="tel_etudiant")
	private String telEtudiant;
	
	@Column(name="prenom_pere")
	private String prenomPere;
	
	@Column(name="contact_Pere")
	private String contactPere;
	
	@Column(name="id_inscription")
	private int idInscription;
	
	@Column(name="email_etudiant")
	private String emailEtudiant;
    

    @ManyToOne
    @JoinColumn(name = "classe_id", nullable = false)
    private Classe classe; 
    
    
   // @ManyToOne
   // @JoinColumn(name = "niveau_id", nullable = false)
   // private Niveau niveau; 
    
    @OneToMany(mappedBy="etudiant", fetch = FetchType.LAZY)
    @JsonIgnore
    List<Note> notes ;
    
    @OneToMany(mappedBy="etudiant", fetch = FetchType.LAZY)
    @JsonIgnore
    List<Paiement> paiement ;
    
	 
	 
	 
	
}

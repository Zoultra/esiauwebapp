package com.esiau.backendesiauapp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;


@Entity
@Table(name = "paiement")
@Data
public class Paiement {
	
	@Id
	@GeneratedValue
	@Column(name = "id_paiement")
	private int idPaiement;
    
	@Column(name = "montant_paiement")
	private String montantPaiement;
	
	@Column(name = "date_paiement")
	private String datePaiement;
	
	@ManyToOne
	@JoinColumn(name = "idEtudiant", nullable = false)
	private Etudiant etudiant; 
	

}

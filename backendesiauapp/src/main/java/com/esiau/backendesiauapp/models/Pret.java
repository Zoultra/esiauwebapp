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
@Table(name = "pret")
@Data
public class Pret {

	@Id
	@GeneratedValue
	@Column(name = "id_pret")
	private int idPret;
	@Column(name = "montant_pret")
	private int montantPret;
	@Column(name = "date_pret")
	private String datePret;
	@Column(name = "mois")
	private String mois;
	@Column(name = "annee")
	private String annee;
	
	@ManyToOne
    @JoinColumn(name = "id_personnel", nullable = false)
    private Personnel personnel;
	
}

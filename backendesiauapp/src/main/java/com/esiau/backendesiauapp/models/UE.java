package com.esiau.backendesiauapp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "ue")
@Data
public class UE {
	
	@Id
	@GeneratedValue
	@Column(name = "id_ue")
	private int idUe;
    
	@Column(name = "nom_ue")
	private String nomUe;
}

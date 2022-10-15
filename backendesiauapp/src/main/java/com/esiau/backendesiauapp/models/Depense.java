package com.esiau.backendesiauapp.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.Data;


@Entity
@Table(name = "depense")
@Data
public class Depense {
   
	@Id
	@GeneratedValue
	@Column(name = "id_depense")
	private int idDepense;
    
	@Column(name = "motif")
	private String motif;
	
	@Column(name = "motant_depense")
	private int montantDepense;
	
	@Column(name = "date_depense")
	private String dateDepense;
	
	
}

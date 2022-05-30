package com.esiau.backendesiauapp.models;

import java.io.Serializable; 

import javax.persistence.Column;
import javax.persistence.Entity; 
import javax.persistence.GeneratedValue;
import javax.persistence.Id; 
import javax.persistence.Table;

 

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="inscription")

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Inscription implements Serializable{
     
	/**
	 * 
	 */
	private static final long serialVersionUID = 875255944026053069L;

	@Id
	@GeneratedValue
	private Integer idInscription;
	
	@Column(name="date_inscription")
	private String dateInscription;
	
	@Column(name="frais_inscription")
	private Double frais;
	 
	 
	 
	
}

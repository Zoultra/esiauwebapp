package com.esiau.backendesiauapp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "professeur")
@Data
public class Professeur {
	
	@Id
	@GeneratedValue
	@Column(name = "id_prof")
	private Integer idProf;
	@Column(name = "nom_prof")
	private String nomProf;
	@Column(name = "prenom_prof")
	private String prenomProf;
    @Column(name = "specialite")
    private String specialite;
    @Column(name = "diplome")
    private String diplome;
    @Column(name = "tel_prof")
    private String telProf;
    @Column(name = "email_prof")
    private String emailProf;
    
}

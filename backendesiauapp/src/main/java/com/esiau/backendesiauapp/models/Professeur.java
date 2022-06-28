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
    @Column(name = "categorie")
    private String categorie;
    @Column(name = "tel_prof")
    private String telProf;
    @Column(name = "email_prof")
    private String emailProf;
    
    @ManyToOne
    @JoinColumn(name = "departement_id", nullable = false)
    private Departement departement; 
    
    @OneToMany(mappedBy = "professeur",fetch = FetchType.LAZY)
	@JsonIgnore
	private List<ProfesseurMatiere> professeurmatiere ;
    
}

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

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name = "matiere")
@Data
public class Matiere {
	
	@Id
	@GeneratedValue
	@Column(name = "id_matiere")
	  private int idMatiere;
	
	@Column(name = "nom_matiere")  
	private String nomMatiere;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_ue", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private UE ue; 
	
	 @OneToMany(fetch = FetchType.LAZY, mappedBy = "matiere")
	 List<Note> notes ;
}

package com.esiau.backendesiauapp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.Data;

@Entity
@Table(name = "user")
@Data
public class User {
	

	@Id
	@GeneratedValue
	@Column(name = "user_id")
	private int userId;
	
	@Column(name = "nom_user")
	private String nomUser;
	
	@Column(name = "prenom_user")
	private String prenomUser;
	
	@Column(name = "email_user")
	private String emailUser;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "roles")
	private String roles;

}

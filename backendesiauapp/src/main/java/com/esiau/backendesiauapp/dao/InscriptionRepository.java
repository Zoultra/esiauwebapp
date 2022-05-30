package com.esiau.backendesiauapp.dao; 

import org.springframework.data.jpa.repository.JpaRepository; 
import com.esiau.backendesiauapp.models.Inscription;
 
public interface InscriptionRepository extends JpaRepository <Inscription, Integer> {

	 
}

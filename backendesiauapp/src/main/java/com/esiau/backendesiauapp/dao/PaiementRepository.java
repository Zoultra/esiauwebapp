package com.esiau.backendesiauapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.esiau.backendesiauapp.models.Paiement;


public interface PaiementRepository extends JpaRepository  <Paiement, Integer> {

}

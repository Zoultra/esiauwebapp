package com.esiau.backendesiauapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esiau.backendesiauapp.models.Depense;

@Repository
public interface DepenseRepository  extends JpaRepository<Depense, Integer> {

}

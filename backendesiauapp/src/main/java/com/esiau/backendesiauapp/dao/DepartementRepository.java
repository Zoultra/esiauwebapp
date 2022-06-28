package com.esiau.backendesiauapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.esiau.backendesiauapp.models.Departement;

@Repository
public interface DepartementRepository extends JpaRepository<Departement, Integer> {

}

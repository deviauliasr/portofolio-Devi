package com.springboot.repository;

import org.springframework.data.repository.CrudRepository;

import com.springboot.model.Mahasiswa;

public interface MahasiswaRepository extends CrudRepository<Mahasiswa, Integer>{
	
}

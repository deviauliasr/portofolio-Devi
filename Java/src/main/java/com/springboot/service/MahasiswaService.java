package com.springboot.service;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.Mahasiswa;
import com.springboot.repository.MahasiswaRepository;



@Service
public class MahasiswaService {
	@Autowired
	private MahasiswaRepository mhsRepository;
	public List<Mahasiswa> getAllMahasiswa(){
		List<Mahasiswa> mhsList= new ArrayList<>();
		mhsRepository.findAll().forEach(mhsList::add);
		return mhsList;
	}
	
	public Mahasiswa getMahasiswa(int id) {
		return mhsRepository.findById(id).get();
	}
	
	public void insert(Mahasiswa mhs) {
		mhsRepository.save(mhs);
	}
	
	public void deleteById(int id) {
		mhsRepository.deleteById(id);
	}
	
	public void update(Mahasiswa mhs, int id) {
		Mahasiswa mhsById = mhsRepository.findById(id).get();
		mhsById.setNim(mhs.getNim());
		mhsById.setNama(mhs.getNama());
		mhsById.setAlamat(mhs.getAlamat());
		mhsRepository.save(mhsById);
	}
}

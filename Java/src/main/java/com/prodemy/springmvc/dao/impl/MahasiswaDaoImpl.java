/**
 * 
 */
package com.prodemy.springmvc.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.prodemy.springmvc.dao.MahasiswaDao;
import com.prodemy.springmvc.model.Mahasiswa;

/**
 * @author wyant
 *
 */
@Repository
public class MahasiswaDaoImpl implements MahasiswaDao {
	private static final Logger logger = LoggerFactory.getLogger(MahasiswaDaoImpl.class);

	private SessionFactory sessionFactory;
	
	@Autowired
	public void setSessionFactory(SessionFactory sf){
		this.sessionFactory = sf;
	}

	@Override
	public Mahasiswa findById(String id) throws Exception {
		Session session = this.sessionFactory.getCurrentSession();
		Mahasiswa mhs = (Mahasiswa) session.get(Mahasiswa.class, id);
		return mhs;
	}

	@Override
	public void deleteById(String id) throws Exception {
		Session session = this.sessionFactory.getCurrentSession();
		Mahasiswa mhs = (Mahasiswa) session.load(Mahasiswa.class, id);
		session.delete(mhs);
	}

	@Override
	public void insert(Mahasiswa mhs) throws Exception {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(mhs);
		logger.debug("Mahasiswa saved -> {0}", mhs);
	}

	@Override
	public void update(Mahasiswa mhs) throws Exception {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(mhs);
		logger.debug("Mahasiswa updated -> {0}", mhs);
	}

	@Override
	public List<Mahasiswa> findAll() throws Exception {
		Session session = this.sessionFactory.getCurrentSession();
		List<Mahasiswa> result = session.createQuery("from Mahasiswa").list();
		return result;
	}
}

/**
 * 
 */
package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author wyant
 *
 */
@Data
@NoArgsConstructor
@Entity
@Table(name = "bio")
public class Mahasiswa {
	@Id
	//@GeneratedValue(generator="system-uuid")
	//@GenericGenerator(name="system-uuid", strategy = "uuid")
	@Column(name = "mhs_id")
	private String id;

	@Column(name = "mhs_nim")
	private String nim;

	@Column(name = "mhs_nama")
	private String nama;

	@Column(name = "mhs_alamat")
	private String alamat;
	
}

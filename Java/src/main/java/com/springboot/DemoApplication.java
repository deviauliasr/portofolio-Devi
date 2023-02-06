package com.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.springboot.model.*;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@RequestMapping("/")
	public String hello() {
		return "Hello spring boot";
	}
	
//	@RequestMapping("/getmhs")
//	public Mahasiswa getMahasiswa() {
//		Mahasiswa objMhs = new Mahasiswa();
//		objMhs.setId(1);
//		objMhs.setNama("John");
//		objMhs.setAlamat("Bandung");
//		objMhs.setDob("2022-12-02");
//		objMhs.setNim("12345");
//		return objMhs;
//	}

}

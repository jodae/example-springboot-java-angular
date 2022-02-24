package com.jodae.example;

import java.util.Collections;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SomeController {

	@GetMapping(value = "/message")
	public Map<String, String> getMessage() {
		return Collections.singletonMap("message", "Hello world from Spring Boot !");
	}

}

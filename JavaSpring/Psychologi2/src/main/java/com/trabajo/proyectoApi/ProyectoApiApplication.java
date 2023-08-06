package com.trabajo.proyectoApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


	@SpringBootApplication
	@EnableWebMvc
	public class ProyectoApiApplication {
 //
		public static void main(String[] args) {
			SpringApplication.run(ProyectoApiApplication.class, args);
		}

		@Bean
		public WebMvcConfigurer corsConfigurer() {
			return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/greeting-javaconfig")
							.allowedOrigins("http:\\localhost:3000", "https://editor.swagger.io")
							.allowedMethods("GET", "POST", "PUT", "DELETE")
							.allowedHeaders("*");
				}
			};
		}
	}
    //http://localhost:8080/swagger-ui/index.html
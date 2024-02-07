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
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**")
							.allowedOrigins("http://localhost:3000","http://localhost:8080/swagger-ui/index.html")
							.allowedMethods("GET", "POST", "PUT", "DELETE")
							.allowCredentials(true);
				}
			};
		}
	}
    //http://localhost:8080/swagger-ui/index.html

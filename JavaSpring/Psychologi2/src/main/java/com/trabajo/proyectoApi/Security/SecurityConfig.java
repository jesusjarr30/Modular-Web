package com.trabajo.proyectoApi.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
public class SecurityConfig {
    //configuration one
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeRequests()
                .antMatchers("/hola","/GetCustomerid","/verificatedGame","/verificateGame2", "/find/{correo}/{pass}","/BuscarPorNombres/{id}/{name}", "/deletCustomer/{id}", "GetCustomerId/{id}"
                ).permitAll() // Permitir acceso sin autorización a /v1/index
                .anyRequest().authenticated() // Requiere autenticación para cualquier otra solicitud
                .and()
                .formLogin()
                //.successHandler()
                .permitAll() // Permitir acceso a la página de inicio de sesión sin autenticación
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                .sessionFixation()
                .migrateSession()
                .invalidSessionUrl("/login")
                .and()
                .httpBasic()
                .and()
                .csrf().disable()
                .build();
    }

    /*@Bean
    public UserDetailsService userDetailsService() {
        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
        manager.createUser(User.withDefaultPasswordEncoder().username("user").password("password").roles("USER").build());
        return manager;
    }*/

}
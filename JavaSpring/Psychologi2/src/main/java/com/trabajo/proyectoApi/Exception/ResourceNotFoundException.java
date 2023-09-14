package com.trabajo.proyectoApi.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
@ResponseStatus(Htt)
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException() {
        super("Correo duplicado");
    }
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

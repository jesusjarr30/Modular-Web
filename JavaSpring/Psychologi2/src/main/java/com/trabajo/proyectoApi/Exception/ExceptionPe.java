package com.trabajo.proyectoApi.Exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Correo duplicado")
public class ExceptionPe extends RuntimeException {
    public ExceptionPe() {
        super("Correo duplicado");
    }

    public ExceptionPe(String message) {
        super(message);
    }
}

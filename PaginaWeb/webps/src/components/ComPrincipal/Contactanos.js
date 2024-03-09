import { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import contactImg from "../Imagenes/contact-img.svg";
import AlertaDefinidas from "../Alertas/AlertaDefinidas";
import axios from "axios";
import { addNotes } from "../api/Note";

export const Contactanos = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setButtonText('Sending ...')
    console.log(
      "Los datos son " +
        formDetails.firstName +
        "," +
        formDetails.lastName +
        "," +
        formDetails.email +
        "," +
        formDetails.phone +
        "," +
        formDetails.message
    );
    if (
      !formDetails.firstName &&
      !formDetails.lastName &&
      !formDetails.email &&
      !formDetails.phone &&
      !formDetails.message
    ) {
      //validar que los resultados no esten vacios
      //if(!/^\d+$/.test(formInitialDetails.phone)){
      //  Alertas.ContactoErrorTelefono();
      // return;
      //error de numeros
      AlertaDefinidas.ContactoFaltaDatos();
    } else {
      //aqui ya poner el httpRequest

      try {
        const Notes = {
          id: "",
          nameUser: formDetails.firstName,
          lastNameUser: formDetails.lastName,
          email: formDetails.email,
          telephone: formDetails.phone,
          message: formDetails.message,
        };

        const username = "jesus";
        const password = "jesus";
        const url = "http://localhost:8080/AddNote";

        const credenciales = window.btoa(`${username}:${password}`);
        const headers = new Headers();
        headers.append("Authorization", "Basic " + credenciales);
        headers.append("Content-Type", "application/json");

        const opciones = {
          method: "POST",
          headers: headers,
          body: JSON.stringify(Notes),
        };
        const response = await addNotes(Notes);

        // Configura el objeto de encabezados con la autenticación básica

        // Realiza la solicitud al backend con las credenciales de autenticación
        //const response = axios.post('http://localhost:8080/AddNote', Notes, { headers })

        if (response.status === 200) {
          AlertaDefinidas.ContactoExito();
          setFormDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        }
        // Aquí puedes realizar cualquier acción adicional después de registrar al psicólogo.
      } catch (error) {
        console.error("Error al registrar al psicólogo:", error);
        // Aquí puedes manejar el error o mostrar un mensaje al usuario en caso de fallo.
        if (error.code === "ECONNABORTED") {
          AlertaDefinidas.ContactoErrorDesarollo();
        } else {
          AlertaDefinidas.ContactoServidor();
        }
      }
    }
  };

  return (
    <section
      className="contact w-full flex"
      id="connect"
      style={{
        minHeight: "100vh", // Establece la altura mínima para ocupar toda la ventana
        background:
          "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)", // Fondo degradado
        overflow: "auto",
      }}
    >
      <Container className="w-full">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2 className="text-white">Contactanos</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={8}>
                  <input
                    type="text"
                    value={formDetails.firstName.substring(0, 40)}
                    placeholder="Nombre"
                    onChange={(e) =>
                      onFormUpdate("firstName", e.target.value.substring(0, 40))
                    }
                  />
                </Col>
                <Col md={8}>
                  <input
                    type="text"
                    value={formDetails.lastName.substring(0, 40)}
                    placeholder="Apellidos"
                    onChange={(e) =>
                      onFormUpdate("lastName", e.target.value.substring(0, 40))
                    }
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    value={formDetails.email.substring(0, 40)}
                    placeholder="Correo"
                    onChange={(e) =>
                      onFormUpdate("email", e.target.value.substring(0, 40))
                    }
                  />
                </Col>
                <Col md={8}>
                  <input
                    value={formDetails.phone.substring(0, 12)}
                    placeholder="telefono"
                    onChange={(e) =>
                      onFormUpdate("phone", e.target.value.substring(0, 12))
                    }
                  />
                </Col>
                <Col md={8}>
                  <textarea
                    row="6"
                    value={formDetails.message.substring(0, 150)}
                    placeholder="Comentarios"
                    onChange={(e) =>
                      onFormUpdate("message", e.target.value.substring(0, 150))
                    }
                  />
                  <button type="submit" className="font-bol">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contactanos;

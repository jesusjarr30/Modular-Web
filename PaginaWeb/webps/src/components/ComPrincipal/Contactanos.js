import {useState } from "react";
import { Row,Container,Col } from "react-bootstrap";
import contactImg from "../Imagenes/contact-img.svg"; 

export const Contactanos = () => { 
    const formInitialDetails = {
        firstname:'',
        LastName:'',
        email:'',
        phone:'',
        message:'',
    }

    const[formDetails,setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('send');
    const [status,setStatus] = useState({});
    const onFormUpdate =(category,value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })

    }
        

    const handleSubmit = async (e) => {

        e.preventDefault();
        setButtonText('Sending ...')
        let response = await fetch("htttp://localhost:3000/contact",{
            method: "POST",
            headers: {
                "content-Type":"Application/json;charset=uft-8",
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Send");
        let result = response.JSON();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({
                success: true, message: 'Message sent succeddfuly'
            });
        }else{
            setStatus({success: true, message: 'Somthing went wrong, please  try again later'})
        }
    };

    return(
        <section
        className="contact w-full flex"
        id="connect"
        style={{
          minHeight: "100vh", // Establece la altura mínima para ocupar toda la ventana
          background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)", // Fondo degradado
          overflow: "auto",
        }}
      >
            <Container className="w-full">

                <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                    <h2 className="text-white">Contactanos</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={8}>
                            <input type="text" value={formDetails.firstname} placeholder="Nombre" onChange={(e) => onFormUpdate
                            ('firstName', e.target.value)}/>
                            </Col>
                            <Col md={8}>
                            <input type="text" value={formDetails.LastName} placeholder="Apellidos" onChange={(e) => onFormUpdate
                            ('lastName', e.target.value)}/>
                            </Col>
                            <Col md={6}>
                            <input type="email" value={formDetails.email} placeholder="Correo" onChange={(e) => onFormUpdate
                            ('email', e.target.value)}/>
                            </Col>
                            <Col md={8}>
                            <input type="tel" value={formDetails.phone} placeholder="telefono" onChange={(e) => onFormUpdate
                            ('phone', e.target.value)}/>
                            </Col>
                            <Col md={8}>
                            <textarea row="6" value={formDetails.message} placeholder="Enviar" onChange={(e) => onFormUpdate
                            ('message', e.target.value)}/>
                            <button type="submit" className="font-bol"><span>{buttonText}</span></button>
                            </Col >
                            {
                                status.message &&
                                <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>

                    </form>
                </Col>
                </Row>
            </Container>

        </section>
    )
}
export default Contactanos;
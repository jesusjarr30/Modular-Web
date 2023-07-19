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
        <section className="contact" id="connect">
            <Container>

                <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                    <h2>Get in touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                            <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate
                            ('firstName', e.target.value)}/>
                            </Col>
                            <Col md={6}>
                            <input type="text" value={formDetails.LastName} placeholder="last name Name" onChange={(e) => onFormUpdate
                            ('lastName', e.target.value)}/>
                            </Col>
                            <Col md={6}>
                            <input type="email" value={formDetails.email} placeholder="Email adsress" onChange={(e) => onFormUpdate
                            ('email', e.target.value)}/>
                            </Col>
                            <Col md={6}>
                            <input type="tel" value={formDetails.phone} placeholder="phone N°" onChange={(e) => onFormUpdate
                            ('phone', e.target.value)}/>
                            </Col>
                            <Col md={6}>
                            <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate
                            ('message', e.target.value)}/>
                            <button type="submit"><span>{buttonText}</span></button>
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
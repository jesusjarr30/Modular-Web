import { useState,useEffect } from "react";
import { Container,Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Portada from "../Imagenes/Poratada2.png";


export const Home = () => {  

    const[loopNum,setLoopNum]=useState(0);
    const[isDeleting,setIsDeleting]= useState(false);
    const toRotate = ["Test Psicológico ","Pruebas de WAIS", "Automatización de pruebas"];
    const [text,setText]=useState('');
    const period = 2000;
    const [delta,setDelta] = useState(300-Math.random() * 100);
    
    useEffect( () =>{
        let ticker =setInterval(()=>{
            tick();
        },delta)
        return () => {
            clearInterval(ticker)
        }
    },[text])
    const tick = () =>{
        let i= loopNum %toRotate.length;
        let fullText =toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
    return (
       
        <section className="banner" id="home">
                 
        <Container>
            <Row className="aling-items-center">
                <Col xs={12} md={6} xl={7}>

                    <span className="tagling">Bienvenidos a los test Psicologicos</span>
                    <h1>{''}<span className="wrap">{text}</span></h1>
                    <p>La mejor manera de inetractuar con los pacientes </p>
                    <button onClick={()=> console.log('conect')}>No estás registrado? Ingresa aquí<ArrowRightCircle size={25}/></button>
                    
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={Portada} alt="Headder img"/>

                </Col>
            </Row>

        </Container>

    </section>
    )
  }

import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import loginImg from "../../assets/img/loginImg.svg";
import ImgHeader from "../../assets/img/header-ico.svg";
import './Login.css';

function Login(){
  
  const redirect = () => {
    window.document.location.href ="/";
  }
return(
  <Container style={{maxWidth: "100%"}}>
  <Row style={{height:"93vh"}}>
    <Col lg={6} style={{background:"#66BEEF"}}>
        <h1 className="styleTitle">¡Ingresa ya!</h1>
        <p className="styleSubtitle">Te brindamos el servicios para mejorar tu organizacion en cada  una de tus compras, es importante para nosotros hacer tu vida mucho mas sencillas</p>
        <img className="styleImagen" src={loginImg}/>
        </Col>
    <Col lg={6}> 
      <img className="styleImagen2" src={ImgHeader}/>
      <p className="styleText3">Ingrese los siguientes datos</p>
      <p className="styleData1">Correo electronico</p>
      <InputGroup className="styleInput">
      <FormControl
        className="styleinput"
        placeholder="Ingrese su correo"
        aria-label="Ingrese su correo"
        aria-describedby="basic-addon1"
      />
      </InputGroup>
    <p className="styleData2">Contraseña</p>
      <InputGroup className="styleInput2">
      <FormControl
        className="styleinput2"
        placeholder="Ingrese su contraseña"
        aria-label="Ingrese su contraseña"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <b className="styleText2">¿Olvidaste tu contraseña?</b>
    <Button variant="INICIAR SESIÓN" className="styleButtomLoging" onClick={() => redirect()}>INICIAR SESIÓN</Button>{' '}

    </Col>
    </Row>
    </Container>
);

}

export default Login;
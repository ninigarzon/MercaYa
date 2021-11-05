import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import loginImg from "../../assets/img/loginImg.svg";
import ImgHeader from "../../assets/img/header-ico.svg";
import './Register.css';

function Register(){

return(
  <Container style={{maxWidth: "100%"}}>
  <Row style={{height:"93vh"}}>
    <Col lg={6} style={{background:"#66BEEF"}}>
        <h1 className="styleTitle">¡Registrate ya!</h1>
        <p className="styleSubtitle">Te brindamos el servicios para mejorar tu organizacion en cada  una de tus compras, es importante para nosotros hacer tu vida mucho mas sencillas</p>
        <img className="styleImagen" src={loginImg}/>
        </Col>
    <Col lg={6}> 
      <img className="styleImagen2" src={ImgHeader}/>
      <p className="styleData1">Nombre completo</p>
      <InputGroup className="styleReInput">
      <FormControl
        className="styleReinput"
        placeholder="Ingrese su su nombre completo"
        aria-label="Ingrese su ingrese su nombre completo"
        aria-describedby="basic-addon1"
      />
      </InputGroup>
    <p className="styleData2">Edad</p>
      <InputGroup className="styleReInput2">
      <FormControl
        className="styleReinput2"
        placeholder="Ingrese su edad"
        aria-label="Ingrese su edad"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <p className="styleData3">¿Con que frecuencia hace mercado?</p>
      <InputGroup className="styleReInput3">
      <FormControl
        className="styleReinput3"
        placeholder="Ingrese la frecuencia"
        aria-label="Ingrese la frecuencia"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <p className="styleData4">Correo electronico</p>
      <InputGroup className="styleReInput4">
      <FormControl
        className="styleReinput4"
        placeholder="Ingrese su correo"
        aria-label="Ingrese su correo"
        aria-describedby="basic-addon1"
      />
      </InputGroup>
    <p className="styleData5">Contraseña</p>
      <InputGroup className="styleReInput5">
      <FormControl
        className="styleReinput5"
        placeholder="Ingrese su contraseña"
        aria-label="Ingrese su contraseña"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <p></p>
    <b className="styleText2">Si tienes una cuenta inicia sesion <a href="/Login">aqui</a></b>
    <Button variant="INICIAR SESIÓN" className="styleButtomLoging">INICIAR SESIÓN</Button>{' '}

    </Col>
    </Row>
    </Container>
);

}

export default Register;
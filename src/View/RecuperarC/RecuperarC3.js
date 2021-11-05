import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import recuperarCimg from "../../assets/img/recuperarCimg.svg";
import ImgHeader from "../../assets/img/header-ico.svg";
import './RecuperarC2.css';

function RecuperarC3(){

return(
  <Container style={{maxWidth: "100%"}}>
  <Row style={{height:"93vh"}}>
    <Col lg={6} style={{background:"#66BEEF"}}>
        <h1 className="styleTitle">¡Recupera tu contraseña!</h1>
        <p className="styleSubtitle">Para brindarte un mejor servicio, necesitamos que ontinues los siguientes pasos, para poder cambiar tu contraseña</p>
        <img className="styleImagen" src={recuperarCimg}/>
        </Col>
    <Col lg={6}> 
      <img className="styleImagen2" src={ImgHeader}/>
      <p className="styleText3">Ingrese la nueva contraseña que deseas establecer</p>
      <p className="styleData1">Contraseña nueva</p>
      <InputGroup className="styleInput">
      <FormControl
        className="styleinput"
        placeholder="Ingrese su contraseña nueva"
        aria-label="Ingrese su contraseña nueva"
        aria-describedby="basic-addon1"
      />
      </InputGroup>
    <p className="styleData2">Verificar contraseña</p>
      <InputGroup className="styleInput2">
      <FormControl
        className="styleinput2"
        placeholder="Ingrese de nuevo la contraseña nueva"
        aria-label="Ingrese de nuevo la contraseña nueva"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
    <Button variant="GUARDAR" className="styleButtomLoging">GUARDAR</Button>{' '}

    </Col>
    </Row>
    </Container>
);

}

export default RecuperarC3;
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import recuperarCimg from "../../assets/img/recuperarCimg.svg";
import ImgHeader from "../../assets/img/header-ico.svg";
import './RecuperarC1.css';

function RecuperarC1(){
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
            <p className="styleText">Para recuperar tu contraseña ingresa el correo electronico con el que te registraste</p>
            <p className="styleData">Correo electronico</p>
            <InputGroup className="styleRInput">
            <FormControl
                className="stylerinput"
                placeholder="Ingrese su correo"
                aria-label="Ingrese su correo"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
        <Button variant="ENVIAR" className="styleButtomRecuperar">ENVIAR</Button>{' '}
          </Col>
          </Row>
          </Container>
      );
      
    }

export default RecuperarC1;
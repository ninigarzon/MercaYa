import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import recuperarCimg from "../../assets/img/recuperarCimg.svg";
import ImgHeader from "../../assets/img/header-ico.svg";
import './RecuperarC1.css';

function RecuperarC2(){
    return(
        <Container style={{maxWidth: "100%"}}>
        <Row style={{height:"93vh"}}>
          <Col lg={6} style={{background:"#66BEEF"}}>
              <h1 className="styleTitle">¡Recupera tu contraseña!</h1>
              <p className="styleSubtitle">Para brindarte un mejor servicio, necesitamos que ontinues los siguientes pasos, para poder cambiar tu contraseña</p>
              <img className="styleImagen" alt="Recuperar imagen" src={recuperarCimg}/>
              </Col>
            <Col lg={6}> 
            <img className="styleImagen2" alt="Imagen encabezado" src={ImgHeader}/>
            <p className="styleText">Ingresa el codigo de verificacion que enviamos a tu correo electronico para cambiar la contraseña</p>
            <p className="styleData">Codigo de verificacion</p>
            <InputGroup className="styleRInput">
            <FormControl
                className="stylerinput"
                placeholder="Ingrese el codigo"
                aria-label="Ingrese el codigo"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
        <Button variant="VERIFICAR" className="styleButtomRecuperar">VERIFICAR</Button>{' '}
          </Col>
          </Row>
          </Container>
      );
      
    }

export default RecuperarC2;
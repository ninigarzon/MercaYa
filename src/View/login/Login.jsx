import React from 'react';
import { useHistory } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import loginImg from "../../assets/img/loginImg.svg";
import logo from "../../assets/img/logo.svg";

function Login() {
  const history = useHistory();

  return (
    <Container className="full-width">
      <Row>
        <Col className="background-red col-height">
          <h1 className="main__title">¡Ingresa ya!</h1>
          <p className="main__description">Te brindamos el servicio para mejorar tu organización en cada  una de tus compras, es importante para nosotros hacer tu vida mucho mas sencilla.</p>
          <img src={loginImg} alt="Imagen ingreso" />
        </Col>
        <Col className="col-height">
          <img className="main__image" src={logo} alt="MBShop Logo" />
          <p className="main__text">Ingrese los siguientes datos</p>

          <div className="flex-inputs">
            <label className="label-input">Código estudiantil:</label>
            <input
              className="input"
              type="text"
              placeholder="Ingrese su código"
            />
          </div>
          <div className="flex-inputs last-input-margin">
            <label className="label-input">Contraseña:</label>
            <input
              className="input"
              type="text"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div>
            <a href="/recover-password" className="login__recover-password-link">¿Olvidaste tu contraseña?</a>
          </div>

          <Button variant="INICIAR SESIÓN" className="button-red" onClick={() => history.push('/')}>INICIAR SESIÓN</Button>

          <p className="login__without-account">Si no tienes una cuenta <a href='/register'>registrate aquí</a>.</p>
        </Col>
      </Row>
    </Container>
  );

}

export default Login;
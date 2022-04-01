import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";

function CreateProduct() {
  const history = useHistory();

  return (
    <div className="pt-5 ml-5" style={{ height: "91vh" }}>
      <Container className="margin-top-for-all">
        <Row>
          <Col lg={12}>
            <h1 className="titleHomeIn">Ingresa los datos</h1>
          </Col>
        </Row>
        <div className="container-inputs">
          <div className="first flex-inputs">
            <label className="label-input">Nombre de la marca</label>
            <input
              className="input"
              type="text"
              placeholder="Ingrese nombre del producto"
            />
          </div>
          <div className="second flex-inputs">
            <label className="label-input">Precio</label>
            <input
              className="input"
              type="text"
              placeholder="Ingrese la marca del producto"
            />
          </div>
          <div className="third flex-inputs">
            <label className="label-input">Cantidad</label>
            <input
              className="input"
              type="text"
              placeholder="Ingrese la cantidad actual"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{ fontWeight: "bold", fontSize: "20px", textAlign: "left" }}
          >
            Descripción
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              style={{ width: "85%", borderRadius: "1rem", backgroundColor: "#FF929E", borderColor: "#DE0B0B", padding:"1rem" }}
            ></textarea>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  borderColor: "#E01A79",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  color: "#E01A79",
                  borderRadius: "1rem",
                  height: " 3rem",
                }}
              >
                Subir foto
              </button>
              <button
                style={{
                  borderColor: "#E01A79",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  color: "#E01A79",
                  borderRadius: "1rem",
                  height: " 3rem",
                }}
              >
                Eliminar foto
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
          margin: "auto",
        }}
      >
        <button
          className="button-red btn-finish"
          onClick={() => history.goBack()}
        >
          ATRÁS
        </button>
        <button className="button-green btn-finish" style={{}}>GUARDAR</button>
      </div>
    </div>
  );
}

export default CreateProduct;

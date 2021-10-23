import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import ImgLista  from "../assets/img/home-ico-lista.svg";
import ImgProduct from "../assets/img/home-ico-producto.svg";
import ImgMarca from "../assets/img/home-ico-marcas.svg";

function HomeIn ()
{
    const informationCards = [
        {
            img: ImgLista,
            title: 'Lista de compras',
            text: 'Te redirigiremos la visual donde esta la lista de compras',
            url: '/'
        },
        {
            img: ImgProduct,
            title: 'Productos',
            text: 'Te redirigiremos la visual donde esta la lista de productos que registraste',
            url: '/'
        },
        {
            img: ImgMarca,
            title: 'Marcas',
            text: 'Te redirigiremos la visual donde esta la lista de marcas que registraste',
            url: '/'
        }
    ];

    return(
        <div style={{background:"#DDF1FC"}} >
            <div className="ml-5 pt-5" style={{height:"91vh"}}>
                
                <Container>
                    <Row>
                    <Col lg={12}>
                        <h1 className="titleHomeIn ">Bienvenido, Nini</h1>
                        <p className="subtitleHomeIn ">MercaYa, tiene diferentes opciones, las cuales son: </p>
                    </Col>
                    {informationCards.map((event) => {
                        return (
                            <Col lg={4} className="d-flex mt-4">
                                <Card style={{ width: '18rem', borderRadius:"20px"}}>
                                <Card.Header className="borderRadiusCardHeader">
                                    <Card.Img variant="top" className="mt-3 mb-3 styleImgCardHomeIn" src={event.img}/>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="styleTitleCard">{event.title}</Card.Title>
                                    <Card.Text className="styleSubTitleCard">{event.text}</Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href={event.url} style={{textAlign:'initial'}}>Comienza aqui</Card.Link>
                                </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HomeIn;
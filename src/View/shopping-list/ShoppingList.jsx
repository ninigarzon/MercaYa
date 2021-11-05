import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ImgList from "../../assets/img/home-ico-lista.svg";
import ImgEdit from "../../assets/img/edit-icon-big.svg";
import ImgDelete from "../../assets/img/delete-icon-big.svg";

import '../../App.css';
import { useHistory } from 'react-router';

function ShoppingList() {
    const history = useHistory();

    const informationCards = [
        {
            img: ImgList,
            title: 'Crear lista de productos',
            text: 'Si quieres crear una nueva lista de comprar, dale clic en crear lista aqui.',
            url: '/create-shopping-list'
        },
        {
            img: ImgEdit,
            title: 'Editar lista de comprar',
            text: 'En caso de tener una lista ya existente, podras editarla, haz clic en editar lista aqui.',
            url: '/'
        },
        {
            img: ImgDelete,
            title: 'Eliminar lista de comprar',
            text: 'Si tiene una lista de compras que quisieras eliminar, dale clic en eliminar lista aqui.',
            url: '/'
        }
    ];

    return (
            <div className="ml-5 pt-5" style={{ height: "91vh" }}>
                <Container className='margin-top-for-all'>
                    <Row>
                        <Col lg={12}>
                            <h1 className="titleHomeIn ">Lista de compras</h1>
                        </Col>
                        {informationCards.map((event) => {
                            return (
                                <Col lg={4} className="d-flex mt-4">
                                    <Card style={{ width: '18rem', borderRadius: "20px" }}>
                                        <Card.Header className="borderRadiusCardHeader">
                                            <Card.Img variant="top" className="mt-3 mb-3 styleImgCardHomeIn" src={event.img} />
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title className="styleTitleCard">{event.title}</Card.Title>
                                            <Card.Text className="styleSubTitleCard">{event.text}</Card.Text>
                                        </Card.Body>
                                        <Card.Body>
                                            <Card.Link href={event.url} style={{ textAlign: 'initial' }}>Comienza aqui</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
                <button className='button-white btn-finish' onClick={() => history.goBack()}>ATRÁS</button>
            </div>
    );
}

export default ShoppingList;
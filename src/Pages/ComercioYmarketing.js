import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ComercioYmarketing.css"   


function ComercioYmarketing() {
    return (
        <Container fluid className="principal">
            <Row>
                <div className="imagen-fondo">
                    <p className="titulo">Bienvenido a tu curso de Comercio y marketing</p>
                </div>
            </Row>
                <Col className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 1 Comercio y marketing</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/Z0ICdXpvjHw"
                        title="tema 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 2 Comercio y marketing</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/LOuBICx33NQ"
                        title="tema 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 3 Comercio y marketing</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/o7GEfG-4ySc"
                        title="tema 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </Col>

            <Col className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 4 Comercio y marketing</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/vKhxXXkJipw"
                        title="tema 4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 5 Comercio y marketing</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/Z0ICdXpvjHw"
                        title="tema 5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 6 Comercio y marketing</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/vKhxXXkJipw"
                        title="tema 6"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </Col>
        </Container>
    );
}

export default ComercioYmarketing;
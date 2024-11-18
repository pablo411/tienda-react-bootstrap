import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AdministracionYempresa.css"

function AdministracionYempresa() {
    return (
        <Container fluid className="principal">
            <Row>
                <div className="imagen-fondo">
                    <p className="titulo">Bienvenido a tu curso de Administracion y empresa</p>
                </div>
            </Row>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 1 Administracion y empresa</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/EY07a0nzr7Y"
                        title="tema 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 2 Administracion y empresa</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/uVqq7jfWMaM"
                        title="tema 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 3 Administracion y empresa</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/qTwi-irYWiA"
                        title="tema 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 4 Administracion y empresa</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/x-wQR_FgUms"
                        title="tema 4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 5 Administracion y empresa</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/6hwylgdLhkY"
                        title="tema 5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 6 Administracion y empresa</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/TwogO163ul8"
                        title="tema 6"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>
        </Container>
    );
}

export default AdministracionYempresa;
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CienciasSalud.css"


function CienciasSalud() {
    return (
        <Container fluid className="principal">
            <Row fluid>
                <div className="imagen-fondo">
                    <p className="titulo">Bienvenido a tu curso de Ciencias de la salud</p>
                </div>
            </Row>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 1 Ciencias de la salud</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/riEz9cHp0YY"
                        title="tema 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 2 Ciencias de la salud</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/kbxOAueNbo0"
                        title="tema 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 3 Ciencias de la salud</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/B-seFQXiISc"
                        title="tema 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 4 Ciencias de la salud</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/PgsYAxoUB3g"
                        title="tema 4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 5 Cienciasde la salud</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/Vv2LgBswdss"
                        title="tema 5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 6 Ciencias de la salud</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/Yh4qQZuqJ-M"
                        title="tema 6"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>
        </Container>
    );
}

export default CienciasSalud;
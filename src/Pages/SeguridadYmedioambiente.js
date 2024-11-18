import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SeguridadYmedioambiente.css"


function SeguridadYmedioambiente() {
    return (
        <Container fluid className="principal">
            <Row>
                <div className="imagen-fondo">
                    <p className="titulo">Bienvenido a tu curso de Seguridad y medioambiente</p>
                </div>
            </Row>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 1 Seguridad y medioambiente</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/9612UrSe388"
                        title="tema 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                
                    <h5>Tema 2 Seguridad y medioambiente</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/7agyjAvfdZY"
                        title="tema 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 3 Seguridad y medioambiente</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/-ZGDB86NGgA"
                        title="tema 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 4 Seguridad y medioambiente</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/Oq7yJ_lKR2c"
                        title="tema 4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                
                    <h5>Tema 5 Seguridad y medioambiente</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/xCOZrtNFExg"
                        title="tema 5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
               
                    <h5>Tema 6 Seguridad y medioambiente</h5>
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

export default SeguridadYmedioambiente;
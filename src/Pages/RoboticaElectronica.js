import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./RoboticaElectronica.css"


function RoboticaElectronica() {
    return (
        <Container fluid className="principal">
            <Row fluid>
                <div className="imagen-fondo">
                    <p className="titulo">Bienvenido a tu curso de Robotica, electronica y electricidad</p>
                </div>
            </Row>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 1 Robotica, electronica y electricidad</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?v=dqtFfBlg5Sk&list=PLSIGCMsuLvBdfSG9wD8pZiXFoMJuBs1Ng"
                        title="tema 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 2 Robotica, electronica y electricidad</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed?v=G3DMUTGJ7Z4&list=PLSIGCMsuLvBdfSG9wD8pZiXFoMJuBs1Ng&index=2"
                        title="tema 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 3 Robotica, electronica y electricidad</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?v=NNYT31ZLF2E&list=PLSIGCMsuLvBdfSG9wD8pZiXFoMJuBs1Ng&index=3"
                        title="tema 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 4 Robotica, electronica y electricidad</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed?v=J4cGRozNMX0&list=PLSIGCMsuLvBdfSG9wD8pZiXFoMJuBs1Ng&index=4"
                        title="tema 4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 5 Robotica, electronica y electricidad</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?v=I4jptbHXW-M&list=PLSIGCMsuLvBdfSG9wD8pZiXFoMJuBs1Ng&index=5"
                        title="tema 5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 6 Robotica, electronica y electricidad</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?v=EUDZnokTZqM&list=PLSIGCMsuLvBdfSG9wD8pZiXFoMJuBs1Ng&index=6"
                        title="tema 6"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>
        </Container>
    );
}

export default RoboticaElectronica;
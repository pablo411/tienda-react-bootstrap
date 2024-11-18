import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./InformaticaYcomunicaciones.css"


function InformaticaYcomunicaciones() {
    return (
        <Container fluid className="principal">
            <Row fluid>
                <div className="imagen-fondo">
                    <p className="titulo">Bienvenido a tu curso de Informatica y comunicaciones</p>
                </div>
            </Row>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 1 Informatica y comunicaciones</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?o_78Ue_EUeI&list=PL2Z95CSZ1N4HLqf215jj9ZJgmWIXm7gOo"
                        title="tema 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 2 Informatica y comunicaciones</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?o_78Ue_EUeI&list=PL2Z95CSZ1N4HLqf215jj9ZJgmWIXm7gOo&index=1"
                        title="tema 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 3 Informatica y comunicaciones</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?o_78Ue_EUeI&list=PL2Z95CSZ1N4HLqf215jj9ZJgmWIXm7gOo&index=1"
                        title="tema 3"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>

            <div className="capitulos">
                <Row className="videos-container">
                    <h5>Tema 4 Informatica y comunicaciones</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?AjDA2wsfv-Q&list=PL2Z95CSZ1N4HLqf215jj9ZJgmWIXm7gOo&index=4"
                        title="tema 4"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 5 Informatica y comunicaciones</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?uQYjGhF-o_s&list=PL2Z95CSZ1N4HLqf215jj9ZJgmWIXm7gOo&index=5"
                        title="tema 5"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                

                
                    <h5>Tema 6 Informatica y comunicaciones</h5>
                    <iframe
                        width="460"
                        height="315"
                        src="https://www.youtube.com/embed/?=e8bk8Ze3-CI&list=PL2Z95CSZ1N4HLqf215jj9ZJgmWIXm7gOo&index=7"
                        title="tema 6"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </Row>
            </div>
        </Container>
    );
}

export default InformaticaYcomunicaciones;
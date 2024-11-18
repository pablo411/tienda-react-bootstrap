import React from "react";
import { supabase } from "../SupaBase/client";
import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./CursosComprados.css";
import { Link } from "react-router-dom";



function CursosComprados() {
    return (
        <div>
            <div className="imagen-fondo"></div>

            <div className='fila-cartas1'>
                <Card style={{ width: '22rem' }}>
                    <Card.Img className="imagenes" variant="top" src="https://th.bing.com/th/id/OIP.j2qR6bdxd3gc6-fKNxdJxAHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
                    <Card.Body>
                        <h2>Administracion y empresa</h2>
                        <Card.Title className='titulo'></Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Aprende a planificar, ejecutar y supervisar proyectos de forma eficiente utilizando metodologías como Agile y Scrum. Ideal para emprendedores y líderes de equipo.</li>
                                <li>Mejora tus habilidades de liderazgo y gestión de proyectos, con la ayuda de este curso.</li>
                                <li>Nivel: Profesional</li>
                                <li>Duracion: 350 horas</li>
                                <li>Precio: 500 Euros</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                        <Link className="link" to={"/AdministracionYempresa"}><Button variant="primary">ver curso</Button></Link>

                    </Card.Body>
                </Card>

                <Card style={{ width: '22rem' }}>
                    <Card.Img className="imagenes" variant="top" src="https://th.bing.com/th/id/OIP.Hkt_N2vLlAdCRj5UKPHHGAHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
                    <Card.Body>
                        <h2>Ciencias de la salud</h2>
                        <Card.Text className='descripciones'>
                            <ul>
                                <li>Aprende técnicas esenciales de primeros auxilios, como RCP, control de hemorragias y manejo de emergencias comunes. Ideal para cualquier persona interesada en salvar vidas.</li>
                                <li>Mejora tus habilidades de atención primaria y cuidados de salud.</li>
                                <li>Nivel: Profesional</li>
                                <li>Duracion: 350 horas</li>
                                <li>Precio: 600 Euros</li>

                            </ul>
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                        <Link className="link" to={"/CienciasSalud"}><Button variant="primary">ver curso</Button></Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '22rem' }}>
                    <Card.Img className="imagenes" variant="top" src="https://th.bing.com/th/id/OIP.alDU8bQf4uqZhPc4GZIEggHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
                    <Card.Body>
                        <h2>Comercio y marketing</h2>
                        <Card.Text className='descripciones'>
                            <ul>
                                <li>Aprende técnicas efectivas de ventas, negociación y fidelización de clientes en un entorno competitivo, tanto presencial como digital.</li>
                                <li>Mejora tus habilidades de negociación y ventas, con la ayuda de este curso.</li>
                                <li>Nivel: Profesional</li>
                                <li>Duracion: 350 horas</li>
                                <li>Precio: 400 Euros</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                        <Link className="link" to={"/ComercioYmarketing"}><Button variant="primary">ver curso</Button></Link>
                    </Card.Body>
                </Card>
            </div>

            <div className='fila-cartas1'>
                <Card style={{ width: '22rem' }}>
                    <Card.Img className="imagenes" variant="top" src="https://th.bing.com/th?id=OIP.iN2nNsFr_kkCbn4D0lnvjwHaFo&w=286&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" />
                    <Card.Body>
                        <h2>Informatica y comunicaciones</h2>
                        <Card.Text className='descripciones'>
                            <ul>
                                <li>Aprende cómo funcionan las redes de computadoras, incluyendo proto Colos, configuración de routers y seguridad en redes locales e internet.</li>
                                <li>Mejora tus habilidades de redacción y comunicación, con la ayuda de este curso.</li>
                                <li>Nivel: Profesional</li>
                                <li>Duracion: 350 horas</li>
                                <li>Precio: 800 Euros</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                        <Link className="link" to={"/InformaticaYcomunicaciones"}><Button variant="primary">ver curso</Button></Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '22rem' }}>
                    <Card.Img className="imagenes" variant="top" src="https://th.bing.com/th/id/OIP.bkkcf2Dhl4ew9B8rU0pIawHaEb?rs=1&pid=ImgDetMain" />
                    <Card.Body>
                        <h2>Robotica, electronica y electricidad</h2>
                        <Card.Text className='descripciones'>
                            <ul>
                                <li>Aprende los fundamentos de la robótica, incluyendo diseño, ensamblaje y programación de robots básicos para diversas aplicaciones.</li>
                                <li>Mejora tus habilidades de ingeniería y programación.</li>
                                <li>Nivel: Profesional</li>
                                <li>Duracion: 350 horas</li>
                                <li>Precio: 800 Euros</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary">Comprar</Button>
                        <Link className="link" to={"/RoboticaElectronica"}><Button variant="primary">ver curso</Button></Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '22rem' }}>
                    <Card.Img className="imagenes" variant="top" src="https://th.bing.com/th/id/OIP.-qN530JBpO4hl7UQ3GI09wHaD3?w=282&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
                    <Card.Body>
                        <h2>Seguridad y medioambiente</h2>
                        <Card.Text className='descripciones'>
                            <ul>
                                <li>Aprende a identificar y prevenir riesgos laborales, implementar normativas de seguridad, y promover entornos de trabajo seguros y saludables.</li>
                                <li>Mejora tus habilidades de trabajo en equipo y liderazgo, con la ayuda de este curso.</li>
                                <li>Nivel: Profesional</li>
                                <li>Duracion: 350 horas</li>
                                <li>Precio: 500 Euros</li>
                            </ul>
                        </Card.Text>
                        <div>
                            <Button variant="primary">Comprar</Button>
                            <Link className="link" to={"/SeguridadYmedioambiente"}><Button variant="primary">ver curso</Button></Link>
                        </div>
                    </Card.Body>
                </Card>


            </div>
        </div>
    );
}

export default CursosComprados;
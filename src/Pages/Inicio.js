import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Inicio.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Inicio() {
    return (
        <Container fluid className='principal'>
            <Row className='contenedor'>
                <div>
                <p className='descripcion'><h1>Tu próximo paso hacia el éxito educativo.</h1></p>
                <p className='descripcion'>Encuentra cursos diseñados para ayudarte</p>
                <p className='descripcion'>a alcanzar tus metas academicas y profesionales.</p>
                <p className='descripcion'> Aprende a tu ritmo y en tu tiempo.</p>
                </div>
            </Row>
            <Col className="d-grid gap-2">
                <Link className='link' to={"CursosComprados"}><Button variant="primary" size="lg">
                    Ver todos los cursos
                </Button></Link>
            </Col>
            <Col className='breve-descripcion'>
                <p>Nuestro sitio ofrece una amplia gama de cursos educativos de alta calidad, diseñados para personas que desean aprender desde casa. Aquí puedes comprar y consumir cursos en línea, con acceso 24/7 para que aprendas a tu propio ritmo.</p>
                <p className='descripcion-titulo'>Te mostramos algunos de nuestros cursos</p>
            </Col>
            <Col className='fila-cartas1'>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.j2qR6bdxd3gc6-fKNxdJxAHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
                    <Card.Body>
                        <h2>Administracion y empresa</h2>
                        <Card.Text className='descripciones'>
                        Aprende a planificar, ejecutar y supervisar proyectos de forma eficiente utilizando metodologías como Agile y Scrum. Ideal para emprendedores y líderes de equipo.
                        </Card.Text>
                        <Link className='link' to={"/AdministracionYempresa"}><Button variant="primary">Ver curso</Button></Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img  variant="top" src="https://th.bing.com/th/id/OIP.Hkt_N2vLlAdCRj5UKPHHGAHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
                    <Card.Body>
                        <h2>Ciencias de la salud</h2>
                        <Card.Text className='descripciones'>
                        Aprende técnicas esenciales de primeros auxilios, como RCP, control de hemorragias y manejo de emergencias comunes. Ideal para cualquier persona interesada en salvar vidas.
                        </Card.Text>
                        <Button variant="primary">Ver curso</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem' }}>
                    <Card.Img  variant="top" src="https://th.bing.com/th/id/OIP.alDU8bQf4uqZhPc4GZIEggHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" />
                    <Card.Body>
                        <h2>Comercio y marketing</h2>
                        <Card.Text className='descripciones'>
                        Aprende técnicas efectivas de ventas, negociación y fidelización de clientes en un entorno competitivo, tanto presencial como digital.
                        </Card.Text>
                        <Button variant="primary">Ver curso</Button>
                    </Card.Body>
                </Card>

                
            </Col>

        </Container>
    );
}

export default Inicio

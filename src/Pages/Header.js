import React from "react";
import "./Header.css"
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="navbar">
            <Col>
                <Row className="imagen-empresa">
                    <img src="https://universae.com/wp-content/themes/templatePLG/resources/assets/images/logo_fp_universae_web_blanco.svg"></img>
                </Row>
            </Col>
            <Col className="botones-navegacion">
                <ButtonGroup className="botones-menu">
                    <Button><Link classname="link" to={"/"}>Inicio</Link></Button>
                    <Button><Link className="link" to={"/Registro"}>Registro</Link></Button>
                    <Button><Link className="link" to={"/Login"}>Identificate</Link></Button>
                    <Button>Comunidad</Button>
                    <Link className="link" to={"/CursosComprados"}>
                        <DropdownButton as={ButtonGroup} title="comprar cursos" className="boton-desplegable">
                            <Link className="link" to={"/AdministracionYempresa"}><Dropdown.Item eventKey="1">Administracion y empresa</Dropdown.Item></Link>
                            <Link className="link" to={"/CienciasSalud"}><Dropdown.Item eventKey="2">Ciencias de la salud</Dropdown.Item></Link>
                            <Link className="link" to={"/comercioYmarketing"}><Dropdown.Item eventKey="2">Comercio y marketing</Dropdown.Item></Link>
                            <Link className="link" to={"/informaticaYcomunicaciones"}><Dropdown.Item eventKey="2">informatica y comunicaciones</Dropdown.Item></Link>
                            <Link className="link" to={"/Robótica, electrónica y electricidad"}></Link><Dropdown.Item eventKey="2">Robotia, Electronica y  electricidad</Dropdown.Item>
                            <Link className="link" to={"/SeguridadYmedioambiente"}><Dropdown.Item eventKey="2">Seguridad y medioambiente</Dropdown.Item></Link>
                        </DropdownButton>
                    </Link>
                    <DropdownButton as={ButtonGroup} title="Mis cursos" className="boton-desplegable">
                    </DropdownButton>
                </ButtonGroup>
            </Col>
            <Col className="iconos">
                <img className="icono-social" src="https://th.bing.com/th/id/OIP.63DXNT7dro-XDctQsQE7VwHaHa?rs=1&pid=ImgDetMain"></img>
                <img className="icono-social" src="https://lh4.googleusercontent.com/-qfFKsYZbyBQ/TYHwDPCeXgI/AAAAAAAAE9M/T0BTA6mZYDE/s1600/Facebook+icon+01.png"></img>
                <img className="icono-social" src="https://toppng.com/uploads/preview/instagram-png-logo-11545512103yiiajkgr2i.png"></img>
            </Col>
        </header>
    );
}

export default Header;
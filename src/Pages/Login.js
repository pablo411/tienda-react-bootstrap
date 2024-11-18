import React, { useState } from "react";
import { supabase } from "../SupaBase/client";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert("Error al iniciar sesión:", error.message);
      navigate('/Registro');
    } else {
      alert("Inicio de sesión exitoso:", data);
      navigate('/');
    }
  };

  return (
    <div className="container">
      <img className="logo" src="https://universae.com/wp-content/themes/templatePLG/resources/assets/images/logo_fp_universae_web_blanco.svg"></img>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="Email">
          <Form.Label><h6>Dirección de correo electrónico</h6></Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduce tu email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="contraseña" controlId="formBasicPassword">
          <Form.Label><h6>Contraseña</h6></Form.Label>
          <Form.Control
            type="password"
            placeholder="Introduce tu contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </div>
  );
}

export default Login;

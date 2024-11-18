import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { supabase } from "../SupaBase/client";
import "./Registro.css";

const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    password: ''
  });

  const handleButtonClick = () => {
    navigate('/Login');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            nombreCompleto: formData.nombreCompleto
          }
        }
      });
      if (error) throw error;
      alert("Te has registrado correctamente");
      navigate("/Home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <img className="logo" src="https://universae.com/wp-content/themes/templatePLG/resources/assets/images/logo_fp_universae_web_blanco.svg"></img>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre Completo"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Registrarse</button>
      </form>
      <h6>¿ya tienes cuenta?</h6>
      <button onClick={handleButtonClick}> inicia sesion aqui</button>
    </div>
  );
};

export default Registro;

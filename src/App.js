import './App.css';
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import AdministracionYempresa from './Pages/AdministracionYempresa';
import { supabase } from './SupaBase/client'; 
import Registro from './Pages/Registro';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Inicio from './Pages/Inicio';
import CursosComprados from './Pages/CursosComprados';
import CienciasSalud from './Pages/CienciasSalud';
import ComercioYmarketing from './Pages/ComercioYmarketing';
import InformaticaYcomunicaciones from './Pages/InformaticaYcomunicaciones';
import RoboticaElectronica from './Pages/RoboticaElectronica';
import SeguridadYmedioambiente from './Pages/SeguridadYmedioambiente';




function App() {
const navigate = useNavigate();

    useEffect(() => {
     supabase.auth.onAuthStateChange((event, session) => {
        if(!session) {
            navigate("/Registro")
        }else {
            navigate("/")
        }
            
        })
    }, [])

  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/CursosComprados" element={<CursosComprados />} />
        <Route path="/AdministracionYempresa" element={<AdministracionYempresa />} />
        <Route path="/CienciasSalud" element={<CienciasSalud />} />
        <Route path="/ComercioYmarketing" element={<ComercioYmarketing />} />
        <Route path="/InformaticaYcomunicaciones" element={<InformaticaYcomunicaciones />} />
        <Route path="/RoboticaElectronica" element={<RoboticaElectronica />} />
        <Route path="/SeguridadYmedioambiente" element={<SeguridadYmedioambiente />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;

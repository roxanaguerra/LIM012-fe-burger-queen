import React from 'react';
import logo from '../images/logo-principal.png';
import MainButton from '../components/MainButton';

const Welcome = () => (
  <div className="component-welcome">
    <img className="logo-welcome" src={logo} alt="Mikuy Burger" />
    <div className="prueba">
      <MainButton classbtn="btn btn-welcome" name="Mesero" reference="/mozo" />
      <MainButton classbtn="btn btn-welcome" name="Jefe de Cocina" reference="/jefecocina" />
    </div>
  </div>
);
export default Welcome;

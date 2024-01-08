import React, { useState } from 'react';
import "./Configuraciones.css";

const Configuraciones = () => {
  const [selectedColor, setSelectedColor] = useState(""); // Estado para almacenar el color seleccionado

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleBackgroundChange = () => {
    document.body.style.backgroundColor = selectedColor;
  };

  return (
    <div className='m-5'>
      <label>Eligue el color del fondo: </label>
      <select
      className='selectConf m-4'
        id="background-color"
        value={selectedColor}
        onChange={handleColorChange}
      >
        <option value="">Default</option>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
        <option value="black">Negro</option>
      </select>

      <button className='buttonConf' onClick={handleBackgroundChange}>
        Aplicar Color de Fondo
      </button>
    </div>
  );
};

export default Configuraciones;
import "react-notifications/lib/notifications.css";
import "../Css/Animations.css";
import { useState } from "react";

const Animaciones = () => {
  const [texto, setTexto] = useState(""); // Inicializa la variable de estado 'texto'

  const handleImageClick = () => {
    setTexto("que pa"); // Actualiza la variable 'texto' al hacer clic en la imagen
  };

  return (
    <div>
      <h1> Animaciones con texto </h1>

      <div className="dividirDiv1">
        <div className="animated-container-siu1">
          <div className="animated-element-siu1">¡SIUUU!</div>
        </div>
      </div>

      <div className="dividirDiv2">
        <div className="animated-container-siu2">
          <div className="animated-element-siu2">¡SIUUU!</div>
        </div>
      </div>

      <div className="dividirDiv3">
        <div className="animated-container-siu3">
          <div className="animated-element-siu3">¡SIUUU!</div>
        </div>
      </div>

      <h1> Animaciones con botones </h1>
      <div className="dividirDiv4">
        <button class="animated-button1">Click Me!</button>
      </div>

      <div className="dividirDiv5">
        <button class="animated-button2">Click Me!</button>
      </div>

      <div className="dividirDiv6">
        <button class="animated-button3">Click Me!</button>
      </div>

      <div className="dividirDiv7">
        <button class="ui-btn">
          <span>Click Me!</span>
        </button>
      </div>

      <div className="dividirDiv8">
        <button class="reflejo">
          <span>Click Me!</span>
        </button>
      </div>

      <h1> z-index </h1>

      <div class="container-figures">
        <div class="circle"></div>
        <div class="square"></div>
        <div class="triangle"></div>
      </div>

      <div>
        <h1>{texto}</h1>
        <img
          className="img-gallery"
          id="img-gallery"
          src="https://cdn-3.expansion.mx/dims4/default/1308750/2147483647/strip/true/crop/1125x591+0+0/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F01%2Fd9%2F38db964e40a5bf4167c85f487a96%2Felwbeczvoaissv9.jpg"
          onClick={handleImageClick}
        ></img>
      </div>
    </div>
  );
};

export default Animaciones;

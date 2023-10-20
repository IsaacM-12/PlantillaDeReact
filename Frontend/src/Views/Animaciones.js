import "react-notifications/lib/notifications.css";
import "../Css/Animations.css";

const Animaciones = () => {
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

      <div class="container-figures">
        <div class="circle"></div>
        <div class="square"></div>
        <div class="triangle"></div>
    </div>
      
    </div>
  );
};

export default Animaciones;

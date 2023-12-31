import "react-notifications/lib/notifications.css";
import "./Animations.css";
import { useState } from "react";

const Animaciones = () => {
  const [texto, setTexto] = useState(""); // Inicializa la variable de estado 'texto'

  const handleImageClick = () => {
    setTexto("que pa"); // Actualiza la variable 'texto' al hacer clic en la imagen
  };

  return (
    <div className="hidden">
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

      <div className="dividirDiv9">
        <button class="animated-button9">
          <span class="svgContainer">
            <svg
              className="scaling-svg"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M11.958 11c-3.073 0-6.779 5.665-7.553 8.716-.597 2.351.774 4.284 2.811 4.284 1.563 0 3.472-1.439 4.788-1.463h.019c1.124 0 3.516 1.399 4.924 1.399 1.99 0 3.154-1.932 2.645-4.22-.575-2.593-4.303-8.716-7.634-8.716zm-10.209-3.952c-.378 0-.71.086-.97.267-.514.36-.779 1.092-.779 2.007 0 .944.281 2.082.861 3.208.762 1.479 1.879 2.47 3.149 2.47.55 0 1.13-.187 1.721-.6 1.697-1.184 1.505-3.432-.082-5.214-1.2-1.348-2.757-2.138-3.9-2.138zm20.377-.566c-1.205 0-2.857 1.151-3.929 2.923-1.265 2.092-1.037 4.394.894 5.271.489.221.95.324 1.378.324 1.519 0 2.631-1.294 3.179-3.12.741-2.463.35-5.398-1.522-5.398zm-5.959-6.482c-1.288 0-2.91 1.671-3.622 3.936-.757 2.405.032 4.655 2.182 5.062 3.75.708 3.876-3.79 3.882-3.913.191-3.588-1.429-5.085-2.442-5.085zm-9.537 0c-1.749 0-2.432 2.789-1.879 5.418.426 2.022 1.539 3.494 3.235 3.494.374 0 .775-.072 1.204-.224 2.061-.732 2.495-3.077 1.377-5.337-.986-1.995-2.68-3.351-3.937-3.351zm5.328 12c2.581 0 6.093 5.388 6.658 7.933.329 1.489-.253 3.424-2.268 2.924-1.03-.253-3.202-1.32-4.361-1.32h-.001c-1.185.022-2.674.887-3.897 1.307-1.932.666-3.216-.902-2.714-2.882.741-2.925 4.274-7.962 6.583-7.962zm-7.056-2.149c.721.81 1.098 1.75 1.008 2.514-.125 1.06-1.23 1.635-1.9 1.635-.805 0-1.628-.702-2.26-1.928-1.047-2.035-.816-3.645-.398-3.937.159-.111 1.694-.367 3.55 1.716zm17.224-2.369l.215.038c.483.219 1.028 1.811.348 4.072-.216.724-.869 2.408-2.22 2.408-.697 0-1.677-.411-1.963-1.335-.239-.772-.04-1.772.547-2.742.925-1.528 2.288-2.441 3.073-2.441zm-5.959-6.482c.247 0 1.61.892 1.444 4.032-.099 1.854-.847 3.335-2.698 2.984-1.931-.367-1.776-2.629-1.413-3.78.629-2.005 1.978-3.236 2.667-3.236zm-9.537 0c.797 0 2.187 1.068 3.04 2.794.523 1.057.641 2.111.325 2.892-.391.962-1.423 1.226-2.009 1.226-1.524 0-2.085-1.888-2.256-2.7-.477-2.266.14-4.212.9-4.212z" />
            </svg>
          </span>
          <span class="BG"></span>
        </button>
      </div>

      <div className="dividirDiv10">
        <button class="animated-button10">
          <span>Click Me!</span>
        </button>
      </div>

      <h1> z-index </h1>

      <div class="dividirDiv11">
        <div class="circle"></div>
        <div class="square"></div>
        <div class="triangle"></div>
      </div>

      <div class="dividirDiv12">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          class="wheel-and-hamster"
        >
          <div class="wheel"></div>
          <div class="hamster">
            <div class="hamster__body">
              <div class="hamster__head">
                <div class="hamster__ear"></div>
                <div class="hamster__eye"></div>
                <div class="hamster__nose"></div>
              </div>
              <div class="hamster__limb hamster__limb--fr"></div>
              <div class="hamster__limb hamster__limb--fl"></div>
              <div class="hamster__limb hamster__limb--br"></div>
              <div class="hamster__limb hamster__limb--bl"></div>
              <div class="hamster__tail"></div>
            </div>
          </div>
          <div class="spoke"></div>
        </div>
      </div>

    </div>
  );
};

export default Animaciones;

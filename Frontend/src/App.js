import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plantilla from "./Views/Plantilla";
import Layout from "./Components/Layout";
import Galery from "./Views/Galery";
import Animaciones from "./Views/Animaciones/Animaciones";

function App() {
  function NotFound() {
    return (
      <div className="NotFound">
        <div>
          <h1>La página que busca no existe</h1>
        </div>
        <div className="conteiner-hamster">
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
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Animaciones />} />
            <Route path="/plantilla" element={<Plantilla />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/animacion" element={<Animaciones />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

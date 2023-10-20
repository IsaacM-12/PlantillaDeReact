import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plantilla from "./Views/Plantilla";
import Layout from "./Components/Layout";
import Galery from "./Views/Galery";


function App() {
  function NotFound() {
    return (
      <div>
        <h1>La página que busca no existe</h1>
      </div>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Plantilla />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
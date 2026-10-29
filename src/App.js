import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Inicio from "./pages/Inicio.jsx";
import Contacto from "./pages/Contacto.jsx";
import Acerca from "./pages/Acerca.jsx";
import PaginaBlob from "./pages/Blob.jsx";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="/acerca"
          element={<Acerca />}
        />

        <Route
          path="/blob"
          element={<PaginaBlob />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
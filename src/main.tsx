import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import MesRendezVous from "./pages/MesRendezVous";
import Reserver from "./pages/Reserver";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/reserver" element={<Reserver />} />
        <Route path="/mes-rendez-vous" element={<MesRendezVous />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

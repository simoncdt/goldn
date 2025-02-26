import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Faq from "./pages/Faq"
import AchatOr from "./pages/AchatOr"
import VenteOr from "./pages/VenteOr"

import AchatPiece from "./pages/AchatPiece"
import VentePiece from "./pages/VentePiece"

import AchatLingot from "./pages/AchatLingot"
import VenteLingot from "./pages/VenteLingot"
import RachatBijoux from "./pages/RachatBijoux"
import CoursOr from './pages/CoursOr'
import CoursOrModerne from "./pages/CoursOrModerne"
import ScrollToHashElement from "./components/ScrollToHashElement";

function App() {

  return (
    <Router>
      <ScrollToHashElement/>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/achat-or" element={<AchatOr />} />

      <Route path="/achat-piece-or" element={<AchatPiece />} />
      <Route path="/achat-lingot-or" element={<AchatLingot />} />

      <Route path="/vente-or" element={<VenteOr/>} />

      <Route path="/vente-piece-or" element={<VentePiece />} />
      <Route path="/vente-lingot-or" element={<VenteLingot />} />

      <Route path="/rachat-bijoux" element={<RachatBijoux />} />
      <Route path="/cours-or" element={<CoursOr />} />
      <Route path="/cours-or-moderne" element={<CoursOrModerne />} />





      
    </Routes>
  </Router>
  )
}

export default App

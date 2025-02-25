import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Faq from "./pages/Faq"
import AchatOr from "./pages/AchatOr"
import VenteOr from "./pages/VenteOr"

import AchatPiece from "./pages/AchatPiece"
import VentePiece from "./pages/VentePiece"

import AchatLingot from "./pages/AchatLingot"
import VenteLingot from "./pages/VenteLingot"

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/achat-or" element={<AchatOr />} />

      <Route path="/achat-piece-or" element={<AchatPiece />} />
      <Route path="/achat-lingot-or" element={<AchatLingot />} />

      <Route path="/vente-or" element={<VenteOr/>} />

      <Route path="/vente-piece-or" element={<VentePiece />} />
      <Route path="/vente-lingot-or" element={<VenteLingot />} />


      
    </Routes>
  </Router>
  )
}

export default App

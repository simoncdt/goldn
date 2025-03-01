import { useState, useEffect } from "react";
import { X } from "lucide-react"; // Icône moderne pour la fermeture

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-gradient-to-b from-[#E6CDA3] to-[#B89150] px-8 py-10 rounded-2xl shadow-2xl w-[400px] text-[#4B3B2B] text-lg relative border-[1px] border-[#C9A46C]">
        
        {/* Bouton de fermeture */}
        <button
          className="absolute top-3 right-3 text-[#4B3B2B] hover:text-[#A67C52] transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Contenu */}
        <div className="text-center leading-relaxed">
          <h2 className="text-2xl font-semibold text-[#4B3B2B] mb-4">
            Experts en Or & Bijoux
          </h2>
          <p className="text-md text-[#5A4634]">
            Présents dans toute la France, nos experts vous conseillent pour
            acheter ou vendre l’or, ainsi que pour expertiser vos bijoux.
          </p>
        </div>

        {/* Bouton Prendre RDV */}
        <button
          className="mt-6 px-6 py-3 bg-[#A67C52] text-white font-medium rounded-full shadow-md hover:bg-[#8F6A42] transition-all duration-300 block mx-auto text-lg"
          onClick={() => setIsOpen(false)}
        >
          Prendre RDV
        </button>
      </div>
    </div>
  );
};

export default Popup;

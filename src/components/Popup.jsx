import { useState, useEffect } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Affiche le popup au chargement
  }, []);

  if (!isOpen) return null; // Ne rien afficher si fermé

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#D6BE82] px-6 py-12 rounded-lg shadow-lg w-96  text-white text-base relative">
        <button
          className="absolute top-2 right-2 text-white hover:text-red-500 text-2xl "
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <div>
            Present sur toute la france nos experts vous conseillent pour acheter ou vendre de Lor , ainsi que pour expertiser vos bijoux 
        </div>
        <button
          className="mt-6 px-8 py-4 bg-red-500 text-white rounded-md hover:bg-red-600 block mx-auto"
          onClick={() => setIsOpen(false)}
        >
          Prendre RDV
        </button>
      </div>
    </div>
  );
};

export default Popup;

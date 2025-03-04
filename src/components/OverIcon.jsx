import React from "react";
import { Calendar, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export default function OverIcon() {
  return (
    <>
      <div className="fixed z-50 right-0 top-1/2 transform -translate-y-1/2">
  <div className="flex flex-col items-center gap-4">

    {/* Conteneur de l'icône et du texte pour "Nous contacter" */}
    <Link to={'/contact'} className="relative flex py-1 rounded-lg w-[200px] -right-[150px] items-center bg-white shadow-md cursor-pointer transform transition-all duration-300 translate-x-0 group hover:-translate-x-[150px] hover:bg-gradient-to-r hover:from-[#B58D12] hover:to-[#F7E3A1] hover:shadow-xl">
      <div className="p-2 transition-all duration-300 transform hover:rotate-12">
        <Mail className="w-9 h-9 text-gray-700 transition-colors duration-300 group-hover:text-white" />
      </div>
      <span className="whitespace-nowrap text-gray-700 pr-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:text-white">
        Nous contacter
      </span>
    </Link>

    {/* Conteneur de l'icône et du texte pour "Prendre un RDV" */}
    <Link to={'/contact'} className="relative flex py-1 rounded-lg w-[200px] -right-[150px] items-center bg-white shadow-md cursor-pointer transform transition-all duration-300 translate-x-0 group hover:-translate-x-[150px] hover:bg-gradient-to-r hover:from-[#B58D12] hover:to-[#F7E3A1] hover:shadow-xl">
      <div className="p-2 transition-all duration-300 transform hover:rotate-12">
        <Calendar className="w-9 h-9 text-gray-700 transition-colors duration-300 group-hover:text-white" />
      </div>
      <span className="whitespace-nowrap text-gray-700 pr-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:text-white">
        Prendre un RDV
      </span>
    </Link>

    {/* Conteneur de l'icône et du texte pour "Autre icône" */}
    <Link to={'/contact'} className="relative flex py-1 rounded-lg w-[200px] -right-[150px] items-center bg-white shadow-md cursor-pointer transform transition-all duration-300 translate-x-0 group hover:-translate-x-[150px] hover:bg-gradient-to-r hover:from-[#B58D12] hover:to-[#F7E3A1] hover:shadow-xl">
      <div className="p-2 transition-all duration-300 transform hover:rotate-12">
        <Phone className="w-9 h-9 text-gray-700 transition-colors duration-300 group-hover:text-white" />
      </div>
      <span className="whitespace-nowrap text-gray-700 pr-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:text-white">
        Nous Joindre
      </span>
    </Link>
  </div>
</div>

    </>
  );
}

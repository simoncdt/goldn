import { useState } from "react";
import logo from "../assets/logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";
//import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navElement = [
    { title: "FAQ", link: "/faq" },
    { title: "Presse", link: "/faq" },
    { title: "À propos", link: "/faq" },
    { title: "Nous contacter", link: "/contact" },
  ];
  const menuElement = [
    {
      label: "Achat d'or",
      link: "/achat-or",
      content: [
        { underLabel: "Pièce d'or", link: "/achat-piece-or" },
        { underLabel: "Lingot d'or", link: "/achat-lingot-or" },
        { underLabel: "Investir dans l'or", link: "/investir-or" },
      ],
    },
    {
      label: "Vente d'or",
      link: "/vente-or",
      content: [
        { underLabel: "Pièce d'or", link: "/vente-piece-or" },
        { underLabel: "Lingot d'or", link: "/vente-lingot-or" },
        {
          underLabel: "Rachat bijoux et montres en or",
          link: "/rachat-bijoux",
        },
      ],
    },
    {
      label: "Cours de l'or",
      link: "/cours-or",
      content: [
        { underLabel: "Pièces cotées", link: "/cours-or#pieces-cotees" },
        {
          underLabel: "Pièces non cotées",
          link: "/cours-or#pieces-non-cotees",
        },
        { underLabel: "Pièces modernes", link: "/cours-or-moderne" },
      ],
    },
    {
      label: "Actualités",
      link: "https://or.fr/actualites",
      content: [],
    },
    {
      label: (
        <span className="flex items-center justify-center">
          <FaMapMarkerAlt className="ml-2 text-xl text-gold" /> Nos comptoirs
        </span>
      ),
      link: "/#places",
      content: [],
    },
    {
      label: "Prendre RDV",
      link: "/contact",
      content: [],
    }
  ];

  return (
    <div className="w-full">
      
      {/* Barre des métaux précieux */}
      <div className="hidden xl:block w-full bg-black text-gold p-2 ">
        <Wrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center font-semibold text-sm md:text-base">
            <div className="min-w-[120px]">
              PLATINE <span className="text-white">942.76 $</span>{" "}
              <span className="text-red-500">-0.47%</span>
            </div>
            <div className="min-w-[120px]">
              OR <span className="text-white">2942.76 $</span>{" "}
              <span className="text-red-500">-0.47%</span>
            </div>
            <div className="min-w-[120px]">
              ARGENT <span className="text-white">2942.76 $</span>{" "}
              <span className="text-red-500">-0.47%</span>
            </div>
            <div className="min-w-[120px]">
              PALLADIUM <span className="text-white">2942.76 $</span>{" "}
              <span className="text-red-500">-0.47%</span>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Navbar principale */}
      <header className="w-full bg-[#1A1A1A] shadow-md">
        <Wrapper>
          <div className="flex justify-between items-center py-6 z-50 ">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-52 hover:scale-110 transition-transform"
              />
            </Link>
            <ul className="hidden xl:flex items-center gap-6 text-base text-white">
              {navElement.map((item, index) => (
                <li
                  key={index}
                  className="p-3 hover:text-gold transition-all"
                >
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
              <li className="p-3">
                <div className="flex items-center bg-[#4A4A4B] hover:bg-gold transition-colors rounded-lg">
                  <div className="bg-gold text-black px-4 py-2 rounded-l-lg">
                    No Vert
                  </div>
                  <div className="px-4 py-2">00-00-00-00</div>
                </div>
              </li>
              <li>
                <Link
                  to="/account"
                  className="px-6 py-2 rounded-lg bg-gold text-white hover:bg-[#A67C00] transition-all"
                >
                  Connexion
                </Link>
              </li>
            </ul>
            <span onClick={() => setOpen(!open)}>
  <i
    className={`xl:hidden block text-5xl cursor-pointer text-white transition-transform duration-300 ${
      open ? "bx bx-x" : "bx bx-menu"
    }`}
  ></i>
</span>

          </div>

          {/* Menu mobile */}
          <MobileNavBar open={open} menuElement={menuElement} navElement={navElement} />
        </Wrapper>

        {/* Menu secondaire */}
        <Wrapper>
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#A67C00] p-0 rounded-t-lg">
            <ul className="hidden xl:flex items-stretch text-base font-medium">
              {menuElement.map((item, index) => (
                <li
                  key={index}
                  className={`group relative flex-1 text-center hover:bg-[#FFD700] transition-all py-2 ${
                    index === 0
                      ? "rounded-tl-lg"
                      : index === menuElement.length - 1
                      ? "rounded-tr-lg"
                      : ""
                  }`}
                >
                  <Link
                    to={item.link}
                    className="block px-3"
                  >
                    {item.label}
                  </Link>
                  {item.content.length > 0 && (
                    <div className="absolute z-60 left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 w-full">
                      {item.content.map((secondItem, i) => (
                        <Link
                          key={i}
                          to={secondItem.link}
                          className="p-2 hover:bg-gray-200 w-full text-left"
                        >
                          {secondItem.underLabel}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Wrapper>
      </header>
    </div>
  );
}

import { useState } from "react";
import logo from "../assets/logo.png";
import { FaMapMarkerAlt } from 'react-icons/fa';
import Wrapper from "./Wrapper";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navElement = ["FAQ", "Presse", "A propos", "Nous contacter"];
  const menuElement = [
    {
      label: "Achat d'or",
      content: [
        { underLabel: "Pièce d'or ", link: "#" },
        { underLabel: "Lingot d'or ", link: "#" },
        { underLabel: "Investir dans l'or ", link: "#" },
      ],
    },
    {
      label: "Vente d'or",
      
      content: [
        { underLabel: "Pièce d'or ", link: "#" },
        { underLabel: "Lingot d'or  ", link: "#" },
        { underLabel: "Rachat bijoux et montres en Or  ", link: "#" },
       
      ],
    },
    {
      label: "Cours de l'or",
      
      content: [
        { underLabel: "Pièces côtées ", link: "#" },
        { underLabel: "Pièces non côtées", link: "#" },
        { underLabel: "Pièces modernes", link: "#" },
      ],
    },
    {
      label: "Actualités",
      
      content: [],
    },
    {
      label:  (
        <span className="flex items-center ">
          <FaMapMarkerAlt className="ml-2 text-xl" /> {/* Icône avec espace à gauche */}
          Nos comptoirs
        </span>
      ),
      
      content: [
        
      ],
    },
    {
      label: "Prendre rendez-vous",
      
      content: [],
        
      
    },
    {
      
      icon: "bx bx-search",
      content: [
        
      ],
    },
  ];
  return (
    <>
      <div className=" w-full">
        <div className="w-full  bg-black">
          <Wrapper>
            <div className=" grid grid-cols-4 text-white">
              <div>
                PLATINE 942.76 $ <span className="text-red-500">0.47%</span>
              </div>
              <div>
                OR 2942.76 $ <span className="text-red-500">0.47%</span>
              </div>
              <div>
                Argent 2942.76 $ <span className="text-red-500">0.47%</span>
              </div>
              <div>
                PALLADIUM 2942.76 $ <span className="text-red-500">0.47%</span>
              </div>
            </div>
          </Wrapper>
        </div>
        <header className="w-full bg-[#323235]">
          <Wrapper>
            <div className="flex justify-between items-center py-6   drop-shadow-md">
              <a href="#">
                <img
                  src={logo}
                  alt=""
                  className="w-52 hover:scale-105 transition-all"
                />
              </a>
              <ul className="hidden xl:flex items-center gap-4  text-base text-white ">
                {navElement.map((item, index) => (
                  <li
                    key={index}
                    className="p-3 hover:text-[#A78C4B] rounded-md transition-all"
                  >
                    {item}
                  </li>
                ))}

                <li className="p-3  hover:text-[##A78C4B] rounded-md transition-all ">
                  <div className="  rounded-lg  flex bg-[#4A4A4B] hover:bg-green-800 ">
                    <div className="rounded-lg bg-green-800 px-4 py-2 ">
                      No Vert{" "}
                    </div>{" "}
                    <div className="px-4 py-2 ">99-88-88-88</div>{" "}
                  </div>
                </li>
                <li className="  hover:text-[##A78C4B] rounded-lg transition-all">
                  <button className="px-6 rounded-lg bg-white hover:bg-[#A78C4B] hover:text-white py-2 text-black">
                    Connexion
                  </button>
                </li>
              </ul>
              <i
                className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              ></i>
              <div
                className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
                  isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transition: "transform 0.3s ease, opacity 0.3s ease ",
                }}
              >
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer ">
                  Faq
                </li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer ">
                  Presse
                </li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer ">
                  Nous contacter
                </li>
              </div>
            </div>
            <div className="bg-[#D6BE82] p-0 rounded-t-lg">
              {" "}
              <ul className="hidden xl:flex   items-stretch  font-semibold text-base relative   ">
                {menuElement.map((item, index) => (
                  <li
                    key={index}
                    className="group relative  flex items-center  justify-center flex-1 p-3 hover:bg-yellow-600 text-center transition-all"
                  >
                    <i className={item.icon + " text-2xl "}></i>

                    {item.label}
                    {item.content.length > 0 ? (
                      <div className="absolute z-50 left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 w-full">
                        {item.content.map((secondItem, index) => (
                          <button
                            key={index}
                            className="p-2 hover:bg-gray-200 w-full text-left"
                          >
                            {secondItem.underLabel}
                          </button>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Wrapper>
        </header>
      </div>
    </>
  );
}

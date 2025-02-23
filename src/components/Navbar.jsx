import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navElement = ["FAQ", "Presse", "A propos", "Nous contacter"];
  const menuElement = [
    {
      label: "Achat d'or",
      content: [
        { underLabel: "Option1dds ", link: "#" },
        { underLabel: "Option1dsdds ", link: "#" },
      ],
    },
    {
      label: "Vente d'or",
      icon: "bx bx-search",
      content: [
        { underLabel: "Option1 ", link: "#" },
        { underLabel: "Option1 ", link: "#" },
      ],
    },
  ];
  return (
    <>
      <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
        <div className="bg-black grid grid-cols-4 text-white">
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
        <header className=" bg-[#323235]">
          <div className="flex justify-between items-center py-6 px-8 md:px-10  drop-shadow-md">
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
              style={{ transition: "transform 0.3s ease, opacity 0.3s ease " }}
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
          <div className="bg-[#D6BE82] mx-4 p-0 rounded-t-lg">
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
                    <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 w-full">
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
              {/* <li className="group relative flex-1 p-3 hover:bg-yellow-600 text-center transition-all">
                Achat d'Or
                <div className="absolute z-10 left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 w-full">
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 1
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 2
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 3
                  </button>
                </div>
              </li>
              <li className="group relative flex-1 p-3 hover:bg-yellow-600 text-center transition-all">
                Achat d'Or
                <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 w-full">
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 1
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 2
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 3
                  </button>
                </div>
              </li>
              <li className="group relative flex-1 p-3 hover:bg-yellow-600 text-center transition-all">
                Achat d'Or
                <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 w-full">
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 1
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 2
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 3
                  </button>
                </div>
              </li>
              <li className="group relative flex-1 p-3 hover:bg-yellow-600 text-center transition-all">
                Achat d'Or
                <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 w-full">
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 1
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 2
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 3
                  </button>
                </div>
              </li>
              <li className="group relative flex-1 p-3 hover:bg-yellow-600 text-center transition-all">
                Achat d'Or
                <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-md p-2 w-full">
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 1
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 2
                  </button>
                  <button className="p-2 hover:bg-gray-200 w-full text-left">
                    Option 3
                  </button>
                </div>
              </li>
              <li className="group relative flex-1 p-3 hover:bg-yellow-600 text-center transition-all">
                Achat d'Or
              </li> 

              <li className=" flex-1 flex items-center p-3 bg-[#6C5147] hover:bg-yellow-600  text-center transition-all">
                <i className="bx bx-location-plus text-2xl "></i>
                Achat d'Or
              </li>
              <li className=" flex-1 p-3 bg-[#8F7130] hover:bg-yellow-600 text-center transition-all">
                Achat d'Or
              </li>
              <li className=" p-3 px-5 hover:bg-yellow-600 text-center transition-all">
                <i className="bx bx-search text-2xl"></i>
              </li>*/}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

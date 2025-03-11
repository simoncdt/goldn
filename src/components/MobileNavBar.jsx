/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function MobileNavBar({ open, menuElement, navElement }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Bloque le scroll de la page
    } else {
      document.body.style.overflow = ""; // Réactive le scroll
    }

    return () => {
      document.body.style.overflow = ""; // Nettoyage au démontage
    };
  }, [open]);
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -500 }}
            transition={{ duration: 0.3 }}
            className="absolute xl:hidden shadow-2xl top-50 left-0 w-full z-50 h-screen bg-yellow-600 overflow-y-auto"
          >
            <div className=" shadow-lg pb-24 text-xl font-semibold uppercase bg-yellow-600 text-white pt-5 absolute w-full z-50 ">
              <ul className="flex flex-col justify-center items-start ">
                {menuElement.map((item, index) => (
                  <li
                    key={index}
                    className="w-full"
                  >
                    <div className=" w-full  py-3 border-b  px-[15px] text-lg font-medium ">
                      <Link
                        to={item.link}
                        className="w-full block"
                      >
                        {item.label}
                      </Link>
                    </div>
                    {item.content.length != 0 && (
                      <ul className="bg-white text-base font-medium text-black w-full py-4">
                        {item.content.map((item2, index) => (
                          <li
                            key={index}
                            className="pl-[25px] py-1"
                          >
                            <Link
                              to={item2.link}
                              className="w-full block"
                            >
                              <span>
                                <i className="bx bx-chevron-right"></i>
                              </span>{" "}
                              {item2.underLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                {navElement.map((item, index) => (
                  <li
                    key={index}
                    className="w-full"
                  >
                    <div className=" w-full  py-3 border-b  px-[15px] text-lg font-medium bg-[#343437] ">
                      <Link
                        to={item.link}
                        className="w-full block"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </li>
                ))}
                <li className="w-full bg-white">
                  <Link
                    to="/account"
                    className="px-6 text-black text-center flex items-center justify-center  py-5 shadow-xl m-2 rounded-lg bg-gold  hover:bg-[#343437] hover:text-white transition-all"
                  >
                    Connexion
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

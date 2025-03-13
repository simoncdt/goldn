import Button from "./button";
import Wrapper from "./Wrapper";
import CoinSlider from "../pages/Home/CoinSlider";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Overview() {
  
  return (
    <>
      <div className="block  w-full py-12">
        <div className="text-center text-2xl md:text-3xl px-5 font-semibold py-12">
          Cours du lingot et des pieces dOr et dargent
        </div>
        <div className="bg-[#343437] w-full ">
          <Wrapper>
            <ul className="flex ">
              <li className=" text-white px-5 py-5 text-base  border-b-8 border-yellow-600 ">
                Nos produits d'or
              </li>
              <Link to={"/cours-or"} className=" text-white px-5 py-5 text-base  hover:border-b-8 hover:border-white ">
                cours de l'Or{" "}
              </Link>
            </ul>
          </Wrapper>
        </div>
        <Wrapper>
          <CoinSlider />
        </Wrapper>
        <div className="text-center w-full text-white">
          <Button
            link={"/cours-or"}
            text="Voir les cours de LOR"
            className={"bg-[#8F7130] "}
          />
        </div>
      </div>
    </>
  );
}

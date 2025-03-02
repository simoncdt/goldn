import Button from "./button";
import Wrapper from "./Wrapper";
import CoinSlider from "../pages/Home/CoinSlider";
import { useState } from "react";

export default function Overview() {
  const productElement = ["Nos produits d'or", "cours de l'Or "];
  const [element, setElement] = useState(0);
  function changeShow(index) {
    setElement(index);
  }
  return (
    <>
      <div className="block  w-full py-12">
        <div className="text-center text-2xl md:text-3xl px-5 font-semibold py-12">
          Cours du lingot et des pieces dOr et dargent
        </div>
        <div className="bg-[#343437] w-full ">
          <Wrapper>
            <ul className="flex ">
              {productElement.map((item, index) => (
                <li
                  key={index}
                  className={` text-white px-5 py-5 text-base  ${
                    index == element ? " border-b-8 border-yellow-600  " : ""
                  } `}
                  onClick={() => changeShow(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Wrapper>
        </div>
        <Wrapper>
          {element == 0 ? (
            <CoinSlider />
          ) : (
            <>
              <div className="flex flex-col text-center pt-5 my-16 rounded-lg overflow-hidden shadow-lg flex-grow min-h-64">
                Cours de lor
              </div>
            </>
          )}
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

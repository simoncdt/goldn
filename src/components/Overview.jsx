import Button from "./button";
import Wrapper from "./Wrapper";
import CoinSlider from "../pages/Home/CoinSlider";

export default function Overview() {
  const productElement = ["Nos produits d'or", "cours de l'Or "];
  return (
    <>
      <div className="block  w-full py-12">
        <div className="text-center text-3xl font-semibold py-12">
          Cours du lingot et des pieces dOr et dargent
        </div>
        <div className="bg-[#343437] w-full ">
          <Wrapper>
            <ul className="flex ">
              {productElement.map((item, index) => (
                <li
                  key={index}
                  className={` text-white px-5 py-5 text-base  ${
                    index == 0 ? " border-b-8 border-yellow-600  " : ""
                  } `}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Wrapper>
        </div>
        <Wrapper>
          <CoinSlider />
        </Wrapper>
        <div className="text-center w-full text-white">
          <Button
            text="Voir les cours de LOR"
            className={"bg-[#8F7130] "}
          />
        </div>
      </div>
    </>
  );
}

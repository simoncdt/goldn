import CoinSlider from "./CoinSlider";

export default function Overview() {
  const productElement = [
    "Nos produits d'or",
    "Nos produits Argent",
    "cours dor",
    "cours de largetn",
  ];
  return (
    <>
      <div className="block">
        <div className="text-center text-3xl font-semibold py-12">
          Cours du lingot et des pieces dOr et dargent
        </div>
        <div className="bg-[#343437]">
          <ul className="flex ">
            {productElement.map((item, index) => (
              <li
                key={index}
                className={` text-white px-5 py-5 text-lg  ${
                  index == 0 ? " border-b-8 border-yellow-600  " : ""
                } `}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <CoinSlider />
        </div>
        <div className="text-center w-full text-white">
          <button className="mx-auto bg-yellow-300 rounded-lg px-10 py-4 text-base">
            {" "}
            Voir les cours de LOR
          </button>
        </div>
      </div>
    </>
  );
}

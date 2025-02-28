
export default function PriceCard() {
  const data = [
    { product: "Lingot d'or 1kg", value: "24422806.20", percent: "+0,25%" },
    { product: "Once OR,Nyc", value: "2806.20", percent: "+0,25%" },
    { product: "Once OR,Nyc", value: "2806.20", percent: "+0,25%" },
  ];
  return (
    <div className="hidden md:block absolute top-12 right-8 z-10 pointer-events-none">
      <div className="w-72 border bg-black bg-opacity-50 rounded-lg text-[15px] text-white p-4">
        <div className="mb-4 cursor-pointer hover:text-yellow-400 ">
          {" "}
          Cours de lOr du 21/02/25
        </div>
        <div>
          <ul className="flex gap-4 mb-3">
            <li className="border-b-2  border-white  ">France</li>
            <li className="text-gray-400 hover:text-white">Internationnal </li>
            <li className="ml-auto">$/</li>
          </ul>
          <ul className="text-[12px] ">
            {data.map((item, index) => (
              <li
                key={index}
                className="flex py-1 h-7  "
              >
                {" "}
                <span className="hover:border-b-2 hover:border-white">
                  {item.product}
                </span>{" "}
                <span className="ml-auto">{item.value}</span>{" "}
                <span
                  className={`ml-4 ${
                    item.percent[0] == "+" ? " text-green-400" : "text-red-400"
                  }`}
                >
                  {item.percent}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

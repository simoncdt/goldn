export default function TabCoinCoted({ showButton = 1, header }) {
  const coinCoted = [
    {
      image: "/coin1.jpg",
      title: "20 $",
      cours: "2.244 $",
      variation: "$10",
      prime: 5,
    },
    {
      image: "/coin1.jpg",
      title: "20 $",
      cours: "2.244 $",
      variation: "$20",
      prime: 3,
    },
    {
      image: "/coin1.jpg",
      title: "20 $",
      cours: "2.244 $",
      variation: "$30",
      prime: 2,
    },
  ];
  return (
    <>
      <div className="py-9 px-2  w-full  ">
        <div className="text-3xl mb-6 ">{header}</div>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full   overflow-hidden rounded-t-lg">
            <thead>
              <tr className="bg-[#686868] text-white text-sm leading-normal">
                <th className="py-3 text-left"></th>
                <th className="py-3 px-6 text-left ">Intitule</th>
                <th className="py-3 px-6 text-left w-[12.5%]">Cours</th>
                <th className="py-3 px-6 text-left w-[12.5%]">Variation</th>
                <th className="py-3 px-6 text-left w-[12.5%]">prime</th>
                {showButton == 0 ? "" : <th className=" w-[12.5%]"></th>}
              </tr>
            </thead>
            <tbody className="text-gray-600 text-base font-light">
              {coinCoted.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-l border-gray-200 bg-[#FAFAFA] hover:bg-gray-100"
                >
                  <td className="w-[90px]  h-24 bg-white p-2">
                    <img
                      className="w-16 h-16 mx-auto"
                      src={item.image}
                      alt=""
                    />
                    {item.id}
                  </td>
                  <td className=" px-4 ">{item.title}</td>
                  <td className="py-3 px-6">{item.cours}</td>
                  <td className="py-3 px-6">{item.prime}</td>
                  <td className="py-3 px-6">{item.variation}</td>

                  {showButton === 0 ? (
                    ""
                  ) : showButton === 1 ? (
                    <td className="py-3 px-2 text-right">
                      <button className="mx-auto px-9 rounded-lg text-white py-2 bg-slate-500">
                        Acheter
                      </button>
                    </td>
                  ) : (
                    <td>
                      <div className="flex justify-center gap-2">
                        <button className="px-9 rounded-lg text-white py-2 bg-slate-500">
                          Acheter
                        </button>
                        <button className="px-9 rounded-lg text-white py-2 bg-slate-500">
                          Acheter
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

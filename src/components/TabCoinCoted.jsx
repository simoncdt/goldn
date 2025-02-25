export default function TabCoinCoted() {
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
      <div className="py-9 px-16">
        <div className="text-3xl mb-6 ">Pieces Cotées</div>
        <div className="overflow-x-auto">
          <table className="min-w-full   overflow-hidden rounded-t-lg">
            <thead>
              <tr className="bg-[#686868] text-white text-sm leading-normal">
                <th className="py-3 text-left"></th>
                <th className="py-3 px-6 text-left">Intitule</th>
                <th className="py-3 px-6 text-left">Cours</th>
                <th className="py-3 px-6 text-left">Variation</th>
                <th className="py-3 px-6 text-left">prime</th>
                <th className=""></th>
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
                  <td className="w-[540px] px-4 ">{item.title}</td>
                  <td className="py-3 px-6">{item.cours}</td>
                  <td className="py-3 px-6">{item.prime}</td>
                  <td className="py-3 px-6">{item.variation}</td>
                  <td className="py-3 px-2 text-right">
                    <button className="mx-auto px-9 rounded-lg text-white py-2 bg-slate-500">
                      Acheter
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

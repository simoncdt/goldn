/* eslint-disable react/prop-types */
export default function TabCoinNotCoted({coinImage}) {

  
  return (
    <>
      <div className="py-9 px-2  w-full">
        {/* <div className="text-3xl mb-6 ">Pieces non Cotées</div> */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed w-full text-[11px] md:text-sm   overflow-hidden rounded-t-lg">
            <thead>
              <tr className="bg-[#686868] text-white  leading-normal">
                <th className="py-3 text-left xs:w-[64px] sm:w-[90px] "></th>
                <th className="py-3 md:px-6 text-left ">Intitule</th>
                <th className="py-3 md:px-6 text-left md:w-1/5">Prix</th>
                <th className="py-3 md:px-6 text-left md:w-1/5">Variation</th>
               
              </tr>
            </thead>
            <tbody className="text-gray-600  font-light">
              {coinImage.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-l border-gray-200 bg-[#FAFAFA] hover:bg-gray-100"
                >
                  <td className="bg-white p-2 max-w-[90px]  ">
                    <img
                      className=" aspect-square"
                      src={item.image}
                      alt=""
                    />
                    {item.id}
                  </td>
                  <td className=" md:py-3 md:px-6">{item.title}</td>
                  <td className="md:py-3 md:px-6">{item.cours}</td>
                  <td className="md:py-3 md:px-6">{item.prime}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

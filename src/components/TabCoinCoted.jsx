import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function TabCoinCoted({ showButton = 1, header, button,coinCoted }) {
 
  return (
    <>
      <div className="py-9 px-2  w-full  ">
        <div className="text-3xl mb-6 ">{header}</div>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border- text-[11px] md:text-sm table-fixed w-full border-black  overflow-hidden rounded-t-lg">
            <thead>
              <tr className="bg-[#686868] text-white leading-normal">
                <th className="py-3 text-left xs:w-[64px] sm:w-[90px] "></th>
                <th className="py-3 md:px-6 text-left ">Intitule</th>
                <th className="py-3 md:px-6 text-left md:w-[12.5%]">Cours</th>
                <th className="py-3 md:px-6 text-left md:w-[12.5%]">
                  {" "}
                  <span className="md:hidden">Var.</span>
                  <span className="hidden md:block">Variation</span>
                </th>
                <th className="py-3 md:px-6 text-left md:w-[12.5%]">
                  <span className="md:hidden">Prime</span>
                  <span className="hidden md:block">Prime</span>
                </th>
                {showButton == 0 ? (
                  ""
                ) : (
                  <th className="hidden xs:table-cell w-[160px] 3xl:w-[270px]"></th>
                )}
              </tr>
            </thead>
            <tbody className="text-gray-600  font-light">
              {coinCoted.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-l border-gray-200 bg-[#FAFAFA] hover:bg-gray-100"
                >
                  <td className="bg-white p-2  ">
                    <img
                      className=" aspect-square "
                      src={item.image}
                      alt=""
                    />
                    {item.id}
                  </td>
                  <td className=" px-4 ">{item.title}</td>
                  <td className="md:py-3 md:px-6">{item.cours}</td>
                  <td className="md:py-3 md:px-6">{item.prime}</td>
                  <td className="md:py-3 md:px-6">{item.variation}</td>

                  {showButton === 0 ? (
                    ""
                  ) : showButton === 1 ? (
                    <td className="hidden md:block py-3 px-2 text-right border-r-2">
                      <Link to={'/contact'} className="mx-auto px-9 rounded-lg text-white py-2 bg-slate-500">
                        {button || "Acheter"}
                      </Link>
                    </td>
                  ) : (
                    <td className="hidden md:table-cell h-full py-3 px-2 text-right border-r-2">
                      <div className=" text-center flex flex-col 3xl:flex-row gap-2 items-center h-full  3xl:flex justify-center ">
                        <Link to={'/contact'} className="px-9 w-32 rounded-lg text-white py-2 mb-1 3xl:mb-0 bg-slate-500 ">
                          Acheter
                        </Link>
                        <Link  to={'/contact'}className="px-19 w-32 rounded-lg text-white py-2 bg-slate-500 ">
                          Vendre
                        </Link>
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

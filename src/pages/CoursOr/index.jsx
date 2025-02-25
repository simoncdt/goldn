/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import TabCoinNotCoted from "../../components/TabCoinNotCoted";
import WhyGold from "../../components/WhyGold";
import Button from "../../components/button";
import ShowCase from "../../components/ShowCase";
import CoursFrame from "./CoursFrame";
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
export default function index() {
  return (
    <>
      <CoursFrame
        tabTitle1={"Cours de l'Or en France - Pièces Cotées"}
        tabTitle2={"Cours de l'Or en France - Pièces non Cotées"}
        showButton={2}
        title={"Cours et Cotation de l'Or en bourse"}
        presentation={
          <>
            {" "}
            Toutes nos agences sont disponibles. Reprise de toutes les
            cotations. <br /> Pour connaître le prix de l’Or, le Comptoir
            National de lOr vous informe des cours de l’Or au quotidien.{" "}
            <p className="font-semibold mt-5">
              Consultez le cours des pièces cotées et des lingots en temps réel,
              ainsi que les prix des pièces non cotées.
            </p>
          </>
        }
      >
        <div className="">
          <div className="text-3xl mb-6 ">Cours de lOr (International)</div>
          <div className="block ">
            {/*Premier tabb */}

            <div className="py-9 px-2  w-full">
              <div className="text-lg mb-6 ">
                Temps réel NYC, mardi 25 février 2025 22h59
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full   overflow-hidden rounded-t-lg">
                  <thead>
                    <tr className="bg-[#686868] text-white text-sm leading-normal">
                      <th className="py-3 w-1/5"></th>
                      <th className="py-3 px-5 text-left ">cours</th>
                      <th className="py-3 px-5 text-left ">min</th>
                      <th className="py-3 px-5 text-left ">max</th>
                      <th className="py-3 px-5 text-left ">moy</th>
                      <th className="py-3 px-5 text-left ">var</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-base font-light">
                    {coinCoted.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-l border-gray-200 bg-[#FAFAFA] hover:bg-gray-100"
                      >
                        <td className="py-3 px-6">{item.title}</td>
                        <td className=" py-3 px-6">{item.title}</td>
                        <td className="py-3 px-6">{item.cours}</td>
                        <td className="py-3 px-6">{item.prime}</td>
                        <td className="py-3 px-6">{item.cours}</td>
                        <td className="py-3 px-6">{item.prime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/*Deuxieme tabb */}

            <div className="py-9 px-2  w-full">
              <div className="text-lg mb-6 ">Fixings de Londres</div>

              <div className="overflow-x-auto">
                <table className="min-w-full   overflow-hidden rounded-t-lg">
                  <thead>
                    <tr className="bg-[#686868] text-white text-sm leading-normal">
                      <th className="py-3 w-1/5"></th>
                      <th className="py-3 px-5 text-left ">25/02/2025, PM</th>
                      <th className="py-3 px-5 text-left "> 25/02/2025, AM</th>
                      <th className="py-3 px-5 text-left "> 24/02/2025, PM</th>
                      <th className="py-3 px-5 text-left "> 24/02/2025, AM</th>
                      <th className="py-3 px-5 text-left ">var</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-base font-light">
                    {coinCoted.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-l border-gray-200 bg-[#FAFAFA] hover:bg-gray-100"
                      >
                        <td className="py-3 px-6">{item.title}</td>
                        <td className=" py-3 px-6">{item.title}</td>
                        <td className="py-3 px-6">{item.cours}</td>
                        <td className="py-3 px-6">{item.prime}</td>
                        <td className="py-3 px-6">{item.cours}</td>
                        <td className="py-3 px-6">{item.prime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </CoursFrame>
    </>
  );
}

/* eslint-disable react/prop-types */
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

// eslint-disable-next-line react/prop-types
export default function CoursFrame({
  showNonCoted = true,
  showButton,
  tabTitle1,
  tabTitle2,
  title,
  presentation,
  children,
}) {
  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />
          <div className="p-12">
            <div className=" flex flex-col text-3xl items-center font-semibold m-7">
              {title}
              <span>Le mardi 25 fevrier 2025</span>
            </div>
            <div className="text-center text-base">{presentation}</div>
          </div>

          <div className="md:px-16 mx-2">
            <div>
              <div
                className="text-2xl md:text-3xl mb-6 font-semibold"
                id="pieces-cotees"
              >
                {tabTitle1}
              </div>
              <div className="block xl:flex ">
                <TabCoinCoted showButton={showButton} />
                <TabCoinCoted showButton={showButton} />{" "}
              </div>
            </div>

            {showNonCoted ? (
              <div>
                <div
                  className="text-2xl md:text-3xl mb-6 font-semibold"
                  id="pieces-non-cotees"
                >
                  {tabTitle2}
                </div>
                <div className="block xl:flex ">
                  <TabCoinNotCoted /> <TabCoinNotCoted />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="">{children}</div>
            <div className="md:p-12">
              <div className=" flex flex-col text-2xl text-center md:text-3xl items-center font-semibold m-7">
                Vous voulez Vendre ou Acheter de l’Or ?
                <span>Vous avez besoin de conseils ?</span>
              </div>
              <div className="text-center  flex flex-col text-xl ">
                Le Comptoir National de l’Or, professionels de l’Or depuis 1976,
                est le spécialiste de lachat et de la vente dOr sous toutes ses
                formes.
                <span className="mt-4">
                  {" "}
                  Achetez ou vendez votre Or en ligne ou dans l’une de nos
                  agences proche de chez vous.
                </span>
                <p className=" mt-9 text-base">
                  Nous vous conseillons gratuitement en toute discrétion. Des
                  milliers de clients nous font confiance, faites comme eux !
                </p>
              </div>
              <div className="text-center flex mt-14 px-2">
                <Button
                link={"/achat-or"}
                  text={"Achetez de lOr"}
                  className={"bg-red-400 mr-5 block md:flex w-full md:w-fit mb-2"}
                />
                <Button
                link={"/vente-or"}
                  text={"Vendez votre Or"}
                  className={"bg-red-400 block w-full md:flex md:w-fit "}
                />
              </div>
            </div>
          </div>

          <ShowCase title={"Charte qualite"} />

          <Faq />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

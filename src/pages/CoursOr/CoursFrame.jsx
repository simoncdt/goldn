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
          <div>
            <div className="text-3xl mb-6 ">{tabTitle1}</div>
            <div className="block xl:flex ">
              <TabCoinCoted showButton={showButton} />
              <TabCoinCoted showButton={showButton} />{" "}
            </div>
          </div>

          {showNonCoted ? (
            <div>
              <div className="text-3xl mb-6 ">{tabTitle2}</div>
              <div className="block xl:flex ">
                <TabCoinNotCoted /> <TabCoinNotCoted />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="">{children}</div>
          <div className="p-12">
            <div className=" flex flex-col text-3xl items-center font-semibold m-7">
              Vous voulez Vendre ou Acheter de l’Or ?
              <span>Vous avez besoin de conseils ?</span>
            </div>
            <div className="text-center  flex flex-col text-xl ">
              Le Comptoir National de l’Or, professionels de l’Or depuis 1976,
              est le spécialiste de lachat et de la vente dOr sous toutes ses
              formes.
              <span className="mt-4">
                {" "}
                Achetez ou vendez votre Or en ligne ou dans l’une de nos agences
                proche de chez vous.
              </span>
              <p className=" mt-9 text-base">
                Nous vous conseillons gratuitement en toute discrétion. Des
                milliers de clients nous font confiance, faites comme eux !
              </p>
            </div>
            <div className="text-center mt-14">
              <Button
                text={"Achetez de lOr"}
                className={"bg-red-400 mr-5"}
              />
              <Button
                text={"Achetez de lOr"}
                className={"bg-red-400"}
              />
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

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
  const lingots = [
    {
      image: "/images/lingotEtPiece/lingot1kg.webp",
      title: "Lingot Or 1 Kg",
      cours: "88 870.00 €",
      variation: "-0.13%",
      prime: "0.2%",
    },
    {
      image: "/images/lingotEtPiece/lingot500g.webp",
      title: "Lingotin 500g",
      cours: "46 950.00 €",
      variation: "0.00%",
      prime: "5.9%",
    },
    {
      image: "/images/lingotEtPiece/lingot250g.webp",
      title: "Lingotin 250g",
      cours: "23 300.00 €",
      variation: "+3.10%",
      prime: "5.1%",
    },
    {
      image: "/images/lingotEtPiece/lingot100g.webp",
      title: "Lingotin 100g",
      cours: "9 620.00 €",
      variation: "-0.31%",
      prime: "8.5%",
    },
    {
      image: "/images/lingotEtPiece/lingot50g.webp",
      title: "Lingotin 50g",
      cours: "4 695.00 €",
      variation: "-2.19%",
      prime: "5.9%",
    },
    {
      image: "/images/lingotEtPiece/lingot20g.webp",
      title: "Lingotin 20g",
      cours: "1 925.00 €",
      variation: "-0.77%",
      prime: "8.5%",
    },
    {
      image: "/images/lingotEtPiece/onceor.webp",
      title: "Once d'Or",
      cours: "2 820.00 €",
      variation: "-7.24%",
      prime: "2.2%",
    },
    {
      image: "/images/lingotEtPiece/lingot10g.webp",
      title: "Lingotin 10g",
      cours: "970.00 €",
      variation: "-1.52%",
      prime: "9.4%",
    },
    {
      image: "/images/lingotEtPiece/lingot5g.webp",
      title: "Lingotin 5g",
      cours: "491.00 €",
      variation: "0.00%",
      prime: "10.7%",
    },
    {
      image: "/images/lingotEtPiece/20us.webp",
      title: "20 $ US",
      cours: "3 050.00 €",
      variation: "-1.29%",
      prime: "14.2%",
    },
    {
      image: "/images/lingotEtPiece/10us.jpg",
      title: "10 $ US",
      cours: "Nous contacter",
      variation: "",
      prime: "",
    },
    {
      image: "/images/lingotEtPiece/5us.jpg",
      title: "5 $ US",
      cours: "700.00 €",
      variation: "0.00%",
      prime: "4.9%",
    },
  ];
  
  const pieces = [
    {
      image: "/images/lingotEtPiece/napoleon.jpg",
      title: "Napoléon 20 Frs (Louis d'Or)",
      cours: "521.80 €",
      variation: "-0.78%",
      prime: "1.3%",
    },
    {
      image: "/images/lingotEtPiece/croixsuisse.jpg",
      title: "Croix Suisse 20 Frs",
      cours: "534.90 €",
      variation: "0.00%",
      prime: "3.8%",
    },
    {
      image: "/images/lingotEtPiece/50pesos.jpg",
      title: "50 Pesos",
      cours: "3 280.00 €",
      variation: "-3.24%",
      prime: "-1.4%",
    },
    {
      image: "/images/lingotEtPiece/krugerrand.jpg",
      title: "Krugerrand",
      cours: "2 859.75 €",
      variation: "-1.41%",
      prime: "3.7%",
    },
    {
      image: "/images/lingotEtPiece/george5.jpg",
      title: "Souverain George V",
      cours: "669.90 €",
      variation: "0.00%",
      prime: "3.2%",
    },
    {
      image: "/images/lingotEtPiece/elisabeth2.jpg",
      title: "Elisabeth II",
      cours: "680.00 €",
      variation: "+5.43%",
      prime: "4.8%",
    },
    {
      image: "/images/lingotEtPiece/deminapoleon.jpg",
      title: "Demi Napoléon / 10 Frs Napoléon",
      cours: "Nous contacter",
      variation: "",
      prime: "",
    },
    {
      image: "/images/lingotEtPiece/demisouverrain.jpg",
      title: "Demi Souverain",
      cours: "350.00 €",
      variation: "0.00%",
      prime: "7.8%",
    },
    {
      image: "/images/lingotEtPiece/10florins.jpg",
      title: "10 Florins",
      cours: "554.90 €",
      variation: "0.00%",
      prime: "3.3%",
    },
    {
      image: "/images/lingotEtPiece/20tunisie.jpg",
      title: "20 Frs Tunisie",
      cours: "535.00 €",
      variation: "+4.90%",
      prime: "3.9%",
    },
    {
      image: "/images/lingotEtPiece/latine.jpg",
      title: "Union Latine",
      cours: "534.80 €",
      variation: "0.00%",
      prime: "3.8%",
    },
    {
      image: "/images/lingotEtPiece/reichmark.jpg",
      title: "Reichsmark",
      cours: "680.00 €",
      variation: "0.00%",
      prime: "6.9%",
    },
  ];
  
  const piecesnoncote1 = [
    {
      image: "/images/lingotEtPiece/20francs.jpg",
      title: "20 francs Or (toutes effigies)",
      cours: "515.11 €",
      prime: "-0.11%",
    },
    
    {
      image: "/images/lingotEtPiece/croixsuisse.jpg",
      title: "Croix Suisse 20 Frs",
      cours: "515.11 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/souverrain.jpg",
      title: "Souverain (toutes effigies)",
      cours: "649.11 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/deminapoleon.jpg",
      title: "Demi Napoléon / 10 Frs Napoléon",
      cours: "257.49 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/demisouverrain.jpg",
      title: "Demi Souverain",
      cours: "324.56 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/10florins.jpg",
      title: "10 Florins",
      cours: "537.25 €",
      prime: "-0.11%",
    },
  ];
  
  const piecesnoncote2 = [
    {
      image: "/images/lingotEtPiece/20tunisie.jpg",
      title: "20 francs Tunisie",
      cours: "515.11 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/latine.jpg",
      title: "Union Latine",
      cours: "515.11 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/reichmark.jpg",
      title: "Reichsmark",
      cours: "635.94 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/20us.webp",
      title: "20 $ US",
      cours: "2 669.67 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/10us.jpg",
      title: "10 $ US",
      cours: "1 334.83 €",
      prime: "-0.11%",
    },
    {
      image: "/images/lingotEtPiece/5us.jpg",
      title: "5 $ US",
      cours: "667.41 €",
      prime: "-0.11%",
    },
  ];
  
  
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
                <TabCoinCoted showButton={showButton} coinCoted={lingots} />
                <TabCoinCoted showButton={showButton} coinCoted={pieces} />{" "}
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
                  <TabCoinNotCoted coinImage={piecesnoncote1} /> 
                  <TabCoinNotCoted coinImage={piecesnoncote2} /> 

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

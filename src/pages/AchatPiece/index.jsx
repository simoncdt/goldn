/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import TabCoinNotCoted from "../../components/TabCoinNotCoted";
import WhyGold from "../../components/WhyGold";

const presentationInfo = {
  title: "Achetez des Pièces d'Or",
  content: (
    <div className="text-base leading-normal text-gray-800 max-w-4xl">
      <strong className="text-black">Le Comptoir National de l’Or</strong>, professionnels de l’or depuis 1976, vous propose d’acheter votre or (pièces, lingots et lingotins) au juste prix dans nos Comptoirs partout en France.  
      <br />
      Pour connaître le <span className="font-semibold text-black">prix de l’or du jour</span>, consultez son cours en ligne.
      <br />
      Nous vous conseillons <span className="font-semibold">gratuitement et en toute discrétion</span>, avec ou sans rendez-vous.
      <br />
      <span className="font-semibold">Le Comptoir National de l’Or</span> vous accueille dans l’un de ses comptoirs en France.
    </div>
  ),
  button: "Se faire conseiller",
  link: "/contact",
};
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
export default function Index() {
  return (
    <div className="bg-[#FAFAFA] text-gray-900 font-sans">
      <Layout>
        <Navbar />

        {/* Présentation */}
          <Presentation presentationInfo={presentationInfo} />

        {/* Sections avec cartes */}
          <TabCoinCoted coinCoted={pieces} header="Pièces Cotées" />

          <TabCoinNotCoted coinImage={piecesnoncote1} header="Pièces non Cotées" />

        {/* Explication sur l'or */}
          <WhyGold />

        {/* FAQ */}
          <Faq />

        {/* Footer */}
        <Footer />
      </Layout>
    </div>
  );
}

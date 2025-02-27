/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import TabCoinNotCoted from "../../components/TabCoinNotCoted";
import WhyGold from "../../components/WhyGold";
import OfferSection from "../../components/OfferSection";
import HowWork from "./HowWork";

export default function index() {
  const presentationInfo = {
    title: " Rachat de bijoux Or et Montres",
    content: (
      <div>
        <strong></strong>
        <strong>Le Comptoir National de l’Or</strong> vous propose un service
        Rachat or : nous rachetons vos bijoux en or et en argent (bague,
        alliance, boucle doreille, collier, or dentaire, pendentif, gourmette,
        bracelet, sautoir, montre, bouton, bracelet, broche, débris, bijoux
        cassés, argenterie, couverts, pièce de monnaie, lingot...) au juste
        prix. Consultez le prix de lor et le prix de largent du jour et
        contactez votre comptoir le plus proche pour votre rachat dor et
        dargent., professionnels de l’Or depuis 1976 vous propose d’acheter
        votre Or (pièces, lingot et lingotins en or) au juste prix dans nos
        Comptoirs partout en France. Pour connaître le prix de lor du jour,
        consultez son cours en ligne.
        <br /> Nous vous conseillons
        <strong> gratuitement en toute discrétion</strong>
        gratuitement en toute discrétion avec ou sans rendez-vous.
        <br />
        <br /> Le Comptoir National de l’Or vous accueille dans l’un de ses
        comptoirs en France
      </div>
    ),
    button: "Se faire conseiller",

    link: "/contact",
  };
  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />
          <Presentation presentationInfo={presentationInfo} />

          <OfferSection />
          <HowWork />
          <Faq />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

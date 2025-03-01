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

export default function Index() {
  return (
    <div className="bg-[#FAFAFA] text-gray-900 font-sans">
      <Layout>
        <Navbar />

        {/* Présentation */}
        <section className="container mx-auto px-4 md:px-6 py-6">
          <Presentation presentationInfo={presentationInfo} />
        </section>

        {/* Sections avec cartes */}
        <section className="container mx-auto px-4 md:px-6 py-6">
          <TabCoinCoted header="Pièces Cotées" />
        </section>

        <section className="container mx-auto px-4 md:px-6 py-6">
          <TabCoinNotCoted header="Pièces non Cotées" />
        </section>

        {/* Explication sur l'or */}
        <section className="container mx-auto px-4 md:px-6 py-6">
          <WhyGold />
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 md:px-6 py-6">
          <Faq />
        </section>

        {/* Footer */}
        <Footer />
      </Layout>
    </div>
  );
}

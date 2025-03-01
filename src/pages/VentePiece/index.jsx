/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import TabCoinNotCoted from "../../components/TabCoinNotCoted";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";

export default function Index() {
  const presentationInfo = {
    title: "Vente Pièces d'Or",
    content: (
      <div className="text-base leading-normal text-gray-800 max-w-4xl">
        <strong className="text-black">Le Comptoir National de l’Or</strong>, professionnels de l’or depuis 1976, achète vos pièces d’or rapidement et en toute sécurité.
        <br />
        Vendez vos pièces d’or : <span className="font-semibold">Napoléon 20 Francs (Louis d’Or), Souverain George V, Croix Suisse 20 Francs, Krugerrand...</span>  
        <br />
        <br />
        Le paiement se fait immédiatement après évaluation de votre Or. L’estimation est <span className="font-semibold">gratuite et sans engagement</span>.
        <br />
        Consultez le <span className="font-semibold">prix de l’or du jour</span> et son cours.
        <br />
        <br />
        Vendez votre Or en toute sécurité sans sortir de chez vous ! Grâce au <span className="font-semibold">Gold Kit*</span>, vous pouvez vendre vos bijoux, pièces et lingots d’or directement en ligne.
        <br />
        <br />
        <Link className="text-blue-600 hover:text-blue-800 transition border-b border-black pb-1" to={"/faq"}>
          Voir la FAQ
        </Link>
      </div>
    ),
    button: "Se faire conseiller",
    link: "/contact",
  };

  return (
    <div className="bg-[#FAFAFA] text-gray-900 font-sans">
      <Layout>
        <Navbar />

        {/* Présentation */}
        <section className="container mx-auto px-4 md:px-6 py-6">
          <Presentation presentationInfo={presentationInfo} />
        </section>

        {/* Wrapper avec les tables */}
        <Wrapper>
          <section className="container mx-auto px-4 md:px-6 py-6">
            <TabCoinCoted header="Pièces Cotées" button="Vendre" />
          </section>

          <section className="container mx-auto px-4 md:px-6 py-6">
            <TabCoinNotCoted />
          </section>
        </Wrapper>

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

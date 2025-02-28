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

export default function index() {
  const presentationInfo = {
    title: "Vente Pièce d'Or",
    content: (
      <div>
        <strong></strong>
        <strong>Le Comptoir National de l’Or</strong> ,Le Comptoir National de
        l’Or, professionnels de l’Or depuis 1976 achète vos pièces d’Or
        rapidement et en toute sécurité. Vendez vos pièces dor : Napoléon 20
        Francs (Louis dOr), Souverain George V, Croix Suisse 20 Francs,
        Krugerrand ... Le paiement se fait immédiatement après évaluation de
        votre Or. Lestimation est gratuite et sans engagement. Consultez le
        prix de lor du jour et son cours. Vendez votre Or en toute sécurité
        sans sortir de chez vous ! Grâce au Gold Kit*, vous pouvez vendre vos
        bijoux, pièces et lingots d’Or et
        <br />
        <br />
        <Link
          className="border-b border-black"
          to={"/faq"}
        >
          
          *Voir Faq
        </Link>
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

          <Wrapper>
            <div className=" p-0 2xl:px-44">
              <TabCoinCoted header={"Pièces Cotées"} button={"Vendre"} />
              <TabCoinNotCoted />
            </div>
          </Wrapper>

          <Faq />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

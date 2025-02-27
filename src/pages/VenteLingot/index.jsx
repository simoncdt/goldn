/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import TabCoinNotCoted from "../../components/TabCoinNotCoted";
import { Link } from "react-router-dom";

export default function index() {
  const presentationInfo = {
    title: " Vente Lingot d'Or",
    content: (
      <div>
        Vous avez la possibilité de revendre vos lingots dor et lingotins dor au
        Comptoir National de lOr directement en agence. Quel que soit leur poids
        (1, 5, 10, 20, 50, 10, 250, 500 grammes, 1 kg), nous rachetons votre Or
        en toute sécurité, en fonction du cours du jour. Vous pouvez aussi
        bénéficier dun service destimation gratuite de votre or. Il vous suffira
        de remplir le formulaire afin de recevoir une enveloppe de retour
        sécurisée Gold Kit*. Consultez le prix de lor du jour pour être au
        courant de la valeur potentiel de votre or et prenez RDV dans votre
        comptoir le plus proche pour effectuer votre transaction de rachat dor.{" "}
        <br />
        <br />
        Professionnels de l’Or depuis 1976, le Comptoir National de lOr achète
        votre or ainsi que dautres métaux précieux (argent, platine, palladium)
        rapidement et en toute sécurité.
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

          <div className=" p-0 2xl:px-44">
            <TabCoinCoted
              header={"Pièces Cotées"}
              button={"Vendre"}
            />
          </div>
          <Faq />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

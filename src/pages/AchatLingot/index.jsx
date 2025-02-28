/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import TabCoinNotCoted from "../../components/TabCoinNotCoted";

export default function index() {
  const presentationInfo = {
    title: " Achat lingot d'Or",
    content: (
      <div>
        <strong></strong>Vous souhaitez
        <strong> acheter des lingots d’Or </strong> agréés sur le marché
        interbancaire ? Le Comptoir National de lOr propose de lOr de haute
        qualité dune pureté allant jusquà 999,9 millièmes d’or. Tous les
        lingots d’Or son dotés d’un numéro permettant d’assurer leur
        traçabilité. Ils sont présentés sous blister afin de ne pas dégrader
        leur qualité. Consultez le prix de lor du jour et investissez dans
        lor. <br />
        <br />Un QR code unique est généré pour chaque 
        <strong>lingotin </strong>
        offrant ainsi une garantie du fabricant d’origine. Nous vous proposons des Lingots d’Or et lingotins de différentes tailles et poids : lingot 5, 10, 20, 50, 100, 250, 500 grammes. Vous pouvez également vous procurer un lingot d’Or d’1 kilo ou une barre de 400 onces.


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
          <TabCoinCoted />
          <Faq />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

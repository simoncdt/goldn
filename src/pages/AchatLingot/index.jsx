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
  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />

          <Presentation presentationInfo={presentationInfo} />
          <TabCoinCoted coinCoted={lingots} />
          <Faq />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

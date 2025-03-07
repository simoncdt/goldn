/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import { Link } from "react-router-dom";

export default function Index() {
  const presentationInfo = {
    title: "Vente Lingots d'Or",
    content: (
      <div className="text-base leading-relaxed text-gray-800 max-w-3xl">
        Vous avez la possibilité de revendre vos lingots d’or et lingotins d’or
        au
        <span className="font-semibold"> Comptoir National de l’Or</span>{" "}
        directement en agence.
        <br />
        Quel que soit leur poids (
        <span className="font-semibold">
          1g, 5g, 10g, 20g, 50g, 100g, 250g, 500g, 1kg
        </span>
        ), nous rachetons votre or en toute sécurité, en fonction du cours du
        jour.
        <br />
        <br />
        Vous pouvez également bénéficier d’un{" "}
        <span className="font-semibold">service d’estimation gratuite</span> de
        votre or. Il vous suffit de remplir le formulaire pour recevoir une{" "}
        <span className="font-semibold">
          enveloppe de retour sécurisée Gold Kit*
        </span>
        . Consultez le{" "}
        <span className="font-semibold">prix de l’or du jour</span> pour
        connaître la valeur actuelle et prenez rendez-vous dans votre comptoir
        le plus proche pour effectuer votre transaction de rachat d’or.
        <br />
        <br />
        <span className="font-semibold">
          Professionnels de l’Or depuis 1976
        </span>
        , le Comptoir National de l’Or achète également d’autres métaux précieux
        comme l’
        <span className="font-semibold">
          argent, le platine et le palladium
        </span>
        , rapidement et en toute sécurité.
        <br />
        <br />
        <Link
          className="text-blue-600 hover:text-blue-800 transition border-b border-black pb-1"
          to={"/faq"}
        >
          Voir la FAQ
        </Link>
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
    <div className="bg-[#FAFAFA] text-gray-900 font-sans">
      <Layout>
        <Navbar />

        {/* Présentation */}
        <section className="container mx-auto px-4 md:px-6 py-6">
          <Presentation presentationInfo={presentationInfo} />
        </section>

        {/* Table des pièces cotées */}
        <section className="container mx-auto px-4 md:px-6 py-6">
          <TabCoinCoted
            header="Pièces Cotées"
            button="Vendre"
            coinCoted={lingots}
          />
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

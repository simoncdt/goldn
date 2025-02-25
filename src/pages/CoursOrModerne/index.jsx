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
import CoursFrame from "../CoursOr/CoursFrame";

export default function index() {
  return (
    <>
      <CoursFrame
        showNonCoted={false}
        showButton={0}
        title={"Cours et Cotation des pièces d'Or modernes"}
        presentation={
          "American Eagle, Buffalo, Britannia, Maple Leaf, Kangourou, Krugerrand : l’achat de pièces d’or contribue à diversifier ses placements. Si le métal précieux reste une valeur refuge, les pièces d’or ont un atout : leur flexibilité. Le Comptoir National de l’Or, professionels de l’Or depuis 1976, est le spécialiste de l'achat et de la vente d'Or sous toutes ses formes. Un large choix de pièces d'or moderne est proposé sous différentes effigies et formes : 1Oz, 1/2 Oz, 1/4 Oz, 1/10"
        }
      />
    </>
  );
}

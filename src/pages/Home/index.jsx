/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Download from "./Download";
import FindUs from "./FindUs";
import News from "./News";
import NewsLetter from "./NewsLetter";
import OfferSection from "../../components/OfferSection";
import Overview from "../../components/Overview";
import Places from "./Places";
import Review from "./ReviewSlider";
import ShowCase from "../../components/ShowCase";
import Slider from "./Slider";
import BuySell from "./BuySell";
import { useEffect, useState } from "react";
import Popup from "../../components/PopUp";
export default function Index() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsPopupOpen(true); // Afficher le popup au chargement
  }, []);

  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Popup />
        <Layout>
          <Navbar  />
          <Slider />
          <Overview />
          <ShowCase />
          <Review />
          <OfferSection />
          <BuySell />
          <ShowCase title={"Nos services"} />
          <Places />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

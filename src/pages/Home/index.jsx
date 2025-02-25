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
export default function index() {
  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />
          <Slider />
          <Overview />
          <ShowCase />
          {/* <FindUs /> */}
          <Review />
          <OfferSection />
          <BuySell/>
          {/* <News /> */}
          <NewsLetter />
          <ShowCase title={"Nos services"} />
          <Places />
          {/* <Download /> */}
          <Footer />
        </Layout>
      </div>
    </>
  );
}

/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Download from "./Download";
import FindUs from "./FindUs";
import News from "./News";
import OfferSection from "./OfferSection";
import Overview from "./Overview";
import Places from "./Places";
import Review from "./ReviewSlider";
import ShowCase from "./ShowCase";
import Slider from "./Slider";
export default function index() {
  return (
    <>
      {/* <Navbar />
      <Slider/>
      <Overview />
      <ShowCase />
      <FindUs />
      <Review />
      <OfferSection/> 
      <News/>
      <ShowCase title={"Nos services"}/> 
      <Places/>
      <Download/>*/}
      <Footer/>
      <div className="bg-red-300"></div>
    </>
  );
}

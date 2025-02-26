/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import TabCoinNotCoted from "../../components/TabCoinNotCoted";
import Wrapper from "../../components/Wrapper";

export default function index() {
  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />
          <Wrapper>
          <TabCoinCoted header={"Pièces Cotées"} />
          <TabCoinNotCoted />
          </Wrapper>

        
          <Faq />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

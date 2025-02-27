/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Button from "../../components/button";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import ShowCase from "../../components/ShowCase";
import Wrapper from "../../components/Wrapper";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

export default function index() {
  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />

          <Wrapper>
            <Contact />

            <ContactForm />
            <Faq/>
          </Wrapper>

          <Footer />
        </Layout>
      </div>
    </>
  );
}

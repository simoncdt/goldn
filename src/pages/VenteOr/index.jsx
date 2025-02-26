/* eslint-disable no-unused-vars */
import Button from "../../components/button";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import ShowCase from "../../components/ShowCase";

export default function index() {
  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />

          <Overview />
          <ShowCase title={"Charte qualite"} />
          <div className="bg-[#D6BE82] text-center py-16 ">
            <div className="text-3xl mb-5">
              {" "}
              Achetez vos pieces DOR et lingots DOR en ligne
            </div>
            <div className="max-w-3xl mx-auto mb-16">
              Pour acheter de l’Or, veuillez remplir le formulaire. Un conseiller prendra contact avec vous dans les plus brefs délais afin de vous accompagner dans votre démarche.
               
            </div>
            <Button
              text={"Demande d'Achat d'Or"}
              className={"bg-slate-800"}
            />
          </div>
          <Faq />

          <Footer />
        </Layout>
      </div>
    </>
  );
}

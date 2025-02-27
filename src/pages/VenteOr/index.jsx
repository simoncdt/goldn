/* eslint-disable no-unused-vars */
import Button from "../../components/button";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import ShowCase from "../../components/ShowCase";
import Presentation from "../../components/Presentation";

export default function index() {
  const presentationInfo = {
    title: (
      <>
        Vendez votre Or auprès d’un expert
        <br />
        dans nos Comptoirs
      </>
    ),
    content: (
      <div>
        <strong></strong>
        <strong>Le Comptoir National de l’Or</strong> ,, professionnels de l’Or
        depuis 1976 achète vos bijoux en Or et argent inutilisés ou vos pièces
        d’Or rapidement et en toute sécurité. Pour votre rachat or, consultez le
        prix de lor du jour.
        <br />
        <br />
        Le Comptoir National de l’Or vous accueille dans l’un de ses comptoirs
        en France.
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

          <Overview />
          <ShowCase title={"Charte qualite"} />
          <div className="bg-[#D6BE82] text-center py-16 ">
            <div className="text-3xl mb-5">
              {" "}
              Achetez vos pieces DOR et lingots DOR en ligne
            </div>
            <div className="max-w-3xl mx-auto mb-16">
              Pour acheter de l’Or, veuillez remplir le formulaire. Un
              conseiller prendra contact avec vous dans les plus brefs délais
              afin de vous accompagner dans votre démarche.
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

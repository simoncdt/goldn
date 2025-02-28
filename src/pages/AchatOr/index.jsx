/* eslint-disable no-unused-vars */
import Button from "../../components/button";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import Presentation from "../../components/Presentation";
import ShowCase from "../../components/ShowCase";

export default function index() {
  const presentationInfo = {
    title: " Achetez votre Or au juste prix en ligne ou dans nos Comptoirs",
    content: (
      <div>
        <strong></strong>
        <strong>Le Comptoir National de l’Or</strong> , professionnels de l’Or
        depuis 1976 vous propose d’acheter votre Or (pièces, lingot et lingotins
        en or) au juste prix dans nos Comptoirs partout en France. Pour
        connaître le prix de lor du jour, consultez son cours en ligne.
        <br /> Nous vous conseillons  
        <strong> gratuitement en toute discrétion</strong>
        gratuitement en toute discrétion avec ou sans rendez-vous.
        <br />
        <br /> Le Comptoir National de l’Or vous accueille dans l’un de ses
        comptoirs en France
      </div>
    ),
  button:"Passez commande en ligne",

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
            <div className="text-2xl md:text-3xl mb-5 font-semibold">
              {" "}
              Achetez vos pieces DOR et lingots DOR en ligne
            </div>
            <div className="max-w-3xl mx-4 md:mx-auto mb-16">
              Pour acheter de l’Or, remplissez simplement le formulaire de
              commande en ligne et un de nos conseillers va vous contacter pour
              expliquer les démarches à suivre. La procédure se fait en moins de
              2 minutes.
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

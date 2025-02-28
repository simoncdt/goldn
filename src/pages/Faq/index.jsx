/* eslint-disable no-unused-vars */
import Button from "../../components/button";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Overview from "../../components/Overview";
import ShowCase from "../../components/ShowCase";
import Wrapper from "../../components/Wrapper";

export default function index() {
  const faqList = [
    {
      img: "/faqimg.webp",
      title: "5 bonnes raisons de faire confiance a Gold.fr",
      content:
        "5 bonnes raisons de faire confiance à Gold.fr Gold.fr, lesite officiel du Comptoir National de l'Or, représente lameilleure solution en ligne pour les services liés aux métaux précieux destinés aux particuliers car : c’est un site fiable, respectueux de la réglementation, la  protection des données personnelles et défendant les  valeurs portées depuis sa création que sont : la  confiance, la transparence et la discrétion. Gold.fr  fournit un service efficace aux particuliers : le Comptoir  National de l’Or s’engage à traiter toute transaction  passée par le biais de Gold.fr dans un souci permanent de  respect des délais, de rapidité des procédures et de  simplicité des transactions (entretien téléphonique  personnalisé, présentation des conditions tarifaires  claires et précises...)",
    },
  ];

  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />

          <Wrapper>
            <div className="my-16">
              <div className="text-4xl pb-8  border-b-4 border-black w-fit ">
                FAQ
              </div>
              <div className="my-12 grid md:grid-cols-2 gap-5">
                {faqList.map((item, index) => (
                  <div key={index} className="border">
                    <div className=" md:flex  ">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[225px] h-[225px] block mx-auto"
                      />
                      <div className="md:m-6 mx-3 my-6">
                        <div className="text-lg mb-5">
                          {item.title}
                        </div>
                        <div className="">
                          {item.content}
                        </div>
                        <div className="text-right mt-7">
                          <button className="bg-red-500 rounded-lg text-white px-5 py-2 mx-auto">
                            En savoir +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Wrapper>

          <Footer />
        </Layout>
      </div>
    </>
  );
}

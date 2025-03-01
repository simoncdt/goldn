/* eslint-disable no-unused-vars */
import Button from "../../components/button";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";

export default function Index() {
  const faqList = [
    {
      title: "Qu'est-ce que Gold.fr?",
      content:
        "Gold.fr est le site officiel du Comptoir National de l'Or, offrant des services sûrs, fiables et rapides pour la vente de métaux précieux.",
    },
    {
      title: "Pourquoi choisir Gold.fr?",
      content:
        "Gold.fr vous assure des transactions simples, sécurisées et des évaluations gratuites de vos métaux précieux avec une transparence totale.",
    },
    {
      title: "Quels métaux précieux puis-je vendre?",
      content:
        "Nous rachetons des pièces d'or, des lingots, des bijoux, des pièces en argent, en platine et en palladium.",
    },
    {
      title: "Comment obtenir une estimation gratuite?",
      content:
        "Il vous suffit de remplir un formulaire en ligne, et nous vous enverrons une enveloppe sécurisée pour renvoyer vos objets.",
    },
    {
      title: "Est-ce que l'estimation est fiable?",
      content:
        "Oui, nos experts utilisent le cours officiel de l'or et d'autres métaux précieux pour vous fournir une estimation juste et transparente.",
    },
    {
      title: "Combien de temps prend la transaction?",
      content:
        "La transaction se fait rapidement, généralement dans les 24 heures suivant l'envoi des objets ou après l'évaluation en agence.",
    },
    {
      title: "Puis-je vendre des bijoux en or?",
      content:
        "Oui, nous achetons également des bijoux en or, en fonction du poids et de la pureté de l'or.",
    },
    {
      title: "Quels sont les frais associés?",
      content:
        "Aucun frais pour l'estimation ou l'envoi de vos objets. Seuls les frais de transaction sont appliqués lors de la vente.",
    },
    {
      title: "Puis-je vendre mes objets en ligne?",
      content:
        "Oui, vous pouvez facilement vendre vos objets en ligne via notre plateforme sécurisée.",
    },
    {
      title: "Le paiement est-il immédiat?",
      content:
        "Oui, après l'évaluation, vous recevez votre paiement directement sur votre compte bancaire.",
    },
    {
      title: "Est-ce que mon or est sécurisé pendant le processus?",
      content:
        "Absolument. Nous garantissons une protection totale de vos objets grâce à des services d'expédition sécurisés et une assurance.",
    },
    {
      title: "Puis-je vendre mes lingots d'or?",
      content:
        "Oui, nous rachetons des lingots d'or de toutes tailles, de 1 gramme à plusieurs kilogrammes.",
    },
    {
      title: "Quels documents sont nécessaires pour vendre?",
      content:
        "Il vous suffit de nous fournir une pièce d'identité et, si nécessaire, une preuve de l'origine de vos objets.",
    },
    {
      title: "Que faire si j'ai des questions pendant le processus?",
      content:
        "Notre service client est disponible pour répondre à toutes vos questions, soit par téléphone, soit par e-mail.",
    },
    {
      title: "Qu'est-ce qu'un Gold Kit?",
      content:
        "Le Gold Kit est une enveloppe sécurisée que vous pouvez utiliser pour envoyer vos objets à évaluer, gratuitement et en toute sécurité.",
    },
    {
      title: "Puis-je vendre à tout moment?",
      content:
        "Oui, vous pouvez vendre vos métaux précieux à tout moment. Notre service est disponible 24/7 en ligne.",
    },
    {
      title: "Quelles sont les méthodes de paiement?",
      content:
        "Le paiement est effectué par virement bancaire ou chèque, selon votre préférence.",
    },
    {
      title: "Gold.fr est-il fiable?",
      content:
        "Gold.fr est une entreprise de confiance, respectant toutes les réglementations légales et assurant la protection de vos données personnelles.",
    },
    {
      title: "Puis-je vendre des métaux précieux en petites quantités?",
      content:
        "Oui, nous acceptons la vente de petites quantités de métaux précieux, même des pièces d'une seule once.",
    },
    {
      title: "Comment contacter le support client?",
      content:
        "Vous pouvez nous contacter via notre formulaire de contact en ligne ou par téléphone pendant nos heures d'ouverture.",
    },
  ];

  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />

          <Wrapper>
            <div className="my-16">
              <div className="text-4xl pb-8 border-b-4 border-black w-fit ">
                FAQ - Questions Fréquentes
              </div>
              <div className="my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {faqList.map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
                    <div className="text-xl font-semibold mb-4">{item.title}</div>
                    <div className="text-sm text-gray-600 mb-4">{item.content}</div>
                    
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

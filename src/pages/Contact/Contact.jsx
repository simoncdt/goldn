import { Link } from 'react-router-dom';

export default function Contact() {
  const infoList = [
    {
      title: "Contacter un comptoir",
      content: "Consultez la liste de nos Comptoirs",
      link: "",
    },
  ];

  const contactList = [
    {
      title: "Par téléphone",
      content: "0800 744 144",
      link: "",
    },
    {
      title: "Par courrier",
      content: (
        <>
          Goldtrade (Gold.fr)
          <br />
          10 avenue de la Grande Armée
          <br />
          75017 Paris
        </>
      ),
      link: "",
    },
    {
      title: "Par email",
      content: (
        <Link
          className="border-b border-[#C9A227] hover:text-[#C9A227] transition duration-300"
          to={"#"}
        >
          Formulaire ci-dessous
        </Link>
      ),
      link: "",
    },
  ];

  return (
    <div className="mt-16 text-[#2E2E2E]">
      {/* Titre de la section */}
      <div className="text-3xl md:text-5xl font-semibold pb-8 border-b-4 border-[#C9A227] w-fit">
        Contact
      </div>

      {/* Description */}
      <div className="my-12 text-lg leading-relaxed">
        <p>
          Vous avez des questions ? Besoin de conseils ? Ou voulez-vous effectuer un achat?<br />
          N’hésitez pas à nous contacter en choisissant la bonne rubrique.
          Notre équipe vous répondra dans les plus brefs délais.
        </p>
      </div>

      {/* Section "Vous souhaitez" */}
      <div className="mt-6">
        <div className="text-xl font-medium mb-4 text-[#C9A227]">
          Vous souhaitez :
        </div>
        <ul className="space-y-3">
          {infoList.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <i className="bx bxs-right-arrow text-[#C9A227] text-lg"></i>
              <span className="text-lg">{item.title}</span>
              <Link
                to={item.link}
                className="ml-auto text-[#C9A227] hover:underline transition duration-300"
              >
                {item.content}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Section "Pour nous joindre" */}
      <div className="mt-8">
        <div className="text-xl font-medium mb-4 text-[#C9A227]">
          Pour nous joindre :
        </div>
        <ul className="space-y-4">
          {contactList.map((item, index) => (
            <li key={index} className="flex flex-col md:flex-row md:items-center gap-2">
              <div className="flex items-center gap-3 w-48">
                <i className="bx bxs-right-arrow text-[#C9A227] text-lg"></i>
                <span className="text-lg">{item.title}</span>
              </div>
              <span className="text-lg">{item.content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

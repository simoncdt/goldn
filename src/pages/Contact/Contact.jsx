import { Link } from 'react-router-dom'

export default function Contact() {

    const infoList = [
        {
          title: "Contacter un comptoir",
          content: "consultez la liste de nos Comptoirs",
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
          content: <Link className="border-b border-black" to={"#"}> Formulaire ci-dessous</Link>,
          link: "",
        },
      ];
  return (
    <><div className="mt-16">
    <div className="  text-2xl    md:text-4xl pb-8   border-black w-fit ">Contact</div>
    <div className="my-12 text-[15px]">
      <div>
        Vous avez des questions ? Vous avez besoin de conseils ?<br />
        N’hésitez pas à nous contacter en choisissant la bonne
        rubrique. Notre équipe vous répondra dans les plus brefs
        délais.
      </div>
      <div>
        <div className="mt-4">
          <div className="text-lg mb-2">Vous souhaitez:</div>
          <ul>
            {infoList.map((item, index) => (
              <li
                key={index}
                className="md:flex gap-4 items-center py-2"
              >
                <span className="flex items-center gap-2 leading-none">
                  <i className="bx bxs-right-arrow text-[#D6BE82] text-lg leading-none"></i>
                  {item.title}
                </span>

                <span className="flex items-center ml-5 md:ml-0 text-[#D6BE82] leading-none">
                  <i className="bx bx-chevron-right text-lg leading-none"></i>
                  <Link className="">{item.content}</Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="text-lg mb-2">Pour nous joindre:</div>
          <ul>
            {contactList.map((item, index) => (
              <li
                key={index}
                className=" py-2 grid grid-cols-2 md:flex items-start"
              >
                <span className="flex items-center gap-2 leading-none w-40">
                  <i className="bx bxs-right-arrow text-[#D6BE82] text-lg leading-none"></i>
                  {item.title}
                </span>

                <span className="flex items-center leading-none">
                  <Link className="">{item.content}</Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div></>
  )
}

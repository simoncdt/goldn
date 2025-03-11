import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Input from "../pages/Home/Input";
import Wrapper from "./Wrapper";
import { Linkedin, Facebook, Phone, Instagram } from "lucide-react";

export default function Footer() {
  const content = [
    {
      title: "ACHAT ET VENTE OR",
      content: [
        "Achat Or",
        "RAchat Or",
        "Rachat bijoux Or",
        "Rachat montres Or",
      ],
    },
    {
      title: "Lingots d'Or",
      content: [
        "Lingot d'Or 1kg",
        "Lingotin d'Or 500g",
        "Lingotin d'Or 250g",
        "Lingotin d'Or 100g",
        "Lingotin d'Or 50g",
        "Lingotin d'Or 20g",
        "Lingotin d'Or 10g",
      ],
    },

    {
      title: "PIECES D'OR",
      content: [
        "Napoléon 20 Frs (Louis d'Or)",
        "Croix Suisse 20 Frs Or (Vrenelli)",
        "Souverain George V Or",
        "50 Pesos Or",
        "Krugerrand Or",
        "Union Latine Or",
        "Demi Napoléon Or",
      ],
    },
    {
      title: "Cours de l'Or et de l'Argent",
      content: ["Cours de l'or", "Pièces de collection", "Pièces modernes"],
    },

    {
      title: "Actualité de l'Or",
      content: [
        "Fiscalité Or",
        "Presse",
        "FAQ/Guide",
        "Tout savoir sur l'Achat d'Or",
        "Tout savoir sur le Lingot d'Or",
        <span
          key="catalogue"
          className="rounded-lg bg-yellow-700 px-4 py-3"
        >
          Notre catalogue
        </span>,
      ],
    },
  ];

  const link = [
    [
      { title: "A propos" },
      { title: "Prendre RDV" },
      { title: "Contactez-nous" },
      { title: "Recrutement" },
    ],
    [],
    [
      {
        title: (
          <div className=" bg-[#2A2A2C] p-3 rounded-lg">
            <div className="text-xs">lundi 10 fevrier</div>
            <div className="text-lg">Cours de lor d1kg depasse 90000$</div>
          </div>
        ),
      },
      {
        title: (
          <div className=" bg-[#2A2A2C] p-3 rounded-lg">
            <div className="text-xs">lundi 10 fevrier</div>
            <div className="text-lg">Cours de lor d1kg depasse 90000$</div>
          </div>
        ),
      },
    ],
  ];
  const footerMenu = ["Mentions legales", "CGV"];
  const footerLink = [
    { title: "Comment acheter de largnt? -les permieres etapes", link: "#" },
  ];
  return (
    <div className="bg-[#343437] text-white">
      <div className="bg-black">
        <Wrapper>
          <div className=" py-7 text-center gap-5 xl:grid xl:grid-cols-12">
            <img
              src={logo}
              alt=""
              className="xl:col-span-4  "
            />
            <div className="mdtext-xl text-base md:px-9 col-span-5">
              Leader français de lAchat dOr et de la Vente dOr Plus de 70
              agences dans toute la France
            </div>
            {/* <div className="col-span-3">
              <div className="  rounded-lg w-fit flex bg-[#4A4A4B] hover:bg-green-800 col-span-3 ">
                <div className="rounded-lg bg-green-800 px-4 py-2 ">
                  No Vert{" "}
                </div>{" "}
                <div className="px-4 py-2 ">99-88-88-88</div>{" "}
              </div>
            </div> */}
          </div>
        </Wrapper>
      </div>

      {/* Deuxieme partie */}
      <Wrapper>
        <div className="my-12 xl:pl-10">
          {/* 1er partie */}
          <div className=" grid xl:grid-cols-5 gap-2">
            {content.map((item, index) => (
              <div
                key={index}
                className="mb-10 xl:px-4"
              >
                <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2">
                  <Link className="hover:text-[#D6BE82] transition">
                    {item.title}
                  </Link>
                </div>
                <ul className="text-base ml-4">
                  {item.content.map((item, index) => (
                    <li
                      key={index}
                      className="py-2"
                    >
                      <Link
                        to={"/contact"}
                        className="hover:text-[#D6BE82] transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}{" "}
            {/* 2er partie */}
            <div className=" bg-[#2A2A2C] rounded-lg py-5 px-4">
              <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2 hover:text-[#D6BE82] transition">
                <a href="">Comptoir National de LOR</a>
              </div>
              <ul className="text-base ml-4">
                {link[0].map((item, index) => (
                  <li
                    key={index}
                    className="py-2"
                  >
                    <Link className="hover:text-[#D6BE82] transition">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-4 pl-4  ">
              <Link className="hover:text-[#D6BE82] transition">
                {" "}
                <span className="">
                  <i className="bx bx-right-arrow "></i>
                </span>
                Tous nos lingots dor
              </Link>
            </div>
            <div className="mx-4 ">
              {" "}
              <Link className="hover:text-[#D6BE82] transition">
                {" "}
                <span className="">
                  <i className="bx bx-right-arrow "></i>
                </span>
                Tous nos pieces dor
              </Link>
            </div>
            <div className=" px-4">
              <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2 hover:text-[#D6BE82] transition">
                <a href="">AUTRES METAUX PRECIEUX</a>
              </div>
              <ul className="text-base ml-4">
                {link[1].map((item, index) => (
                  <li
                    key={index}
                    className="py-2"
                  >
                    <Link className="hover:text-[#D6BE82] transition">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 ">
              <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2 hover:text-[#D6BE82] transition">
                <Link href="">NOS DERNIERES NEWS</Link>
              </div>
              <ul className="text-base ">
                {link[2].map((item, index) => (
                  <li
                    key={index}
                    className="py-2"
                  >
                    {" "}
                    <Link className="hover:text-[#D6BE82] transition">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 xlmt-24 xl:pl-96">
            <div className="flex items-center justify-center xl:justify-normal p-10 space-x-4">
              {/* Icône LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={48}
                  className="text-blue-700 hover:text-blue-900"
                />
              </a>

              {/* Icône Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={48}
                  className="text-blue-600 hover:text-blue-800"
                />
              </a>

              {/* Icône WhatsApp */}
              <a
                href="https://wa.me/votrenumero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone
                  size={48}
                  className="text-green-500 hover:text-green-700"
                />
              </a>

              {/* Icône Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={48}
                  className="text-pink-500 hover:text-pink-700"
                />
              </a>
            </div>
            <div className=" md:px-3">
              <div className="xl:flex mb-4 ">
                <div>
                  <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2">
                    NEWSLETTER
                  </div>
                  <div className="xl:max-w-48 text-xs mb-5">
                    Indiquez votre adresse email pour recevoir notre lettre
                    dinformation
                  </div>
                </div>
                <Input
                  placeholder="newsLetter..."
                  textButton={"M'inscrire"}
                  className={" 100px "}
                />
              </div>
              <div className="text-xs">
                Votre email nous permettra de vous adresser des newsletters afin
                de vous tenir informé de nos offres et de l’évolution du marché
                de l’or. Vous pourrez vous désabonner à tout moment en cliquant
                sur le lien présent dans l’email d’envoi de la newsletter ou en
                vous rendant sur votre compte. Conformément à notre politique
                générale en matière de données personnelles, vous disposez d’un
                droit d’accès vous permettant à tout moment de connaître la
                nature des données collectées vous concernant, de demander leur
                rectification ou leur effacement. Ce droit s’exerce par simple
                envoi d’un email. Pour tout savoir sur la manière dont Gold
                Trade gère les données personnelles, vous pouvez vous reporter à
                notre Charte sur les Données Personnelles.
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {/*Last sectionnn */}
      <div className=" bg-black">
        <Wrapper>
          <div className="mx-3">
            <ul className="flex text-lg pt-5 pb-5 justify-center">
              {footerMenu.map((item, index) => (
                <li
                  key={index}
                  className="mx-3"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div>
              {footerLink.map((item, index) => (
                <span key={index}> {item.title}</span>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

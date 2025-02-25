import logo from "../assets/logo.png";
import Input from "../pages/Home/Input";
import Wrapper from "./Wrapper";

export default function Footer() {
  const socialMedia = ["/instagram-logo-24.png", "/instagram-logo-24.png"];
  const content = [
    { title: "ACHAT ET VENTE OR", content: ["Achat Or", "RAchat Or"] },
    { title: "ACHAT ET VENTE OR", content: ["Achat Or", "RAchat Or"] },

    { title: "ACHAT ET VENTE OR", content: ["Achat Or", "RAchat Or"] },
    { title: "ACHAT ET VENTE OR", content: ["Achat Or", "RAchat Or"] },

    {
      title: "ACHAT ET VENTE OR",
      content: [
        "Achat Or",
        <span
          key="catalogue"
          className="rounded-lg bg-yellow-700 px-4 py-3"
        >
          notre catalogue
        </span>,
      ],
    },
  ];

  const link = [
    [{ title: "A propos" }, { title: "A propos" }],
    [{ title: "A propos" }, { title: "A propos" }],
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
          <div className=" py-7  gap-5 grid grid-cols-12">
            <img
              src={logo}
              alt=""
              className="col-span-4"
            />
            <div className="text-xl px-9 col-span-5">
              Leader français de lAchat dOr et de la Vente dOr Plus de 70
              agences dans toute la France
            </div>
            <div className="col-span-3"> 
              <div className="  rounded-lg w-fit flex bg-[#4A4A4B] hover:bg-green-800 col-span-3 ">
                <div className="rounded-lg bg-green-800 px-4 py-2 ">
                  No Vert{" "}
                </div>{" "}
                <div className="px-4 py-2 ">99-88-88-88</div>{" "}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Deuxieme partie */}
      <Wrapper>
        <div className="my-12 pl-10">
          {/* 1er partie */}
          <div className=" grid grid-cols-5 gap-2">
            {content.map((item, index) => (
              <div
                key={index}
                className="mb-10 px-4"
              >
                <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2">
                  <a href="">{item.title}</a>
                </div>
                <ul className="text-base ml-4">
                  {item.content.map((item, index) => (
                    <li
                      key={index}
                      className="py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className=" bg-[#2A2A2C] rounded-lg py-5 px-4">
              <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2">
                <a href="">Comptoir National de LOR</a>
              </div>
              <ul className="text-base ml-4">
                {link[0].map((item, index) => (
                  <li
                    key={index}
                    className="py-2"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-4 pl-4 "><span className=""><i className='bx bx-right-arrow '></i></span>Tous nos lingots dor</div>
            <div className="mx-4">Tous nos lingots dor</div>
            <div className=" px-4">
              <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2">
                <a href="">AUTRES METAUX PRECIEUX</a>
              </div>
              <ul className="text-base ml-4">
                {link[1].map((item, index) => (
                  <li
                    key={index}
                    className="py-2"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 ">
              <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2">
                <a href="">NOS DERNIERES NEWS</a>
              </div>
              <ul className="text-base ">
                {link[2].map((item, index) => (
                  <li
                    key={index}
                    className="py-2"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-24">
            <div className="flex items-center">
              {socialMedia.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  className="w-12 h-12 "
                />
              ))}
            </div>
            <div className=" px-3">
              <div className="flex mb-4">
                <div>
                  <div className="border-l-4 border-yellow-400 text-lg mb-3 font-semibold pl-2">
                    <a href="">NEWSLETTER</a>
                  </div>
                  <div className="max-w-48 text-xs">
                    Indiquez votre adresse email pour recevoir notre lettre
                    dinformation
                  </div>
                </div>
                <Input
                  placeholder="newsLetter..."
                  textButton={"M'inscrire"}
                  width={"100px"}
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

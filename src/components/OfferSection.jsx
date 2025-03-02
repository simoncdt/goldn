import Button from "./button";
import Wrapper from "./Wrapper";

export default function OfferSection() {
  const offersItem = [
    {
      image: "/s.png",
      name: "Bagues",
      content: "Rachat et vente de bijoux",
    },
    {
      image: "/u.png",
      name: "Colliers",
      content: "Rachat et expertise de bijoux en Or",
    },
    {
      image: "/v.png",
      name: "Bracelets",
      content: "Rachat de vos boucles d'oreilles en Or ",
    },
    {
      image: "/m.png",
      name: "Boucles d'oreille",
      content: "Rachat de vos broches en or",
    },
    {
      image: "/x.png",
      name: "Broche",
      content: "Rachat et vente de bijoux",
    },
  ];
  return (
    <>
      <div className="text-center  py-16 bg-white">
        <Wrapper>
          <div className="text-center flex flex-col items-center max-w-[750px] mx-auto ">
            <div className="text-3xl my-5 font-semibold">
              Expertise bijoux – Rachat de bijoux en toute sécurité
            </div>
            <div className="max-w-xl text-[15px] mb-5">
              45 ans d’activité dans les métaux précieux, plus de 10 ans
              d’expérience sur internet et une communauté de plusieurs milliers
              de membre.
            </div>
            <div className="">
              Le Comptoir national de l’Or est également spécialisé dans le
              rachat de bijoux en Or, en Argent, en Platine et en Palladium. Les
              prix sont établis selon les cours du marché international des
              métaux précieux. Nos experts réalisent gratuitement une estimation
              des bijoux, en agence
            </div>
          </div>

          <div className="grid grid-cols-2  md:grid-cols-5 mb-10">
            {offersItem.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-5 "
              >
                <img
                  src={item.image}
                  alt=""
                />
                <span className="text-lg font-bold mb-3 ">{item.name}</span>
                <span className="">{item.content}</span>
              </div>
            ))}
          </div>
          <Button
          link={'/rachat-bijoux'}
            text={"Rachat de bijoux"}
            className={" bg-[#5A3C31]  "}
          />
        </Wrapper>
      </div>
      
    </>
  );
}

import Button from "../../components/button";

export default function OfferSection() {
  const offersItem = [
    {
      image: "/coin1.jpg",
      name: "Bagues",
      content: "Rachat et vente de bijoux",
    },
  ];
  const medias = [{ image: "/tf1.png" }];
  return (
    <>
      <div className="text-center  py-16 bg-white">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="text-3xl my-5 font-semibold">
            Expertise bijoux – Rachat de bijoux en toute sécurité
          </div>
          <div className="max-w-xl text-[15px] mb-5">
            45 ans d’activité dans les métaux précieux, plus de 10 ans
            d’expérience sur internet et une communauté de plusieurs milliers de
            membre.
          </div>
          <div className="max-w-2xl ">
            Le Comptoir national de l’Or est également spécialisé dans le rachat
            de bijoux en Or, en Argent, en Platine et en Palladium. Les prix
            sont établis selon les cours du marché international des métaux
            précieux. Nos experts réalisent gratuitement une estimation des
            bijoux, en agence
          </div>
        </div>
        <div className="grid grid-cols-5 mb-10">
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
          text={"Rachat de bijoux"}
          className={" bg-[#5A3C31]  "}
        />
      </div>
      <div className="bg-yellow-200 py-16 px-36 grid grid-cols-2 gap-24 ">
        <div className="bg-white px-7 py-24 rounded-xl max-w-[625px] relative">
          <div className=" text-center text-3xl font-bold px-5">
            {" "}
            Achetez vos pieces dor et lingots dor{" "}
          </div>
          <div className=" text-center mt-8 px-5">
            Pour acheter de l’Or ou de l’argent, remplissez simplement le
            formulaire et un de nos conseillers va vous contacte
          </div>
          <Button
            text={"Demande D'achat d'or"}
            className={
              " bg-red-500 absolute -bottom-8 left-1/2 -translate-x-1/2"
            }
          />
        </div>
      </div>
      <div className="py-14 text-center flex flex-col  items-center">
        <div className="text-3xl">
          Le comptoir National de lOr dans la presse
        </div>
        <div className="flex w-fit mt-10 ">
          {medias.map((item, index) => (
            <span key={index}>
              <img
                src={item.image}
                alt=""
                
                className="h-11 mx-4"
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

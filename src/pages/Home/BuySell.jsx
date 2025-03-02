import Button from "../../components/button";
import Wrapper from "../../components/Wrapper";

export default function BuySell() {
  return (
    <div className="bg-gray-200 pt-16 pb-20 md:px-8 xl:px-36  ">
      <Wrapper>
        <div className="grid md:grid-cols-2  gap-10   xl:gap-44">
          <div className="bg-white px-7 pt-14 pb-12 md:pb-20 rounded-xl  md:relative">
            <div className=" text-center text-2xl md:text-3xl font-bold  md:px-5 md:mb-8">
              {" "}
              Achetez vos pieces dor et lingots dor{" "}
            </div>
            <div className=" text-center mt-4  md:px-5 mb-8">
              Pour acheter de l’Or ou de l’argent, remplissez simplement le
              formulaire et un de nos conseillers va vous contacte
            </div>
            <Button
            link={'/achat-or'}
              text={"Demande D'achat d'or"}
              className={
                " bg-[#5A3C31] text-center mx-auto block w-fit md:ml-0 md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2"
              }
            />
          </div>

          <div className="bg-white px-7 pt-14 pb-12 md:pb-20 rounded-xl  md:relative">
            <div className=" text-center text-2xl md:text-3xl font-bold  md:px-5 md:mb-8">
              {" "}
              Vendez vos pièces d’Or et lingots d’Or
            </div>
            <div className=" text-center mt-4  md:px-5 mb-8">
              Pour procéder à la vente d’or , veuillez remplir le formulaire.
              L’un de nos conseillers vous contactera dans les plus brefs délais
              afin de vous accompagner dans votre démarche.{" "}
            </div>
            <Button
            link={'/vente-or'}
              text={"Demande de vente d'or"}
              className={
                " bg-[#8F7130]  text-center mx-auto block w-fit md:ml-0 md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2"
              }
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

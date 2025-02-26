import Button from "../../components/button";
import Wrapper from "../../components/Wrapper";

export default function BuySell() {
  return (
    <div className="bg-gray-200 pt-16 pb-20 px-36  ">
      <Wrapper>
        <div className="grid grid-cols-2 gap-44">
          <div className="bg-white px-7 pt-14 pb-20 rounded-xl  relative">
            <div className=" text-center text-3xl font-bold px-5 mb-8">
              {" "}
              Achetez vos pieces dor et lingots dor{" "}
            </div>
            <div className=" text-center mt-4px-5">
              Pour acheter de l’Or ou de l’argent, remplissez simplement le
              formulaire et un de nos conseillers va vous contacte
            </div>
            <Button
              text={"Demande D'achat d'or"}
              className={
                " bg-[#5A3C31] absolute -bottom-8 left-1/2 -translate-x-1/2"
              }
            />
          </div>
          <div className="bg-white px-7 pt-14 pb-20 rounded-xl  relative">
            <div className=" text-center text-3xl font-bold px-5 mb-8">
            Vendez vos pièces d’Or et lingots d’Or
            </div>
            <div className=" text-center mt-4px-5">
            Pour procéder à la vente d’or , veuillez remplir le formulaire. L’un de nos conseillers vous contactera dans les plus brefs délais afin de vous accompagner dans votre démarche.            </div>
            <Button
              text={"Demande de vente  d'Or"}
              className={
                " bg-[#8F7130] absolute -bottom-8 left-1/2 -translate-x-1/2"
              }
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

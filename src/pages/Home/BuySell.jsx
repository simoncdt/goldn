import Button from "../../components/button";
import Wrapper from "../../components/Wrapper";

export default function BuySell() {
  return (
    <div className="bg-gray-200 pt-16 pb-20 px-36 grid grid-cols-2 gap-24 ">
      <Wrapper>
        <div className="bg-white px-7 pt-14 pb-20 rounded-xl max-w-[625px] relative">
          <div className=" text-center text-3xl font-bold px-5">
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
              " bg-red-500 absolute -bottom-8 left-1/2 -translate-x-1/2"
            }
          />
        </div>
      </Wrapper>
    </div>
  );
}

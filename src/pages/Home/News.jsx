import Wrapper from "../../components/Wrapper";
import Input from "./Input";
import NewsSLider from "./NewsSLider";

export default function News() {
  return (
    <>
      <Wrapper>
        <div className=" flex flex-col items-center py-12">
          <div className=" text-3xl mb-5">
            Actuualites de lor et des metaux precieux
          </div>
          <div className="max-w-3xl text-center mb-24">
            Découvrez toute l’actualité de l’Or et des métaux précieux, le cours
            de l’Or, les enjeux sur le marché et autres impacts dus aux
            politiques.
          </div>
          <NewsSLider />
          
        </div>
      </Wrapper>
    </>
  );
}

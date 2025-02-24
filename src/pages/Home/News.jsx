import Input from "./Input";
import NewsSLider from "./NewsSLider";

export default function News() {
  return (
    <>
      <div className=" flex flex-col items-center">
        <div className=" text-3xl mb-5">
          Actuualites de lor et des metaux precieux
        </div>
        <div className="max-w-3xl text-center">
          Découvrez toute l’actualité de l’Or et des métaux précieux, le cours
          de l’Or, les enjeux sur le marché et autres impacts dus aux
          politiques.
        </div>
        <NewsSLider />
        <div className=" bg-[#343437] w-full  text-white pt-14 px-10 pb-10">
          <div className="flex flex-col items-center">
            <div className="text-3xl mb-5">
              Recevez gratuitment un de nos livres blancs
            </div>
            <div className="text-center mb-8">
              Realises par nos experts du Comptoir National de Lor
            </div>
            <Input
              placeholder={"Votre adresse e-mail"}
              textButton={"Valider"}
            />
            <a
              href=""
              className="mt-5 underline"
            >
              Voir tous mes guides
            </a>
          </div>
          <div className="text-xs mt-9">
            Votre email nous permet de vous envoyer nos livres blancs ainsi que
            les meilleurs conseils de nos experts et notre newsletter. Vous
            pourrez vous désabonner à tout moment en cliquant sur le lien
            présent dans l’email d’envoi de la newsletter ou en vous rendant sur
            votre compte. Conformément à notre politique générale en matière de
            données personnelles, vous disposez d’un droit d’accès vous
            permettant à tout moment de connaître la nature des données
            collectées vous concernant, de demander leur rectification ou leur
            effacement. Ce droit s’exerce par simple envoi d’un email. Pour tout
            savoir sur la manière dont Gold Trade gère les données personnelles,
            vous pouvez vous reporter à notre Charte sur les Données
            Personnelles.
          </div>
        </div>
      </div>
    </>
  );
}

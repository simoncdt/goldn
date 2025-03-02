import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Wrapper from "./Wrapper";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      title: "Comment investir dans l'or",
      content:
        "Valeur refuge, performance, diversification de votre portefeuille, autant de raisons d’investir dans le métal jaune.",
    },
    {
      title: "Tout ce qu'il faut savoir sur les Pièces d'Or",
      content:
        "Les pièces d’or ont une forte liquidité (notamment en comparaison au lingot d’or). Elles sont fractionnables et sont donc susceptibles d’être échangées par plus petites quantités. Par ailleurs, une pièce d’or aura plus de chance de trouver un acheteur potentiel qu’un lingot qui exigera de l’acheteur en question un plus gros investissement.",
    },
    {
      title: "Pourquoi investir dans l'or ?",
      content:
        "L’or est un actif sécurisé qui protège contre l’inflation et les incertitudes économiques. Il permet de diversifier son portefeuille et de limiter les risques liés aux marchés boursiers. Contrairement aux monnaies fiduciaires, l’or conserve sa valeur à long terme et offre une liquidité immédiate, facilitant sa revente en cas de besoin.",
    },
    {
      title: "Faut-il choisir l’or physique ou l’or papier ?",
      content:
        "L’or physique (lingots, pièces) garantit une détention directe et une sécurité maximale, mais nécessite un stockage sécurisé. L’or papier (ETF, actions minières, certificats) offre plus de flexibilité et de liquidité, mais implique une dépendance aux marchés financiers. Un bon équilibre entre les deux permet de tirer parti de leurs avantages respectifs.",
    },
    {
      title: "Comment sécuriser son or ?",
      content:
        "L’or physique doit être conservé dans un coffre sécurisé à domicile ou dans une banque pour éviter les risques de vol. L’assurance est recommandée pour couvrir toute perte éventuelle. Pour l’or papier, il est essentiel de choisir des institutions fiables et de surveiller régulièrement ses investissements.",
    },
    {
      title: "Quel est le meilleur moment pour acheter de l'or ?",
      content:
        "Le meilleur moment pour acheter de l’or est souvent en période de baisse des prix, lorsque les marchés financiers sont stables. Il est conseillé d’observer les tendances économiques et d’investir progressivement pour lisser les fluctuations. L’or étant un placement de long terme, la patience est essentielle pour en tirer le meilleur rendement.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper>
      <div className="my-12  mx-auto ">
        <h2 className="text-4xl font-semibold text-center text-[#A78C4B] mb-8">
          FAQ
        </h2>
        <div className="bg-white shadow-lg rounded-xl border border-[#C9A46C]">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="border-b last:border-none"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full  flex justify-between items-center py-8 px-6 text-lg font-medium text-[#4B3B2B] hover:text-[#A78C4B] transition-all"
              >
                {item.title}
                {openIndex === index ? (
                  <ChevronUp
                    size={24}
                    className="text-[#A78C4B]"
                  />
                ) : (
                  <ChevronDown
                    size={24}
                    className="text-[#4B3B2B]"
                  />
                )}
              </button>
              {openIndex === index && (
                <div className="px-12  pb-4 text-[#5A4634] text-md transition-all duration-300">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

import { Link } from "react-router-dom";

export default function Faq() {
  const faqList = [
    {
      title: "Comment investir dans l'or",
      content:
        "Valeur refuge, performance, diversification de votre portefeuille, autant de raisons d’investir dans le métal jaune.",
    },
    {
      title: "Tout ce qu'il faut savoir sur les Pièces d'Or",
      content:
        "Les pièces d’or ont une forte liquidité (notamment en comparaison au lingot d’or). Elles sont fractionnables et sont donc susceptibles d’être échangées par plus petites quantités. Par ailleurs, une pièce d’or aura plus de chance de trouver un acheteur potentiel qu’un lingot qui exigera de l’acheteur en question un plus gros investissement",
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
  return (
    <>
      <div className="my-9">
        <div className="text-3xl text-center mb-5">FAQ</div>
        <div className="px-16">
          <ul>
            {faqList.map((item, index) => (
              <li
                key={index}
                className="border-b-2 border-[#B3B3B4] py-4 group "
              >
                <Link>
                  <div className="text-xl mb-3 group-hover:text-[#A78C4B] transition">
                    {item.title}
                  </div>
                  <div className="text-sm text-[#B3B3B4]"> {item.content}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

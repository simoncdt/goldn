export default function WhyGold() {
  return (
    <>
      <div className="my-12 bg-[#F9F9F9] py-12">
        {/* Titre principal */}
        <div className="text-4xl font-bold text-[#8F7130] px-6 md:px-20 my-8 text-center">
          Pourquoi Investir dans les Pièces d’Or ?
        </div>

        {/* Section d'information */}
        <div className="px-6 md:px-20 text-gray-800">
          <ul className="space-y-8">
            <li className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <p className="text-lg leading-relaxed">
                L’achat de pièces d’or est un choix pertinent pour diversifier
                son épargne. À poids égal, toutes les pièces ne se valent pas.
                Un sondage OpinionWay mené en 2019 révèle que près de 75 % des
                Français considèrent l’or comme un investissement pérenne en
                temps de crise. Les pièces d’or présentent un avantage certain
                puisque leur valeur varie peu pendant les périodes de
                croissance économique. Lors des récessions, les investisseurs
                se tournent massivement vers elles.
              </p>
            </li>

            <li className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#8F7130] mb-3">
                Un achat de pièces d’or pratique et souple
              </h3>
              <p className="text-lg leading-relaxed">
                La pièce d’or est pratique par ses dimensions et son poids. Cet
                actif est facile à stocker et s’échange partout dans le monde.
                De plus, contrairement aux lingots, elle permet de fractionner
                le capital en or.
              </p>
            </li>

            <li className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#8F7130] mb-3">
                Une revente facile et rapide en agence
              </h3>
              <p className="text-lg leading-relaxed">
                Vendre une pièce d’or permet de débloquer rapidement le capital
                et de se désengager à tout moment. L’estimation de la valeur
                est immédiate.
              </p>
            </li>
          </ul>
        </div>

        {/* Séparateur */}
        <div className="border-t-2 border-gray-300 my-12 mx-6 md:mx-20"></div>

        {/* Quelles pièces acheter */}
        <div className="text-4xl font-bold text-[#8F7130] px-6 md:px-20 my-8 text-center">
          Quelles Pièces d’Or Acheter ?
        </div>
        <div className="px-6 md:px-20 space-y-6">
          {[
            {
              title: "Le 20 Francs Coq Marianne",
              content:
                "Cette pièce, frappée entre 1802 et 1917, est la plus recherchée des pièces françaises.",
            },
            {
              title: "Le souverain britannique",
              content:
                "Monnaie emblématique frappée depuis 1816, le souverain or britannique est très prisé.",
            },
            {
              title: "Le Krugerrand d’Afrique du Sud",
              content:
                "Référence mondiale, cette pièce d'or pèse 33,93g et est déclinée en plusieurs formats.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#8F7130] mb-3">
                {item.title}
              </h3>
              <p className="text-lg leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Séparateur */}
        <div className="border-t-2 border-gray-300 my-12 mx-6 md:mx-20"></div>

        {/* Pièces éligibles à l'investissement */}
        <div className="text-4xl font-bold text-[#8F7130] px-6 md:px-20 my-8 text-center">
          Quelles Pièces sont Éligibles à l’Investissement ?
        </div>

        <div className="px-6 md:px-20 space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <p className="text-lg leading-relaxed">
              L’achat de pièces d’or d’investissement est codifié par l’Union
              Européenne. Elles doivent avoir une pureté minimale de 900‰, être
              en parfait état et avoir eu un cours légal par le passé.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#8F7130] mb-3">
              Précautions à prendre
            </h3>
            <p className="text-lg leading-relaxed">
              Vérifiez le scellé, l’état de conservation et privilégiez un
              interlocuteur de confiance comme le Comptoir National de l’Or.
            </p>
          </div>
        </div>

        {/* Bouton d'action */}
        <div className="flex justify-center my-12">
          <button className="bg-[#8F7130] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-opacity-80 transition">
            Découvrir Nos Offres
          </button>
        </div>
      </div>
    </>
  );
}

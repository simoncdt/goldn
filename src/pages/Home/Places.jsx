export default function Places() {
  const city = [
    "Agen",
    "Aix-en Provence ",
    "Aix-en Provence ",
    "Aix-en Provence ",
    "Aix-en Provence ",
  ];
  return (
    <div className="px-16 py-20 ">
      <div className="text-center mb-16">
        <div className="text-3xl mb-7">
          Nos Comptoirs dAchat et Vente dOr en France
        </div>
        <div className="text-base mb-6">
          Sélectionnez le Comptoir National de lOr le plus proche de chez vous
        </div>
        <div className=" max-w-3xl mx-auto">
          Nos Comptoirs sont présents sur toute la France. Vous serez conseillé
          par un expert pour acheter votre Or, vendre votre Or ainsi que de
          largent ou dautres métaux précieux. Lestimation est gratuite et sans
          engagement.
        </div>
      </div>
      <div className="grid grid-cols-4 text-center text-lg gap-y-5">
        {city.map((item, index) => (
          <div key={index} className="">{item}</div>
        ))}
      </div>
    </div>
  );
}

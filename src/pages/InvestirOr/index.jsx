/* eslint-disable no-unused-vars */
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Presentation from "../../components/Presentation";
import Faq from "../../components/Faq";
import TabCoinCoted from "../../components/TabCoinCoted";
import TabCoinNotCoted from "../../components/TabCoinNotCoted";
import WhyGold from "../../components/WhyGold";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/button";
import CoinSlider from "../Home/CoinSlider";
const presentationInfo = {
  title: "Investir dans l'Or",
  content: (
    <div>
      Faire le choix d’investir dans l’Or, c’est opter pour une valeur refuge
      qui est une alternative intéressante pour diversifier et sécuriser votre
      épargne. L’Or a toujours eu un rôle important dans les systèmes
      financiers, notamment au niveau des banques centrales. En tant que
      particulier, vous pouvez investir dans l’Or au travers du réseau d’agences
      du Comptoir National de l’Or. Le saviez-vous ? Actuellement 62% des
      français considèrent l’Or comme un des placements les plus sûrs en période
      d’instabilité économique et politique. Avec les conseils de nos experts,
      découvrez comment obtenir la meilleure rentabilité dans vos
      investissements en achat de pièces dor et lingots dOr. Pour investir dans
      lOr, il est important de bien comprendre le cours de l’Or et les facteurs
      qui influencent le prix de lOr, sa fiscalité et ses risques.
    </div>
  ),
};
export default function index() {
  const investementInfo = [
    {
      title: "Faut-il investir dans l’Or ?",
      content: [
        {
          title2: "Une valeur refuge",
          text: (
            <>
              {" "}
              Investir dans l’Or présente de nombreux avantages dont le premier
              est que ce métal précieux est la valeur refuge par excellence
              depuis que l’Or existe. C’est d’ailleurs toujours elle que les
              Etats privilégient pour diversifier leurs avoirs. En période de
              croissance économique, l’histoire montre une relative stabilité.
              En période d’incertitude économique ou de récession, c’est la
              première valeur vers laquelle les investisseurs se tournent,
              faisant ainsi grimper le cours de l’Or. En d’autres termes, en
              faisant un investissement dans l’Or, on sécurise son épargne.
            </>
          ),
        },
        {
          title2: "Un patrimoine disponible",
          text: (
            <>
              Lorsque l’on investit dans l’Or sous forme de lingots ou de
              pièces, on obtient des objets physiques qui sont immédiatement
              disponibles. C’est ce que l’on appelle investir dans l’Or
              Physique. Cet investissement étant en notre possession,
              matériellement parlant, ils peuvent à tout moment être employés
              comme bon vous semble, que ce soit pour une vente ou une
              transmission. Investir dans l’Or permet ainsi de se constituer un
              patrimoine, disponible à tout moment.
            </>
          ),
        },
        {
          title2: "Une épargne à long terme",
          text: (
            <>
              Linvestissement dans l’Or est un placement de son argent sur le
              long terme afin de pouvoir faire face à des difficultés ou des
              crises à venir. Car aucune durée ne limite votre choix d’investir
              dans l’Or, sinon celle de votre propre décision. Vous pourrez
              ainsi vous constituer une épargne à long terme qui sera disponible
              à tout moment pour répondre à vos besoins.
              <br />
              <br />
              <br />
              <Button
                text={"Contactez-Nous"}
                className={"bg-[#5A3C31] "}
                link={"/contact"}
              />
            </>
          ),
        },
      ],
      extra: (
        <>
          <div className="">
            <CoinSlider />
          </div>
        </>
      ),
    },
    {
      title: "Comment bien investir dans l’Or ?",
      content: [
        {
          title2: "Investir dans l’Or physique",
          text: (
            <>
              Pour investir dans l’Or physique, il suffit de se rendre chez un
              revendeur de confiance, comme le Comptoir National de l’Or qui
              bénéficie d’une excellente réputation depuis 1976. Sur la carte
              référençant tous les Comptoirs d’achat d’Or en France vous
              trouverez rapidement une boutique à proximité de votre domicile.
              Une fois sur place, vous pourrez choisir la forme physique de
              votre investissement puisqu’en effet, l’Or peut être acheté en
              pièces ou en lingots de différentes valeurs. Il vous est également
              possible de faire votre achat d’Or physique sur notre site
              Internet et ce de manière entièrement sécurisée. En France, la
              plus connue des pièces en Or est celle appelée Napoléon 20 francs
              aussi connue sous le nom de Louis d’Or par abus de langage.
            </>
          ),
        },
        {
          title2: "Investir dans l’Or papier",
          text: (
            <>
              L’Or papier rassemble sous cette appellation tous les
              investissements possibles dans l’Or de manière indirecte. En
              effet, contrairement à l’Or physique qui offre une détention
              direct, l’Or papier impose des intermédiaires. L’investisseur ne
              se voit donc pas concrètement remettre de l’Or mais des produits
              financiers. Il est ainsi possible d’investir sur le cours de l’Or
              mais aussi sur des sociétés minières propriétaires de gisements
              aurifères. Investir dans l’Or papier relève le plus souvent d’une
              stratégie à court terme pour laquelle une mise en garde est
              publiée par l’Autorité des Marchés Financiers (AMF). Par ailleurs,
              le métal jaune se raréfiant de plus en plus, il est déconseillé
              d’investir sur le long terme dans des mines dont l’activité sera
              réduite au fil du temps et pour lequel une analyse financière de
              la société concernée est requise avant toute prise de décision.
            </>
          ),
        },
        {
          title2: "Taxes sur l’achat et la vente d’Or",
          text: (
            <>
              L’Or papier rassemble sous cette appellation tous les
              investissements possibles dans l’Or de manière indirecte. En
              effet, contrairement à l’Or physique qui offre une détention
              direct, l’Or papier impose des intermédiaires. L’investisseur ne
              se voit donc pas concrètement remettre de l’Or mais des produits
              financiers. Il est ainsi possible d’investir sur le cours de l’Or
              mais aussi sur des sociétés minières propriétaires de gisements
              aurifères. Investir dans l’Or papier relève le plus souvent d’une
              stratégie à court terme pour laquelle une mise en garde est
              publiée par l’Autorité des Marchés Financiers (AMF). Par ailleurs,
              le métal jaune se raréfiant de plus en plus, il est déconseillé
              d’investir sur le long terme dans des mines dont l’activité sera
              réduite au fil du temps et pour lequel une analyse financière de
              la société concernée est requise avant toute prise de
              décision.Contrairement à la grande majorité des placements, il n’y
              a pas de taxe lorsqu’on souhaite investir dans l’Or. De plus,
              depuis le 1er Janvier 2018, sa détention comme une épargne n’est
              plus soumise à l’ISF (Impôt Sur la Fortune) ni par l’IFI (Impôt
              sur la Fortune Immobilière) qui le remplace. En revanche, la
              revente d’Or physique est quant à elle taxée soit de manière
              forfaitaire à 11,5% sur le montant global si vous ne disposez pas
              de facture, soit via une taxe sur les plus-values de 19% dimpôts
              et de 17,2% de prélèvements sociaux. Notez cependant que vous
              pourrez bénéficier d’un abattement de 5% par an à partir de la
              troisième année. Après 22 ans, votre investissement dans l’Or ne
              sera plus taxé, lui offrant une fiscalité particulièrement
              avantageuse.
            </>
          ),
        },
      ],
      extra: (
        <>
          <div className="">
            <div className="text-3xl font-semibold mt-5 mb-8">
              Quel est le bon moment pour faire son investissement ?
            </div>
            <div className="text-base">
              Le cours de l’Or a connu ces dernières années de fortes
              croissances parallèlement aux politiques monétaires
              expansionnistes (planche à billet) des banques centrales. Les
              prévisions économiques s’accordent à donner une grande confiance
              dans l’évolution du cours de l’Or sur les prochaines années,
              faisant encore une fois de cet investissement l’un des plus
              diversifiant sur les marchés. <br />
              La cotation de l’Or est établie par le London Bullion Market
              Association (LMBA) qui est l’autorité mondiale en charge de fixer
              le prix des métaux précieux. Elle établit une cotation deux fois
              par jour, à 10h30 et 15h, heure de Londres. D’autres places
              boursières comme New York ou Shanghai fournissent une cotation. En
              France, nous bénéficions d’une cotation indicative reflétant
              l’offre et la demande sur des pièces d’Or telle que le 20 francs
              Or « Coq Marianne ».
            </div>
            <div className="text-3xl font-semibold mt-5 mb-8">
              Investir dans l’Or ou dans l’immobilier ?{" "}
            </div>
            <div className="text-base">
              Parmi les investissements les plus sûrs, viennent immédiatement à
              l’esprit ceux dans les métaux précieux et ceux dans la pierre. On
              peut donc se poser la question s’il vaut mieux investir dans
              l’immobilier ou dans l’Or ? La réponse est assez simple puisque
              l’on peut facilement constater qu’un investissement immobilier est
              sujet à de nombreuses taxes mais aussi qu’il connait régulièrement
              des crises comme celle des subprimes en 2008. C’est aussi un
              investissement moins liquide.
              <br />
              <br /> Par ailleurs, quand il s’agit d’un investissement locatif,
              il y a toujours le risque que les loyers ne soient pas payés, sans
              compter le temps passé pour la gestion. Investir dans l’Or est
              nettement moins chronophage mais aussi beaucoup plus sûr, surtout
              lorsqu’il s’agit de l’achat d’Or physique. Il prendra de la valeur
              au gré du temps et pourra facilement être transmis à vos enfants.
            </div>
            <br />
            <br />
            <Button
              text={"Passez commande en ligne"}
              className={"bg-[#8F7130] mb-24"}
              link={"/contact"}
            />
          </div>
        </>
      ),
    },
    {
      title: "Faut-il investir dans l’Or ?",
      content: [
        {
          title2: "Risques géopolitiques",
          text: (
            <>
              Les tensions internationales sont l’un des facteurs qui font
              fluctuer le cours de l’Or. Ainsi, lors de crises locales ou
              mondiales on constate dans la majeure partie des cas des
              variations à la hausse du prix de l’Or.
            </>
          ),
        },
        {
          title2: "Spéculation et volatilité des courss",
          text: (
            <>
              Le cours de l’Or est sujet aux risques liés à la spéculation comme
              tout autre produit financier. Néanmoins, étant une valeur refuge
              de longue date et donc moins sujette aux effets de mode, les
              impacts négatifs de la spéculation sont plus rares. En revanche,
              son cours est étroitement lié au niveau des taux d’intérêt,
              notamment ceux établis par la Réserve Fédérale des Etats-Unis
              (FED), l’équivalent américain de notre banque centrale. Il varie
              également en fonction de l’inflation.
            </>
          ),
        },
        {
          title2: "Les risques des pièces et lingots",
          text: (
            <>
              Le principal risque quand on souhaite investir dans l’Or sous
              forme de pièce ou lingot est celui lié à la sécurité. Lors de
              votre achat, ce sont des biens physiques qui vous seront remis. Si
              ceux-ci sont volés ou égarés, alors vous perdrez le montant total.
              C’est pourquoi il est indispensable d’en assurer la sécurité, soit
              en ayant un coffre-fort à domicile, soit en faisant appel aux
              services d’une banque ou du Comptoir National de l’Or. Pour en
              savoir plus sur les métaux précieux, consultez aussi les cours de
              largent, cours du platine et cours du palladium.
              <br />
              <br />
              <br />
              <Button
                text={"Contactez-Nous"}
                className={"bg-[#5A3C31] "}
                link={"/contact"}
              />
            </>
          ),
        },
      ],
      extra: <></>,
    },
  ];

  return (
    <>
      <div className="bg-[#FAFAFA] font-serif">
        <Layout>
          <Navbar />

          <Presentation presentationInfo={presentationInfo} />
          <div>
            <Wrapper>
              <div className="text-3xl font-semibold">
                Comment investir dans l’Or physique ?
              </div>
              <div>
                {investementInfo.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="flex mt-10"
                    >
                      <span className="text-4xl box-border block font-bold leading-[1em] w-16 h-16 pt-3 text-center border border-black rounded-[50%]  mr-10  ">
                        {index + 1}
                      </span>
                      <div className="w-full ">
                        <div className="text-3xl font-semibold my-4">
                          {item.title}
                        </div>
                        {index == 1 ? (
                          <div className="text-lg">
                            Pour bien investir dans l’Or, il est important de
                            comprendre son fonctionnement. Il existe deux
                            manières de faire un investissement dans l’Or :
                            acheter de l’Or physique, c’est-à-dire des pièces ou
                            des lingots d’Or, ou acheter de l’Or papier.
                          </div>
                        ) : (
                          ""
                        )}
                        {item.content.map((item2, index) => (
                          <>
                            <div className="text-lg mb-3 mt-9 font-semibold">
                              {item2.title2}
                            </div>
                            <div className="text-base my-4">{item2.text}</div>
                          </>
                        ))}
                        {index !== 0 ? item.extra : ""}
                      </div>
                    </div>
                    {index == 0 ? item.extra : ""}
                  </>
                ))}
              </div>
            </Wrapper>
          </div>

          <Faq />
          <Footer />
        </Layout>
      </div>
    </>
  );
}

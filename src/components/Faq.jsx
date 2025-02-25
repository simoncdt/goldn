export default function Faq() {
  const faqList = [
    {
      title: "Comment investir dans lor",
      content:
        "Valeur refuge, performance, diversification de votre portefeuille, autant de raisons d’investir dans le métal jaune. Mais une fois la décision prise, comment faire ? Les principes de bases Il est d’abord utile de rappeler 3 principes de bases applicables à tout investissement :s’informer, diversifier, et être ...",
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
                className="border-b-2 border-[#B3B3B4] py-4"
              >
                <div className="text-xl mb-3">{item.title}</div>
                <div className="text-sm text-[#B3B3B4]"> {item.content}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

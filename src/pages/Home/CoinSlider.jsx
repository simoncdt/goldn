// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleCoin.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

export default function CoinSlider() {
  const coinItem = [
    {
      name: "Lingot 1kg",
      image: "/l.webp",
      value: "50 368,51 $",
      percent: "+1,70%",
      link: "https://www.changevivienne.com/or/pieces-d-or-d-investissement/krugerrand?utm_source=chatgpt.com", // lien vers le cours de la Krugerrand
    },
    {
      name: "Lingotin 500g",
      image: "/li.webp",
      value: "23368,51 $",
      percent: "0,00%",
      link: "https://www.changevivienne.com/or/pieces-d-or-d-investissement/krugerrand?utm_source=chatgpt.com", // lien vers le cours de la Krugerrand
    },
    {
      name: "Lingotin 250g",
      image: "/si.webp",
      value: "11368,51 $",
      percent: "-4,00%",
      link: "https://www.changevivienne.com/or/pieces-d-or-d-investissement/krugerrand?utm_source=chatgpt.com", // lien vers le cours de la Krugerrand
    },
    {
      name: "Lingotin 100g",
      image: "/ki.webp",
      value: "5050,51 $",
      percent: "0,00%",
      link: "https://www.changevivienne.com/or/pieces-d-or-d-investissement/krugerrand?utm_source=chatgpt.com", // lien vers le cours de la Krugerrand
    },
    {
      name: "Lingot 50g",
      image: "/ac.webp",
      value: "2468,51 $",
      percent: "0,00%",
      link: "https://www.changevivienne.com/or/pieces-d-or-d-investissement/krugerrand?utm_source=chatgpt.com", // lien vers le cours de la Krugerrand
    },
    {
      name: "Lingot 20g",
      image: "/lo.webp",
      value: "1068,51 $",
      percent: "0,00%",
      link: "https://www.changevivienne.com/or/pieces-d-or-d-investissement/krugerrand?utm_source=chatgpt.com", // lien vers le cours de la Krugerrand
    },
    {
      name: "Krugerrand (Afrique du Sud)",
      image: "/k.png",
      value: "3 168,51 $",
      percent: "-10,59%",
      link: "https://www.changevivienne.com/or/pieces-d-or-d-investissement/krugerrand?utm_source=chatgpt.com", // lien vers le cours de la Krugerrand
    },
    {
      name: "Croix suisse 20frs",
      image: "/coin1.jpg",
      value: "523.92 $",
      percent: "+ 0.24 %",
      link: "https://www.aucoffre.com/cours/categorie-supertype/graphique-cotation-5?utm_source=chatgpt.com", // lien vers le cours de la Croix Suisse 20frs
    },
    {
      name: "Maple Leaf (Canada)",
      image: "/z.png",
      value: "3 168,51 $",
      percent: " -10,02%",
      link: "https://www.cours-or.ch/or/pieces-d-or/maple-leaf-canada/?utm_source=chatgpt.com", // lien vers le cours de la Maple Leaf
    },
    {
      name: "American Eagle (États-Unis)",
      image: "/d.png",
      value: "3 023,19 $",
      percent: "-11,64%",
      link: "https://www.cours-or.ch/or/pieces-d-or/american-eagle/?utm_source=chatgpt.com", // lien vers le cours de l'American Eagle
    },
  ];

  const swiperRef = useRef(null);

  return (
    <>
      <div className="relative">
        <Swiper
          ref={swiperRef} 
          slidesPerView={1}
          spaceBetween={30}
          navigation={false} // Désactive la navigation automatique de Swiper
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper2"
          id="secondSwipper"
        >
          {coinItem.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col group transition text-center pt-5 my-16 border hover:border-[#8F7130] rounded-lg overflow-hidden shadow-lg flex-grow"
            >
              <div className="text-sm mb-8">{item.name}</div>
              <div className="text-base">
                <img
                  src={item.image}
                  className="w-32 h-32 mx-auto"
                  alt=""
                />
              </div>
              <div className="text-base mb-2">Cours: {item.value}</div>
              <span
                className={`text-lg ${
                  item.percent[0] === "+" ? "text-green-500" : "text-red-400"
                }`}
              >
                {item.percent}
              </span>

              {/* Ajout du lien autour du bouton CONSULTER */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-[#F2F4F7] mt-4 py-4 font-semibold text-xs text-black border-white group-hover:border-[#8F7130] group-hover:text-white border-2 group-hover:bg-[#8F7130]">
                  ACHETER
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Boutons de navigation indépendants */}
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full"
        >
          <i className="bx bx-chevron-left text-3xl"></i>
        </button>
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full"
        >
          <i className="bx bx-chevron-right text-3xl"></i>
        </button>
      </div>
    </>
  );
}

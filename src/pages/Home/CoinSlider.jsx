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
      name: "Croix suisse 20frs",
      image: "/coin1.jpg",
      value: "523.92 $",
      percent: "+ 0.24 %",
    },
    {
      name: "Maple Leaf (Canada)",
      image: "/z.png",
      value: "3 168,51 $",
      percent: " -10,02%",
    },
    {
      name: "Krugerrand (Afrique du Sud)",
      image: "/k.png",
      value: "3 168,51 $",
      percent: "-10,59%",
    },
    {
      name: "American Eagle (États-Unis)",
      image: "/d.png",
      value: "3 023,19 $",
      percent: "-11,64%",
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
              <div className="bg-[#F2F4F7]  mt-4 py-4 font-semibold text-xs text-black border-white group-hover:border-[#8F7130] group-hover:text-white border-2 group-hover:bg-[#8F7130]">
                CONSULTER
              </div>
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

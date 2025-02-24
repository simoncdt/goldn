// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../App.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import PriceCard from "./priceCard";

export default function Slider() {
  const information = [
    {
      head: "Rachat de votre Or",
      content:
        "<b>Vendre de l'or</b> et tous les metaux precieux argent paltin plladium sous toutes ses forms bijoux en or or dentaire debris dor et or industrie",
      button: "Ventre D'or",
    },{
      
    }
  ];
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {information.map((item, index) => (
          <SwiperSlide
            key={index}
            className="py-12"
          >
            <div className=" ml-8 max-w-lg ">
              <div className="border-b-8 w-fit border-yellow-400 pb-3 font-semibold text-3xl">
                {item.head}{" "}
              </div>
              <div className="mt-12 mb-16 text-[21px]" dangerouslySetInnerHTML={{ __html: item.content }} />
              <button className="bg-slate-700 text-white px-10 py-4 text-base rounded-lg">
                {item.button}
              </button>
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>{" "}
      <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full">
        <i className="bx bx-chevron-left text-3xl"></i>
      </button>
      <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full">
        <i className="bx bx-chevron-right text-3xl"></i>
      </button>
      <PriceCard />
      {/* Boutons de navigation personnalisés */}
    </div>
  );
}

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
import Wrapper from "../../components/Wrapper";
import Button from "../../components/button";
import { useRef } from "react";

export default function Slider() {
  const information = [
    {
      head: "Investir dans l'Or",
      content:
        "<b>Vendre de l'or</b> et tous les metaux precieux argent paltin plladium sous toutes ses forms bijoux en or or dentaire debris dor et or industrie",
      button: "Investir dans l'Or",
      link:"./achat-or"
    },
    {
      head: "Rachat de votre Or",
      content:
        "<b>Vendre de l'or</b> et tous les metaux precieux argent paltin plladium sous toutes ses forms bijoux en or or dentaire debris dor et or industrie",
      button: "Ventre D'or",
      link:"./vente-or"

    },
    
  ];
    const swiperRef = useRef(null);
  
  return (
    <Wrapper>
      <div className="relative shadow-lg">
        <Swiper
            ref={swiperRef}

          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          {information.map((item, index) => (
            <SwiperSlide
              key={index}
              className="py-12 border "
            >
              <div className=" ml-4 md:ml-8 max-w-lg ">
                <div className="border-b-8 w-fit border-[#C9A34F] pb-3 font-semibold text-2xl xl:text-3xl">
                  {item.head}{" "}
                </div>
                <div
                  className="mt-12 mb-16 text-[21px] text-left"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <Button link={item.link} text={item.button} className={" bg-[#5A3C31] hover:bg-[#D6BE82] block w-fit "} />
               
              </div>
            </SwiperSlide>
          ))}

        </Swiper>{" "}
        <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
        
        className=" absolute left-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full">
          <i className="bx bx-chevron-left text-3xl"></i>
        </button>
        <button
              onClick={() => swiperRef.current.swiper.slideNext()}
        
        className=" absolute right-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full">
          <i className="bx bx-chevron-right text-3xl"></i>
        </button>
        <PriceCard />
        {/* Boutons de navigation personnalisés */}
      </div>
    </Wrapper>
  );
}

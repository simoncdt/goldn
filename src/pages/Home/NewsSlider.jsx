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
export default function NewsSLider() {
  const coinItem = [
    {
      title: "Cours de lor: le lingot d1kg depasse 90000$",
      image: "/gold.webp",
      content:
        "Le cours de lor enchaine les records le 10 fevrir et en seance il a aatteint un plus haut de 2999 dollars lonce se",
      date: "lundi 10 fevrier 2025",
    },
  ];
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={35}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {coinItem.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col  rounded-lg overflow-hidden shadow-lg pb-4 flex-grow"
          >
            <div className="text-base">
              <img
                src={item.image}
                className="w-full h-44 mx-auto"
                alt=""
              />
            </div>
            <div className=" text-start p-5 h-72">
              <div className="text-lg  text-start mb-4">{item.title}</div>

              <div className="text-sm mb-2">Cours: {item.content}</div>
            </div>
            <div className="text-sm text-start ps-5 text-[#8E6F2E]">
              {item.date}
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className="text-start w-full mt-8 ">
        <a className="text-start ml-14 underline">Voir plus dactualites</a>
        <div className="text-end mr-7">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="    px-2 py-1 mr-3 bg-black/50 text-white rounded-full"
          >
            <i className="bx bx-chevron-left text-3xl"></i>
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="  px-2 py-1 bg-black/50 text-white rounded-full"
          >
            <i className="bx bx-chevron-right text-3xl"></i>
          </button>
        </div>
      </div>
    </>
  );
}

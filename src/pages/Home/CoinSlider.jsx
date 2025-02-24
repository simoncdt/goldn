// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleCoin.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function CoinSlider() {
  const coinItem = [
    {
      name: "Croix suiise 20frs",
      image: "/coin1.jpg",
      value: "523.92 $",
      percent: "+ 0.24 %",
    },
    {
        name: "Croix suiise 20frs",
        image: "/coin1.jpg",
        value: "523.92 $",
        percent: "+ 0.24 %",
      },
      {
        name: "Croix suiise 20frs",
        image: "/coin1.jpg",
        value: "523.92 $",
        percent: "+ 0.24 %",
      },
      {
        name: "Croix suiise 20frs",
        image: "/coin1.jpg",
        value: "523.92 $",
        percent: "+ 0.24 %",
      },
      {
        name: "Croix suiise 20frs",
        image: "/coin1.jpg",
        value: "523.92 $",
        percent: "+ 0.24 %",
      },
      {
        name: "Croix suiise 20frs",
        image: "/coin1.jpg",
        value: "523.92 $",
        percent: "+ 0.24 %",
      },
  ];
  return (
    <>
      <Swiper
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
           className="flex flex-col text-center pt-5 rounded-lg overflow-hidden shadow-lg flex-grow"
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
           <span className={`${item.percent[0] === "+" ? "text-green-500" : "text-red-400"}`}>
             {item.percent}
           </span>
           <div className="bg-[#F2F4F7] mt-4 py-4 font-semibold text-xs text-black border-white border-2">
             CONSULTER
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
        <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full">
          <i className="bx bx-chevron-left text-3xl"></i>
        </button>
        <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full">
          <i className="bx bx-chevron-right text-3xl"></i>
        </button>
      </Swiper>
    </>
  );
}

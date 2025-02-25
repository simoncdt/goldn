// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleCoin.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Wrapper from "../../components/Wrapper";
import { useRef } from "react";

export default function ReviewSlider() {
  const reviewItem = [
    {
      image: "/coin1.jpg",
      name: "Misak Derbberyan",
      stars: 4,
      date: "19 fev 2025",
      content: "Acceuil chaleureux et serieu",
    },
    {
      image: "/coin1.jpg",
      name: "Misak Derbberyan",
      stars: 4,
      date: "19 fev 2025",
      content: "Acceuil chaleureux et serieu",
    },
  ];
  const swiperRef = useRef(null);

  return (
    <>
      <Wrapper>
        <div className="text-center py-10">
          <div className="text-3xl mb-16 font-semibold">Nos Clients temoignent</div>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={35}
            navigation={false}
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {reviewItem.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex p-3 "
              >
                <div className="flex">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 mr-5 mb-5"
                  />
                  <div className="text-start">
                    <div className="text-base">{item.name}</div>
                    <div className="text-xs">{item.date}</div>
                    <div className="text-sm text-gray-400">{item.content} </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className=" absolute left-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full"
            >
              <i className="bx bx-chevron-left text-3xl"></i>
            </button>
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className=" absolute right-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-black/50 text-white rounded-full"
            >
              <i className="bx bx-chevron-right text-3xl"></i>
            </button>
          </Swiper>
        </div>
      </Wrapper>
    </>
  );
}

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleCoin.css";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import Wrapper from "../../components/Wrapper";
import { useRef } from "react";

// Fonction pour générer les étoiles dynamiquement
const StarRating = ({ stars }) => {
  return (
    <div className="flex mt-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <i
          key={index}
          className={`bx ${
            index < stars ? "bxs-star text-yellow-500" : "bx-star text-gray-300"
          } text-lg`}
        ></i>
      ))}
    </div>
  );
};

export default function ReviewSlider() {
  const reviews = [
    {
      image: "/b.jpeg",
      name: "Séléan Vauclerc",
      stars: 5,
      date: "10 janvier 2023",
      content: "Service impeccable, transaction fluide et sécurisée. Je recommande !",
    },
    {
      image: "/n.jpeg",
      name: "Eryne Valmont",
      stars: 4,
      date: "15 août 2023",
      content: "Très bon accueil et professionnalisme. Tout s'est bien passé.",
    },
    {
      image: "/i.jpeg",
      name: "Mériel Vaudran",
      stars: 5,
      date: "22 janvier 2024",
      content: "Rapide et fiable, une belle expérience. Merci à l'équipe !",
    },
    {
      image: "/o.jpeg",
      name: "Lamine Traoré",
      stars: 3,
      date: "28 octobre 2024",
      content: "Bonne transaction, mais un léger retard sur le paiement.",
    },
    {
      image: "/f.jpeg",
      name: "Jean-Paul Mensah",
      stars: 5,
      date: "16 Janvier 2025",
      content: "Tout s'est déroulé comme prévu. Super service !",
    },
    {
      image: "/j.jpeg",
      name: "Sylvie Marquant",
      stars: 4,
      date: "10 février 2025",
      content: "Sérieux et efficace, je ferai appel à eux à nouveau.",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <Wrapper>
      <div className="text-center py-10 relative">
        <h2 className="text-3xl mb-12 font-semibold">Ce que disent nos clients</h2>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={35}
          navigation={false}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex p-3">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg">
                <img src={review.image} alt="Client" className="w-16 h-16 rounded-full object-cover" />
                <div className="text-left">
                  <h3 className="text-base font-medium">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.date}</p>
                  <StarRating stars={review.stars} />
                  <p className="text-sm text-gray-600 mt-2">{review.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Boutons de navigation Swiper */}
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
    </Wrapper>
  );
}

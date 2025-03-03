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
      content: "Je suis tellement ravi de l'opportunité d'avoir découvert cette entreprise à Kampala ! Dès mon arrivée, l'accueil a été exceptionnel. L'équipe est chaleureuse, professionnelle et très attentive à mes besoins. En tant qu'investisseur, j'ai trouvé une vraie confiance dans leur expertise et leur transparence concernant le marché de l'or. Une véritable opportunité à ne pas manquer pour toute personne cherchant à acheter ou vendre de l'or dans cette région. Je recommande vivement !",
    },
    {
      image: "/n.jpeg",
      name: "Eryne Valmont",
      stars: 4,
      date: "15 août 2023",
      content: "Mon expérience d'achat d'or ici a été plus que satisfaisante. L'accueil que j'ai reçu dès mon arrivée à leur agence à Kampala a été extrêmement chaleureux. Le personnel est très informé sur le marché de l'or et a su me guider à travers le processus d'achat de manière claire et sans pression. Je me sens vraiment en sécurité en sachant que je fais affaire avec une entreprise fiable. Si vous cherchez une opportunité d'investir dans l'or à Kampala, c'est l'endroit où il faut être !",
    },
    {
      image: "/i.jpeg",
      name: "Mériel Vaudran",
      stars: 5,
      date: "22 janvier 2024",
      content: "Investir dans l'or à Kampala est une véritable opportunité grâce à cette entreprise. L'accueil que j'ai reçu lors de ma visite a été formidable, avec une équipe toujours prête à répondre à toutes mes questions et à m'offrir des conseils éclairés. La transparence et le professionnalisme de cette équipe ont renforcé ma confiance. Si vous recherchez un endroit fiable et sécurisé pour vos investissements en or, je ne peux que recommander cette entreprise.",
    },
    {
      image: "/o.jpeg",
      name: "Lamine Traoré",
      stars: 3,
      date: "28 octobre 2024",
      content: "En tant que vendeur et acheteur d'or, j'ai trouvé cette entreprise à Kampala comme étant un partenaire de confiance. Dès mon arrivée, l'accueil chaleureux et l'expertise du personnel m'ont fait me sentir à l'aise. Ils offrent des opportunités exceptionnelles pour ceux qui souhaitent acheter ou vendre de l'or, tout en garantissant des transactions sécurisées. C’est l'endroit idéal à Kampala pour ceux qui recherchent un service de qualité dans le domaine de l'or.",
    },
    {
      image: "/f.jpeg",
      name: "Jean-Paul Mensah",
      stars: 5,
      date: "16 Janvier 2025",
      content: "Mon expérience à Kampala avec cette entreprise a été globalement très positive. L'accueil chaleureux dès mon arrivée a vraiment mis en confiance, et l'opportunité d'investir dans l'or ici est excellente. Bien que le processus soit parfois un peu plus long que prévu, cela vaut absolument la peine pour la qualité et la sécurité des transactions. Une très bonne adresse pour acheter ou vendre de l'or dans la région.",
    },
    {
      image: "/j.jpeg",
      name: "Sylvie Marquant",
      stars: 4,
      date: "10 février 2025",
      content: "J'ai eu le plaisir de découvrir cette entreprise à Kampala, et l'accueil a été vraiment agréable. Le personnel est compétent et m'a bien guidé tout au long de l'achat d'or. La seule petite remarque serait qu'il y a parfois un peu de monde, ce qui peut allonger l'attente, mais cela montre simplement la popularité de cette entreprise. En dehors de cela, c'était une expérience très satisfaisante, et je recommande vivement cette adresse pour ceux qui cherchent à investir dans l'or.",
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

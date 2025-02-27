import Wrapper from "./Wrapper";
import { Eye } from "lucide-react";
import { FaUsers, FaRegHandPeace } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function ShowCase({ title }) {
  const shopIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="46"
    >
      <defs>
        <clipPath id="A">
          <path
            d="M-826-4692H614v8187H-826z"
            clipRule="evenodd"
          ></path>
        </clipPath>
      </defs>
      <g
        clipPath="url(#A)"
        transform="translate(-9 -7)"
      >
        <path
          d="M13.135 12.85l35.41-.01v-1.52a4.33 4.33 0 0 0-1.261-3.055C46.505 7.485 45.422 7 44.24 7h-27.5c-1.18 0-2.263.485-3.042 1.267a4.33 4.33 0 0 0-1.261 3.055v1.528zm-4.133 9.382c-.01-.1.01-.198.045-.297l-.027-.01 2.925-7.674h37.02l2.988 7.656c.036.1.054.207.045.314v.063a4.88 4.88 0 0 1-1.422 3.451c-.877.88-2.093 1.43-3.435 1.43s-2.56-.548-3.435-1.43c-.277-.28-.52-.584-.725-.926-.206.332-.447.647-.725.926-.877.88-2.093 1.43-3.435 1.43s-2.56-.548-3.435-1.43a4.86 4.86 0 0 1-.725-.926c-.206.332-.447.647-.725.926-.877.88-2.093 1.43-3.435 1.43s-2.56-.548-3.435-1.43a4.86 4.86 0 0 1-.725-.926c-.206.332-.447.647-.725.926-.877.88-2.093 1.43-3.435 1.43s-2.56-.548-3.435-1.43a4.86 4.86 0 0 1-.725-.926 5.16 5.16 0 0 1-.725.926c-.877.88-2.093 1.43-3.435 1.43s-2.56-.548-3.435-1.43a4.88 4.88 0 0 1-1.422-3.451z"
          fill="#d0b476"
          fillRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="B">
          <path
            d="M-826-4692H614v8187H-826z"
            clipRule="evenodd"
          ></path>
        </clipPath>
      </defs>
      <g
        clipPath="url(#B)"
        transform="translate(-9 -7)"
        fill="#d0b476"
      >
        <path
          d="M9.79 52.3V27.057c1.136.98 2.577 1.52 4.08 1.52a6.23 6.23 0 0 0 4.16-1.591c1.145 1.024 2.612 1.59 4.16 1.59a6.26 6.26 0 0 0 3.525-1.087V52.99L10.487 53a.7.7 0 0 1-.698-.701zm17.32.7V27.57h.018a6.24 6.24 0 0 0 3.409 1.015 6.23 6.23 0 0 0 4.16-1.591c1.145 1.024 2.612 1.59 4.16 1.59a6.23 6.23 0 0 0 4.16-1.591c1.145 1.024 2.612 1.59 4.16 1.59 1.512 0 2.943-.54 4.08-1.52l-.027 25.215a.7.7 0 0 1-.698.701h-.063zm6.44-21.207h9.85a.7.7 0 0 1 .698.701v9.894a.7.7 0 0 1-.698.701h-9.85a.7.7 0 0 1-.698-.701v-9.894a.7.7 0 0 1 .698-.701zm-9.5 7.962c0-.566-.215-.818-.546-1.042h-.01v-2.525c.34-.225.564-.485.564-1.05s-.564-1.258-1.252-1.258c-.698 0-1.253.7-1.253 1.258a1.09 1.09 0 0 0 .537 1.033v2.543c-.33.225-.546.476-.546 1.042s.564 1.258 1.252 1.258c.698 0 1.253-.692 1.253-1.258z"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  );
  const showCaseItem = [
    { icon: shopIcon, content: "70 points de vente en France " },
    { icon: <Eye size={43} color="#d0b476" />, content: "Estimation gratuite sans engagement " },
    { icon: <FaUsers size={43} color="#d0b476" />, content: "Service client de qualité" },
  { icon: <FaRegHandPeace size={43} color="#d0b476" />, content: "100% satisfaction garantie" },
    
  ];
  return (
    <>
      <div className="w-full bg-[#7d7d7d33B]">
        <Wrapper>
          {title ? (
            <div className="text-center text-3xl pt-14">{title}</div>
          ) : (
            ""
          )}

          <div className="grid grid-cols-4">
            {showCaseItem.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-16 gap-4 "
              >
                {item.icon}
                <div className="w-36 text-center font-bold text-lg">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
}

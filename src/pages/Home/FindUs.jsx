import { useState } from "react";
import Input from "./Input";

export default function FindUs() {
  const [myVar, setMyVar] = useState("");

  return (
    <div className="bg-gray-500 flex flex-col items-center justify-center  py-16 text-white text-3xl">
      <div className="flex mb-12 ">
        <span>
          <i className="bx bx-location-plus "></i>
        </span>
        <div>Trouvez votre Comptoir le plus proche</div>
      </div>
      <div>
        <Input placeholder={"ex Paris 3100.."} textButton={"Rechercher"}/>
      </div>
    </div>
  );
}

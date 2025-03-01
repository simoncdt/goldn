import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <form
      action=""
      className="bg-[#F2F4F7] py-5 px-3 md:px-12 rounded-lg shadow-md my-16"
    >
      <div className="text-center text-3xl font-semibold mb-6">
        Nouveau compte
      </div>

      {/* Champ Identifiant */}
      <input
        type="text"
        placeholder="Identifiant"
        className="border w-full px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8F7130]"
      />

      {/* Champ Adresse email */}
      <input
        type="text"
        placeholder="Adresse email"
        className="border w-full px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8F7130]"
      />

      {/* Champ Mot de passe */}
      <input
        type="password"
        placeholder="Mot de passe"
        className="border w-full px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8F7130]"
      />

      {/* Champ Confirmation Mot de passe */}
      <input
        type="password"
        placeholder="Confirmation Mot de passe"
        className="border w-full px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8F7130]"
      />

      {/* Cases à cocher */}
      <div className="flex flex-col gap-2 mb-6">
        <label className="flex gap-2 text-sm">
          <input
            type="checkbox"
            className="accent-[#8F7130] w-5 h-5"
          />
          <span>
            <span className="text-red-500">*</span> J’accepte les{" "}
            <a
              href="#"
              className="text-[#8F7130] underline"
            >
              Conditions Générales d’Utilisation
            </a>{" "}
            et la{" "}
            <a
              href="#"
              className="text-[#8F7130] underline"
            >
              Charte sur les Données Personnelles
            </a>
          </span>
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="accent-[#8F7130] w-4 h-4"
          />
          <span>Je souhaite recevoir la Newsletter</span>
        </label>
      </div>

      {/* Section Bas du formulaire */}
      <div className="grid grid-cols-2 items-center mb-4">
        <div className="text-sm text-red-500">Champ obligatoire</div>

        <div className="flex flex-col items-end">
          <button className="bg-[#8F7130] text-white px-6 py-3 rounded-lg hover:bg-[#A78B4A] transition">
            Valider
          </button>
          <Link
            to="#"
            className="text-sm text-[#8F7130] hover:underline mt-2"
          >
            Mot de passe oublié ?
          </Link>
        </div>
      </div>

      {/* Texte informatif */}
      <p className="text-xs text-gray-600 leading-relaxed">
        Les renseignements que vous nous transmettez nous permettent de vous
        envoyer des newsletters adaptées à vos centres d’intérêts. Votre email
        est nécessaire à votre inscription afin de confirmer votre identité. Si
        vous ne fournissez pas les informations obligatoires demandées, vous ne
        pourrez pas accéder à nos services.
        <br />
        Vous pourrez clôturer votre compte en vous rendant à tout moment sur
        celui-ci.
        <br />
        Conformément à notre politique générale en matière de données
        personnelles, vous disposez d’un droit d’accès vous permettant à tout
        moment de connaître la nature des données collectées vous concernant, de
        demander leur rectification ou leur effacement. Ce droit s’exerce par
        simple envoi d’un email. Pour tout savoir sur la manière dont Gold Trade
        gère les données personnelles, vous pouvez vous reporter à notre{" "}
        <a
          href="#"
          className="text-[#8F7130] underline"
        >
          Charte sur les Données Personnelles
        </a>
        .
      </p>
    </form>
  );
}

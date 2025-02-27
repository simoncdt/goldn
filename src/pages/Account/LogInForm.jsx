import { Link } from "react-router-dom";

export default function LogInForm() {
  return (
    <form
                  action=""
                  className="bg-[#F2F4F7] py-12 px-12 rounded-lg shadow-md my-16"
                >
                  <div className="text-center text-3xl font-semibold mb-6">
                    Déjà inscrit
                  </div>

                  {/* Champ Identifiant */}
                  <input
                    type="text"
                    placeholder="Identifiant"
                    className="border w-full px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8F7130]"
                  />

                  {/* Champ Mot de passe */}
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="border w-full px-4 py-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#8F7130]"
                  />

                  {/* Section Bas du formulaire */}
                  <div className="grid grid-cols-2 items-center">
                    <div className="text-sm text-red-500">
                      Champ obligatoire
                    </div>

                    <div className="flex flex-col items-end">
                      <button className="bg-[#8F7130] text-white px-6 py-3 rounded-lg hover:bg-[#A78B4A] transition">
                        Connexion
                      </button>
                      <Link
                        to="#"
                        className="text-sm text-[#8F7130] hover:underline mt-2"
                      >
                        Mot de passe oublié ?
                      </Link>
                    </div>
                  </div>
                </form>
  )
}

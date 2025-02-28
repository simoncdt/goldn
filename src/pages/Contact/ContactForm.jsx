export default function ContactForm() {
  return (
    <>
      <div className=" px-5 md:px-32 py-16 bg-[#F2F4F7]">
        <div className="text-2xl md:text-3xl mb-12">
          Remplissez le formulaire ci-dessous et cliquez sur Envoyer
        </div>
        <form className="md:grid  md:grid-cols-2 gap-6 w-full">
          {/* Civilité - Occupe toute la largeur */}
          <div className="col-span-2 py-2 md:py-0 ">
            <label className="block font-semibold mb-1">Civilité*</label>
            <select className="w-full border px-3 py-2 rounded-lg bg-white">
              <option value="">Sélectionnez...</option>
              <option value="madame">Madame</option>
              <option value="monsieur">Monsieur</option>
            </select>
          </div>

          {/* Prénom */}
          <div className=" py-2 md:py-0">
            <label className="block font-semibold mb-1">Prénom*</label>
            <input
              type="text"
              placeholder="Prénom"
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* Nom */}
          <div className=" py-2 md:py-0">
            <label className="block font-semibold mb-1">Nom*</label>
            <input
              type="text"
              placeholder="Nom"
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* Email */}
          <div className=" py-2 md:py-0">
            <label className="block font-semibold mb-1">E-mail*</label>
            <input
              type="email"
              placeholder="exemple@email.com"
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* Numéro de téléphone */}
          <div className=" py-2 md:py-0"> 
            <label className="block font-semibold mb-1">
              Numéro de téléphone*
            </label>
            <input
              type="tel"
              placeholder="+229 99 99 99 99"
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* Message - Occupe toute la largeur */}
          <div className="col-span-2 py-2 md:py-0">
            <label className="block font-semibold mb-1">Message*</label>
            <textarea
              placeholder="Votre message..."
              className="w-full border px-3 py-2 rounded-lg h-32"
            ></textarea>
          </div>

          {/* Bouton d'envoi */}
          <div className="col-span-2 flex justify-end">
            <button className="bg-[#8F7130] text-white px-6 py-3 rounded-lg hover:bg-opacity-80">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

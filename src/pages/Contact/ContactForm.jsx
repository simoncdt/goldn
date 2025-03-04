export default function ContactForm() { 
  return (
    <div className="px-6 md:px-32 py-16 bg-[#F7F8FA] text-[#2E2E2E]">
      {/* Titre du formulaire */}
      <div className="text-3xl md:text-4xl font-semibold mb-12">
        Remplissez le formulaire ci-dessous et cliquez sur <span className="text-[#C9A227]">Envoyer</span>
      </div>

      {/* Formulaire */}
      <form className="md:grid md:grid-cols-2 gap-6 w-full">
        
        {/* Civilité */}
        <div className="col-span-2 py-3">
          <label className="block font-medium mb-2">Civilité*</label>
          <select className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md bg-white focus:ring-2 focus:ring-[#C9A227] outline-none">
            <option value="">Sélectionnez...</option>
            <option value="madame">Madame</option>
            <option value="monsieur">Monsieur</option>
          </select>
        </div>

        {/* Prénom */}
        <div className="py-3">
          <label className="block font-medium mb-2">Prénom*</label>
          <input
            type="text"
            placeholder="Prénom"
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
          />
        </div>

        {/* Nom */}
        <div className="py-3">
          <label className="block font-medium mb-2">Nom*</label>
          <input
            type="text"
            placeholder="Nom"
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
          />
        </div>

        {/* Email */}
        <div className="py-3">
          <label className="block font-medium mb-2">E-mail*</label>
          <input
            type="email"
            placeholder="exemple@email.com"
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
          />
        </div>

        {/* Téléphone */}
        <div className="py-3">
          <label className="block font-medium mb-2">Numéro de téléphone*</label>
          <input
            type="tel"
            placeholder="+33 7 01 05 10 09"
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
          />
        </div>

        {/* Message */}
        <div className="col-span-2 py-3">
          <label className="block font-medium mb-2">Message*</label>
          <textarea
            placeholder="Votre message..."
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md h-32 resize-none focus:ring-2 focus:ring-[#C9A227] outline-none"
          ></textarea>
        </div>

        {/* Bouton d'envoi */}
        <div className="col-span-2 flex justify-end">
          <button className="bg-[#C9A227] text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 hover:scale-105 transition duration-300 ease-in-out">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

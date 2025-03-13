import React, { useState } from 'react';

export default function ContactForm() {
  // États pour les champs du formulaire
  const [criteres, setCriteres] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // État pour gérer l'envoi du formulaire
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' }); // État pour gérer le statut de l'envoi

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation simple côté client
    if (!criteres || !prenom || !nom || !email || !telephone || !message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setIsSubmitting(true); // Désactiver le bouton et afficher un indicateur de chargement

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ criteres, prenom, nom, email, telephone, message }),
      });

      const data = await response.json();

      if (data.message === 'Rendez-vous créé avec succès') {
        setSubmitStatus({ success: true, message: 'Rendez-vous enregistré avec succès !' });
        // Réinitialiser le formulaire
        setCriteres('');
        setPrenom('');
        setNom('');
        setEmail('');
        setTelephone('');
        setMessage('');
      } else {
        setSubmitStatus({ success: false, message: 'Une erreur est survenue : ' + data.message });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({ success: false, message: 'Une erreur est survenue lors de l’envoi du formulaire.' });
    } finally {
      setIsSubmitting(false); // Réactiver le bouton après l'envoi
    }
  };

  return (
    <div className="px-6 md:px-32 py-16 bg-[#F7F8FA] text-[#2E2E2E]">
      {/* Titre du formulaire */}
      <div className="text-3xl md:text-4xl font-semibold mb-12">
        Remplissez le formulaire ci-dessous et cliquez sur{' '}
        <span className="text-[#C9A227]">Envoyer</span>
      </div>

      {/* Afficher un message de succès ou d'erreur */}
      {submitStatus.message && (
        <div
          className={`mb-6 p-4 rounded-md ${
            submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Formulaire */}
      <form className="md:grid md:grid-cols-2 gap-6 w-full" onSubmit={handleSubmit}>
        {/* Civilité */}
        <div className="col-span-2 py-3">
          <label className="block font-medium mb-2">Civilité*</label>
          <select
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md bg-white focus:ring-2 focus:ring-[#C9A227] outline-none"
            value={criteres}
            onChange={(e) => setCriteres(e.target.value)}
            required
          >
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
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>

        {/* Nom */}
        <div className="py-3">
          <label className="block font-medium mb-2">Nom*</label>
          <input
            type="text"
            placeholder="Nom"
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="py-3">
          <label className="block font-medium mb-2">E-mail*</label>
          <input
            type="email"
            placeholder="exemple@email.com"
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Téléphone */}
        <div className="py-3">
          <label className="block font-medium mb-2">Numéro de téléphone*</label>
          <input
            type="tel"
            placeholder="Ex: +33 7 01 05 10 09"
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>

        {/* Message */}
        <div className="col-span-2 py-3">
          <label className="block font-medium mb-2">Message*</label>
          <textarea
            placeholder="Votre message..."
            className="w-full border border-[#D1D5DB] px-4 py-3 rounded-md h-32 resize-none focus:ring-2 focus:ring-[#C9A227] outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Bouton d'envoi */}
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#C9A227] text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 hover:scale-105 transition duration-300 ease-in-out"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </div>
      </form>
    </div>
  );
}
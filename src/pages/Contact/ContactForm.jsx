import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const API_URL = import.meta.env.VITE_API_URL;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation avec Yup
  const validationSchema = Yup.object({
    criteres: Yup.string().required(
      "Veuillez renseigner ce champ s'il vous plaît"
    ),
    prenom: Yup.string()
      .min(2, "Le prénom doit comporter au moins 2 caractères")
      .max(50, "Le prénom ne peut pas dépasser 50 caractères")
      .required("Veuillez renseigner votre prénom s'il vous plaît"),
    nom: Yup.string()
      .min(2, "Le nom doit comporter au moins 2 caractères")
      .max(50, "Le nom ne peut pas dépasser 50 caractères")
      .required("Veuillez renseigner votre nom s'il vous plaît"),
    email: Yup.string()
      .email("Veuillez entrer une adresse email valide")
      .required("Veuillez renseigner votre email s'il vous plaît"),
    telephone: Yup.string()
      .matches(/^\+?\d{1,4}[\s]?\d{6,12}$/, "Veuillez entrer un numéro de téléphone valide")
      .required("Veuillez renseigner votre numéro de téléphone s'il vous plaît"),
    message: Yup.string().required("Veuillez entrer votre message s'il vous plaît"),
  });
  

  // Gestion du formulaire avec Formik
  const formik = useFormik({
    initialValues: {
      criteres: "",
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_URL}/api/appointments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (data.message === "Rendez-vous créé avec succès") {
          setSubmitStatus({
            success: true,
            message: "Rendez-vous enregistré avec succès !",
          });
          resetForm();
        } else {
          setSubmitStatus({
            success: false,
            message: "Une erreur est survenue : " + data.message,
          });
        }
      } catch (error) {
        setSubmitStatus({
          success: false,
          message: "Erreur d'envoi du formulaire.",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="px-6 md:px-32 py-16 bg-[#F7F8FA] text-[#2E2E2E]">
      <div className="text-3xl md:text-4xl font-semibold mb-12">
        Remplissez le formulaire ci-dessous et cliquez sur{" "}
        <span className="text-[#C9A227]">Envoyer</span>
      </div>

      {submitStatus.message && (
        <div
          className={`mb-6 p-4 rounded-md ${
            submitStatus.success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form
        className="md:grid md:grid-cols-2 gap-6 w-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-span-2 py-3">
          <label className="block font-medium mb-2">Civilité*</label>
          <select
            className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
            {...formik.getFieldProps("criteres")}
          >
            <option value="">Sélectionnez...</option>
            <option value="madame">Madame</option>
            <option value="monsieur">Monsieur</option>
          </select>
          {formik.touched.criteres && formik.errors.criteres && (
            <p className="text-red-500">{formik.errors.criteres}</p>
          )}
        </div>

        {[
          { name: "prenom", type: "text", label: "Prénom", placeholder: "Jean" },
          { name: "nom", type: "text", label: "Nom", placeholder: "Dupont" },
          { name: "email", type: "email", label: "E-mail", placeholder: "exemple@gmail.com" },
          { name: "telephone", type: "tel", label: "Numéro de téléphone", placeholder: "+229 612345678" },
        ].map(({ name, type, label, placeholder }) => (
          <div
            className="py-3"
            key={name}
          >
            <label className="block font-medium mb-2">{label}*</label>
            <input
              type={type}
              className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#C9A227] outline-none"
              placeholder={placeholder}
              {...formik.getFieldProps(name)}
            />
            {formik.touched[name] && formik.errors[name] && (
              <p className="text-red-500">{formik.errors[name]}</p>
            )}
          </div>
        ))}

        <div className="col-span-2 py-3">
          <label className="block font-medium mb-2">Message*</label>
          <textarea
            className="w-full border px-4 py-3 rounded-md h-32 resize-none focus:ring-2 focus:ring-[#C9A227] outline-none"
            placeholder="Votre message..."
            {...formik.getFieldProps("message")}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500">{formik.errors.message}</p>
          )}
        </div>

        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#C9A227] w-full text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center"
          >
            {isSubmitting ? <span className="loader mr-2"></span> : "Envoyer"}
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Kanban from "@/components/kanban";
import Create from "@/components/create"; // formulaire/modal

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Bouton Créer un projet */}
      <button
        onClick={() => setShowForm(true)} // <-- AJOUT : affichage du formulaire/modal
        className="w-50 p-3 rounded-lg bg-green-400 text-white flex items-center gap-3 absolute top-5 right-5"
      >
        <Plus className="w-4 h-4" />
        <span>Créer un projet</span>
      </button>

      {/* Kanban uniquement si le formulaire/modal n'est pas affiché */}
      {!showForm && <Kanban />}

      {/* Formulaire/modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-3xl h-9/12 rounded-lg shadow-lg">
            <Create />
            <div className="m-12 mt-8 flex gap-2">
               <button
              
              className="w-2xl p-3 bg-blue-600 text-white rounded-lg text-center"
            >
              Enregistrer
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="w-2xl p-3 bg-red-500 text-white rounded-lg text-center"
            >
              Annuler
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

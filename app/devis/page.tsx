
"use client"

import { useState } from 'react'
import { Plus, X, ArrowDownToLine } from 'lucide-react'

export default function Devis() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-gray-100 min-h-screen relative">

      <button
        onClick={() => setOpen(true)}
        className="w-50 p-3 rounded-lg bg-green-400 text-white flex items-center gap-3 absolute top-5 right-5"
      >
        <Plus className="w-4 h-4" />
        <span>Ajouter un Devis</span>
      </button>

      {/* Interface (modal) */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-100 relative top-2">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-7"
            >
              <X />
            </button>

            <h2 className="text-xl font-bold mb-4">
              Nouveau devis
            </h2>

            <input
              placeholder="Nom du client"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              placeholder="Numero de devis"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              placeholder="Telecharger le document"
              className="w-full border p-2 rounded mb-3"
            />
            <ArrowDownToLine className="w-4 h-4 relative left-80 -top-10.5" />
            

            <button className="w-full bg-green-400 text-white p-2 rounded">
              Créer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}











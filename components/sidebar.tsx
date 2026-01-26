"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  LayoutDashboard,
  TextQuote,
  FileCheck,
  ReceiptText,
  ListCheck,
  Moon,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `
      flex items-center gap-4
      p-3
      rounded-lg
      font-medium
      ml-3
      transition
      ${
        pathname === href
          ? "bg-blue-600 text-white"
          : "text-white hover:bg-blue-600"
      }
    `;

  return (
    <aside className="bg-teal-500 fixed min-h-screen w-60 text-white">
      <div>
        <Link href="/">
          <Layers className="w-7 h-7 relative top-7 left-12 text-black" />
          <h1 className="font-bold text-black text-2xl text-center">Zeno</h1>
        </Link>
      </div>

      <hr className="mt-5" />

      <ul className="space-y-5 text-center mt-14 mr-4">
        <li>
          <Link href="/" className={linkClass("/")}>
            <LayoutDashboard className="w-5 h-5" />
            <span>Tableau de bord</span>
          </Link>
        </li>

        <li>
          <Link href="/devis" className={linkClass("/devis")}>
            <TextQuote className="w-5 h-5" />
            <span>Devis</span>
          </Link>
        </li>

        <li>
          <Link href="/factures" className={linkClass("/factures")}>
            <FileCheck className="w-5 h-5" />
            <span>Factures</span>
          </Link>
        </li>

        <li>
          <Link href="/contrats" className={linkClass("/contrats")}>
            <ReceiptText className="w-5 h-5" />
            <span>Contrats</span>
          </Link>
        </li>

        <li>
          <Link href="/livrables" className={linkClass("/livrables")}>
            <ListCheck className="w-5 h-5" />
            <span>Livrables</span>
          </Link>
        </li>
      </ul>

      <hr className="mt-24 bg-gray-400" />

      <div className="w-53 p-3 rounded-lg bg-gray-100 text-gray-700 flex items-center gap-3 ml-3 mt-4.5">
        <Moon className="w-4 h-4 ml-2" />
        <span className="text-sm">Sombre</span>
      </div>
    </aside>
  );
}

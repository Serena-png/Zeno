import Link from "next/link";
import { Layers, LayoutDashboard, TextQuote, FileCheck, ReceiptText, ListCheck, Moon} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-teal-500 fixed min-h-screen w-60 text-white">
     
      <div>      
        <Link href="/">
        <Layers className="w-7 h-7 relative top-7 left-12 text-black" /> 
          <h1 className="font-bold text-black text-2xl text-center">Zeno</h1>
        </Link>
      </div>
     <hr className="mt-5"/>

      <ul className="space-y-5 text-center mt-14 mr-4">
       <li>
          <Link
            href="/"
            className="
              flex items-center gap-4
              p-3
             text-white
              rounded-lg
              font-medium
              ml-3
               bg-teal-500
              hover:bg-blue-600
              
            "
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Tableau de bord</span>
          </Link>
        </li>
         <li>
          <Link
            href="/"
            className="
              flex items-center gap-4
              p-3
             text-white
              rounded-lg
              font-medium
              ml-3
               bg-teal-500
              hover:bg-blue-600
              
            "
          >
            <TextQuote className="w-5 h-5" />
            <span>Devis</span>
          </Link>
        </li>
       <li>
          <Link
            href="/"
            className="
              flex items-center gap-4
              p-3
             text-white
              rounded-lg
              font-medium
              ml-3
               bg-teal-500
              hover:bg-blue-600
              
            "
          >
            <FileCheck className="w-5 h-5" />
            <span>Factures</span>
          </Link>
        </li>
         <li>
          <Link
            href="/"
            className="
              flex items-center gap-4
              p-3
              text-white
              rounded-lg
              font-medium
              ml-3
               bg-teal-500
              hover:bg-blue-600
              
            "
          >
            <ReceiptText className="w-5 h-5" />
            <span>Contrats</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="
              flex items-center gap-4
              p-3
              text-white
              rounded-lg
              font-medium
              ml-3
              bg-teal-500
              hover:bg-blue-600
              
            "
          >
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

  
  

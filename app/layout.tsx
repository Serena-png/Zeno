import type { Metadata } from "next";
import {Inter, Poppins} from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Zeno",
  description: "Systeme de gestion de clients de la Zoldick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <Sidebar />
        <main className="ml-60">
          {children}
        </main>
      </body>
    </html>
  );
}

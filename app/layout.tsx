import "./globals.css";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import type { ReactNode } from "react";
import { BgComponent } from "@/components/BgComponent";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // light → bold
  variable: "--font-poppins",
});

export const metadata = {
  title: "Moksha Investment",
  description: "Your Trusted Financial Partner",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased min-h-screen bg-white text-slate-900">
        <BgComponent />
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}

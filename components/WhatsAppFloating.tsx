import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const WHATSAPP_PHONE = "9029026060"; // replace with your real number

export default function WhatsAppFloating() {
  const wa = `https://wa.me/${WHATSAPP_PHONE.replace(/[^\d]/g, "")}`;
  return (
    <Link
      href={wa}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-xl">
      <FaWhatsapp />
      </span>
    </Link>
  );
}



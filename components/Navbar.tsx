"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CldImage } from 'next-cloudinary';


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b border-slate-200 fixed w-full top-0 z-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <CldImage src="logo_rooo2t" alt="Moksha Investment" width={36} height={36} className="rounded" />
          <span className="text-base md:text-lg font-semibold">Moksha Investment</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6 text-black/90">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/admin">Admin</Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black/80 hover:text-black focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            {open ? (
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/20/0">{/* transparent border placeholder */}
          <div className="mx-auto max-w-7xl px-6 pb-4 pt-2 space-y-2 text-black/90 bg-white/60 backdrop-blur rounded-b-xl">
            <Link href="/" className="block" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className="block" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/services" className="block" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/contact" className="block" onClick={() => setOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

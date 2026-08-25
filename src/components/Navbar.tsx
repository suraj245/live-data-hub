"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f1944] border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navbar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              className="rounded-half"
              src="/images/logo.jpg"
              alt="Live Data Hub"
              width={40}
              height={40}
            />

            <h1 className="text-xl font-bold">LiveDataHub</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-slate-300">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/crypto">Crypto</Link>
            </li>

            <li>
              <Link href="/weather">Weather</Link>
            </li>

            <li>
              <Link href="/currency">Currency</Link>
            </li>
          </ul>

          {/* Github Button */}
          <div className="hidden md:block">
            <button
              className="
              border
              border-slate-700
              px-5
              py-2
              rounded-xl
              hover:bg-slate-800
              transition
            "
            >
              GitHub
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-4 text-slate-300">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/crypto">Crypto</Link>
              </li>

              <li>
                <Link href="/weather">Weather</Link>
              </li>

              <li>
                <Link href="/currency">Currency</Link>
              </li>

              <li>
                <Link href="/">
                  <button
                    className="
                      border
                      border-slate-700
                      px-5
                      py-2
                      rounded-xl
                      hover:bg-slate-800
                      transition
                    "
                  >
                    GitHub
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, UtensilsCrossed } from "lucide-react";

const DOCK_ITEMS = [
  { id: "restaurant", label: "Heritage" },
  { id: "cuisines", label: "Menu" },
  { id: "facilities", label: "Spaces" },
  { id: "person", label: "Founder" },
  { id: "testimonials", label: "Voices" },
  { id: "news", label: "Press" },
  { id: "contact", label: "Visit" },
];

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState<string>("restaurant");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = DOCK_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(DOCK_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(DOCK_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Tablet Floating Pill Dock (High-Contrast Obsidian Forest) */}
      <div className="fixed top-5 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Primary dock navigation"
          className="pointer-events-auto flex items-center gap-1 rounded-full px-3 py-1.5 bg-[#0a1f14] text-[#faf6ee] border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
        >
          {/* Brand Monogram */}
          <a
            href="#top"
            aria-label="Hotel Vaishali — Back to top"
            className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full font-serif text-sm font-semibold tracking-tight text-white hover:text-[#dfa035] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#c88218]" />
            <span>Vaishali</span>
          </a>

          <span className="h-4 w-[1px] mx-1 bg-white/20" aria-hidden="true" />

          {/* Dock Links */}
          <ul className="flex items-center gap-0.5">
            {DOCK_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors block ${
                      isActive
                        ? "text-[#0a1f14] font-bold"
                        : "text-[#d8cfc4] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="dock-active-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-[#dfa035] -z-0"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <span className="h-4 w-[1px] mx-1 bg-white/20" aria-hidden="true" />

          {/* Direct Call Pill */}
          <a
            href="tel:+912025531244"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-[#dfa035] hover:text-[#0a1f14] border border-white/15 transition-all"
          >
            <Phone className="w-3 h-3" />
            <span>(020) 25531244</span>
          </a>
        </motion.nav>
      </div>

      {/* Mobile Bottom Floating Dock (375px optimized) */}
      <div className="fixed bottom-4 inset-x-0 z-50 flex md:hidden justify-center px-3 pointer-events-none">
        <nav
          aria-label="Mobile dock navigation"
          className="pointer-events-auto flex items-center justify-between gap-1 w-full max-w-[390px] rounded-full bg-[#0a1f14] text-[#faf6ee] border border-white/20 px-2 py-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
        >
          <a
            href="#restaurant"
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-colors ${
              activeSection === "restaurant" ? "bg-[#dfa035] text-[#0a1f14] font-bold" : "text-[#d8cfc4]"
            }`}
          >
            Story
          </a>
          <a
            href="#cuisines"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-colors ${
              activeSection === "cuisines" ? "bg-[#dfa035] text-[#0a1f14] font-bold" : "text-[#d8cfc4]"
            }`}
          >
            <UtensilsCrossed className="w-3 h-3" />
            <span>Menu</span>
          </a>
          <a
            href="#facilities"
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-colors ${
              activeSection === "facilities" ? "bg-[#dfa035] text-[#0a1f14] font-bold" : "text-[#d8cfc4]"
            }`}
          >
            Spaces
          </a>
          <a
            href="#person"
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-colors ${
              activeSection === "person" ? "bg-[#dfa035] text-[#0a1f14] font-bold" : "text-[#d8cfc4]"
            }`}
          >
            Legacy
          </a>
          <a
            href="#contact"
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium transition-colors ${
              activeSection === "contact" ? "bg-[#dfa035] text-[#0a1f14] font-bold" : "text-[#d8cfc4]"
            }`}
          >
            Visit
          </a>
          <a
            href="tel:+912025531244"
            aria-label="Call Hotel Vaishali"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#dfa035] text-[#0a1f14]"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
        </nav>
      </div>
    </>
  );
}

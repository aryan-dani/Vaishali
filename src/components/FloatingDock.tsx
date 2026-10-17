"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, UtensilsCrossed } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const scrollPosition = window.scrollY + 260;
      for (let i = DOCK_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(DOCK_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(DOCK_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Tablet Floating Pill Dock (Top Center) */}
      <div className="fixed top-5 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Primary dock navigation"
          className={`pointer-events-auto flex items-center gap-1 rounded-full px-2.5 py-1.5 transition-all duration-300 border ${
            scrolled
              ? "bg-[#0e2619]/92 text-[#faf6ee] border-white/15 shadow-[0_18px_40px_rgba(12,33,22,0.28)] backdrop-blur-xl"
              : "bg-[#faf6ee]/88 text-[#141915] border-[#d2c5ae]/80 shadow-[0_10px_30px_rgba(18,46,31,0.08)] backdrop-blur-md"
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#top"
            aria-label="Hotel Vaishali — Back to top"
            className={`flex items-center gap-2 pl-2.5 pr-3 py-1 rounded-full font-serif text-sm font-semibold tracking-tight transition-colors ${
              scrolled ? "text-[#faf6ee] hover:text-[#dfa035]" : "text-[#122e1f] hover:text-[#a65212]"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#c88218]" />
            <span>Vaishali</span>
          </a>

          <span
            className={`h-4 w-[1px] mx-0.5 ${
              scrolled ? "bg-white/15" : "bg-[#d2c5ae]"
            }`}
            aria-hidden="true"
          />

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
                        ? scrolled
                          ? "text-[#122e1f] font-semibold"
                          : "text-[#faf6ee] font-semibold"
                        : scrolled
                        ? "text-[#faf6ee]/80 hover:text-white"
                        : "text-[#3b443d] hover:text-[#122e1f]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="dock-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className={`absolute inset-0 rounded-full -z-10 ${
                          scrolled ? "bg-[#dfa035]" : "bg-[#122e1f]"
                        }`}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <span
            className={`h-4 w-[1px] mx-0.5 ${
              scrolled ? "bg-white/15" : "bg-[#d2c5ae]"
            }`}
            aria-hidden="true"
          />

          {/* Direct Call Pill */}
          <a
            href="tel:+912025531244"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              scrolled
                ? "bg-white/10 text-[#faf6ee] hover:bg-white/20"
                : "bg-[#e6efe9] text-[#122e1f] hover:bg-[#122e1f] hover:text-[#faf6ee]"
            }`}
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
          className="pointer-events-auto flex items-center justify-between gap-1 w-full max-w-[390px] rounded-full bg-[#0e2619]/95 text-[#faf6ee] border border-white/15 px-2 py-1.5 shadow-[0_18px_40px_rgba(12,33,22,0.4)] backdrop-blur-xl"
        >
          <a
            href="#restaurant"
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium ${
              activeSection === "restaurant" ? "bg-[#dfa035] text-[#0e2619] font-semibold" : "text-[#faf6ee]/80"
            }`}
          >
            Story
          </a>
          <a
            href="#cuisines"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-medium ${
              activeSection === "cuisines" ? "bg-[#dfa035] text-[#0e2619] font-semibold" : "text-[#faf6ee]/80"
            }`}
          >
            <UtensilsCrossed className="w-3 h-3" />
            <span>Menu</span>
          </a>
          <a
            href="#facilities"
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium ${
              activeSection === "facilities" ? "bg-[#dfa035] text-[#0e2619] font-semibold" : "text-[#faf6ee]/80"
            }`}
          >
            Spaces
          </a>
          <a
            href="#person"
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium ${
              activeSection === "person" ? "bg-[#dfa035] text-[#0e2619] font-semibold" : "text-[#faf6ee]/80"
            }`}
          >
            Legacy
          </a>
          <a
            href="#contact"
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium ${
              activeSection === "contact" ? "bg-[#dfa035] text-[#0e2619] font-semibold" : "text-[#faf6ee]/80"
            }`}
          >
            Visit
          </a>
          <a
            href="tel:+912025531244"
            aria-label="Call Hotel Vaishali"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c88218] text-[#0e2619]"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
        </nav>
      </div>
    </>
  );
}

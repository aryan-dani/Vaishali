import React from "react";
import { ArrowDownRight, Phone, MapPin, MessageCircle } from "lucide-react";
import FloatingDock from "@/components/FloatingDock";
import MenuLedger from "@/components/MenuLedger";
import VoicesAndPress from "@/components/VoicesAndPress";
import VisitAndEnquiry from "@/components/VisitAndEnquiry";
import { FACILITIES_INDEX } from "@/data/vaishaliData";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-paper-grain">
      {/* Floating Navigation Dock */}
      <FloatingDock />

      <main className="flex-1">
        {/* =================================================================
            1. HERO — EDITORIAL SPREAD & PHOTOGRAPHIC DIPTYCH
        ================================================================== */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-[1220px] mx-auto px-5 md:px-10">
            {/* Overline Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-[#265c3f] font-semibold mb-6">
              <span>1218/1 Shivajinagar, FC Road, Pune</span>
              <span className="text-[#d2c5ae]">•</span>
              <span className="text-[#a65212]">★ 4.3 Google Rating (18,000+ Reviews)</span>
              <span className="text-[#d2c5ae]">•</span>
              <span>100% Pure Vegetarian</span>
            </div>

            {/* Asymmetric Editorial Headline + Lead */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 md:mb-16">
              <div className="lg:col-span-8">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] text-[#0c2116] leading-[1.05] tracking-tight">
                  Where Pune Gathers Over{" "}
                  <em className="font-normal italic text-[#1b432d]">Crisp Dosas</em> &amp;
                  Brass-Cup Coffee.
                </h1>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-[#d2c5ae] lg:pl-8">
                <p className="text-base text-[#3b443d] leading-relaxed mb-6">
                  Pune’s beloved South Indian institution on Fergusson College Road—serving golden roast dosas, pillowy steamed idlis, medu vadas, and house-blended chutneys under our banyan-shaded garden canopy since 1951.
                </p>

                {/* Primary Hero CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#cuisines"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122e1f] text-[#faf6ee] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#0c2116] transition-colors"
                  >
                    <span>View Menu</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+912025531244"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#c88218] text-[#0c2116] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#dfa035] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Hotel+Vaishali+1218/1+Fergusson+College+Road+Pune+411004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-[#122e1f]/30 text-[#0c2116] text-xs uppercase tracking-[0.16em] font-semibold hover:border-[#0c2116] hover:bg-[#f3ece0] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Uncropped Editorial Photographic Diptych */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Main Feast Photograph (8 Cols) */}
              <figure className="lg:col-span-8">
                <div className="border border-[#122e1f]/20 p-1.5 bg-[#f3ece0]">
                  <img
                    src="/images/hero-feast.png"
                    alt="Golden crispy masala dosa, fluffy steamed idlis, crispy medu vada, and brass bowls of coconut chutney, red chutney, and piping hot sambar served on a fresh banana leaf beside frothy South Indian filter coffee"
                    width={1200}
                    height={675}
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-[#68736b]">
                  <span>Fig 01. — Banana-leaf service: Mysore Masala Dosa, Idli, Medu Vada &amp; Sambar</span>
                  <span className="hidden sm:inline">Morning Ritual</span>
                </figcaption>
              </figure>

              {/* Secondary Filter Coffee Close-Up (4 Cols) */}
              <figure className="lg:col-span-4">
                <div className="border border-[#122e1f]/20 p-1.5 bg-[#f3ece0]">
                  <img
                    src="/images/filter-coffee.png"
                    alt="Frothy South Indian filter coffee in a vintage brass davara tumbler alongside crispy medu vadas and coconut chutney on a banana leaf"
                    width={800}
                    height={600}
                    className="w-full aspect-[16/10] lg:aspect-[4/4.12] object-cover"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-[#68736b]">
                  <span>Fig 02. — Brass-davara Filter Coffee &amp; Vada</span>
                  <span>All Day</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. THE RESTAURANT — HERITAGE & ARCHITECTURAL STORY
        ================================================================== */}
        <section
          id="restaurant"
          aria-labelledby="about-heading"
          className="py-20 md:py-28 border-t border-[#d2c5ae] bg-[#f3ece0]/50"
        >
          <div className="max-w-[1220px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Narrative Column (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#265c3f] font-semibold mb-3">
                  <span>I. The Restaurant</span>
                  <span className="h-[1px] w-8 bg-[#265c3f]/40" />
                  <span>Since 1951</span>
                </div>

                <h2
                  id="about-heading"
                  className="font-serif text-3xl sm:text-4xl md:text-[42px] text-[#0c2116] leading-[1.12] tracking-tight mb-6"
                >
                  The Chosen Meeting Place of a City.
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#3b443d] leading-relaxed">
                  <p>
                    Every dish at Hotel Vaishali carries a distinct signature—crafted with house-roasted masalas, stone-ground batters, and an unwavering respect for South Indian culinary tradition that has anchored Fergusson College Road since 1951.
                  </p>
                  <p>
                    Originally established as <em>Madras Health Home</em> by the visionary Late Shri Jagannath B. Shetty and nurtured across generations into Pune’s iconic <strong>Vaishali</strong>, our tables have hosted everyone from college students and poets to industrialists and national leaders.
                  </p>
                  <p>
                    Guests may dine inside our classic hall or gather outdoors in the shaded garden courtyard—where finding an empty table during Pune’s lively evening hours is a testament to seven decades of affection.
                  </p>
                </div>
              </div>

              {/* Right Courtyard Photograph (7 Cols) */}
              <figure className="lg:col-span-7">
                <div className="border border-[#122e1f]/25 p-2 bg-[#faf6ee]">
                  <img
                    src="/images/courtyard-ambiance.png"
                    alt="Sunlit open-air garden courtyard of Hotel Vaishali beneath ancient trees on Fergusson College Road"
                    width={960}
                    height={720}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-[0.15em] text-[#68736b]">
                  <span>Fig 03. — The semi-open courtyard beneath FC Road’s rain &amp; banyan trees</span>
                  <span>1218/1 Shivajinagar, Pune</span>
                </figcaption>
              </figure>
            </div>

            {/* Horizontal Editorial Ledger of Pillars (No boxy cards) */}
            <div className="mt-16 pt-12 border-t border-[#d2c5ae] grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-[#d2c5ae]">
              <div className="md:pr-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#a65212] block mb-2">
                  01 · Culinary Craft
                </span>
                <h3 className="font-serif text-xl text-[#0c2116] mb-2">
                  Specially Blended Masalas
                </h3>
                <p className="text-sm text-[#3b443d] leading-relaxed">
                  From our fiery Mysore red chutney to aromatic sambar and fresh coconut grindings, every condiment is prepared in-house multiple times a day.
                </p>
              </div>

              <div className="md:px-8">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#a65212] block mb-2">
                  02 · Architectural Setting
                </span>
                <h3 className="font-serif text-xl text-[#0c2116] mb-2">
                  Indoor Hall &amp; Garden Canopy
                </h3>
                <p className="text-sm text-[#3b443d] leading-relaxed">
                  Choose between our sheltered indoor family dining room or the open-air courtyard dappled with sunlight and evening breeze.
                </p>
              </div>

              <div className="md:pl-8">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#a65212] block mb-2">
                  03 · Cultural Institution
                </span>
                <h3 className="font-serif text-xl text-[#0c2116] mb-2">
                  Seven Decades on FC Road
                </h3>
                <p className="text-sm text-[#3b443d] leading-relaxed">
                  A democratic institution where three generations of Pune families sit shoulder-to-shoulder over steaming filter coffee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. MENU LEDGER (7 Tabbed Categories, Search & Dotted Leaders)
        ================================================================== */}
        <MenuLedger />

        {/* =================================================================
            4. FACILITIES & SERVICES — ARCHITECTURAL INDEX
        ================================================================== */}
        <section
          id="facilities"
          aria-labelledby="facilities-heading"
          className="py-20 md:py-28 border-t border-[#d2c5ae] bg-[#faf6ee]"
        >
          <div className="max-w-[1220px] mx-auto px-5 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#265c3f] font-semibold mb-3">
                  <span>III. Facilities &amp; Services</span>
                </div>
                <h2
                  id="facilities-heading"
                  className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0c2116] tracking-tight"
                >
                  Hospitality in Every Detail.
                </h2>
              </div>
              <p className="text-sm md:text-base text-[#3b443d] max-w-md leading-relaxed">
                Structured for swift morning service, unhurried family lunches, express takeaway parcels, and celebration catering.
              </p>
            </div>

            {/* Hairline Architectural Index Table instead of generic cards */}
            <div className="border-t border-b border-[#122e1f]/25 divide-y divide-[#d2c5ae]">
              {FACILITIES_INDEX.map((item) => (
                <div
                  key={item.number}
                  className="py-7 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-[#f3ece0]/50 transition-colors px-2 sm:px-4"
                >
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a65212] font-semibold">
                      /{item.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#68736b]">
                      {item.category}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0c2116] group-hover:text-[#1b432d] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-sm sm:text-base text-[#3b443d] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            5. PERSON BEHIND THE HOTEL — FOUNDER'S MONOGRAPH
        ================================================================== */}
        <section
          id="person"
          aria-labelledby="person-heading"
          className="py-20 md:py-28 bg-[#0e2619] text-[#faf6ee] border-t border-[#122e1f]"
        >
          <div className="max-w-[1220px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Dignified Archival Portrait Frame (4 Cols) */}
              <div className="lg:col-span-4">
                <div className="border border-[#dfa035]/35 p-2 bg-[#0c2116]">
                  <div className="border border-[#dfa035]/20 aspect-[4/5] flex flex-col justify-between p-8 bg-gradient-to-b from-[#133322] to-[#0c2116] relative overflow-hidden">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#dfa035]/80">
                      <span>Founder’s Monograph</span>
                      <span>Est. 1951</span>
                    </div>

                    {/* Minimal Botanical & Monogram Emblem */}
                    <div className="my-auto text-center py-8">
                      <div className="w-20 h-20 mx-auto rounded-full border border-[#dfa035]/40 flex items-center justify-center font-serif text-2xl text-[#dfa035] mb-4">
                        JBS
                      </div>
                      <p className="font-serif text-lg text-[#faf6ee]">
                        Late Shri Jagannath B. Shetty
                      </p>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#faf6ee]/60 mt-1">
                        Founder · Hotel Vaishali
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-[11px] text-[#faf6ee]/60 text-center">
                      Archival Portrait Frame · Reserved for official family photograph
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Biographical Tribute (8 Cols) */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#dfa035] font-semibold mb-4">
                  <span>IV. Person Behind The Hotel</span>
                  <span className="h-[1px] w-10 bg-[#dfa035]/40" />
                  <span>Leadership &amp; Ethos</span>
                </div>

                <h2
                  id="person-heading"
                  className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#faf6ee] leading-[1.12] tracking-tight mb-8"
                >
                  A Legacy Built on Early Mornings, Humility &amp; Uncompromising Taste.
                </h2>

                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#dfa035] border-l-2 border-[#dfa035] pl-6 mb-8 leading-relaxed">
                  “Serve every guest who walks through the gates as family—with steaming food, honest ingredients, and a warmth that brings them back for life.”
                </blockquote>

                <div className="space-y-4 text-sm sm:text-base text-[#faf6ee]/85 leading-relaxed mb-10">
                  <p>
                    Behind Hotel Vaishali’s enduring stature stands the vision of <strong>Late Shri Jagannath B. Shetty</strong>, whose journey from coastal Karnataka to Pune transformed a modest café on Fergusson College Road into one of India’s most admired vegetarian institutions.
                  </p>
                  <p>
                    Through personal supervision in the kitchen at dawn, unwavering care for his staff, and deep gratitude toward the people of Pune, he established a culture of hospitality that continues to guide the family management today.
                  </p>
                </div>

                {/* Heritage Figures */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15">
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-[#dfa035] block">
                      1951
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-[#faf6ee]/70">
                      Founding Era
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-[#dfa035] block">
                      18,000+
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-[#faf6ee]/70">
                      Patron Reviews
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-[#dfa035] block">
                      3rd Gen
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-[#faf6ee]/70">
                      Pune Tradition
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            6 & 7. VOICES (TESTIMONIALS) + PRESS & DOWNLOADS
        ================================================================== */}
        <VoicesAndPress />

        {/* =================================================================
            8. VISIT, MAP & ENQUIRY LEDGER
        ================================================================== */}
        <VisitAndEnquiry />
      </main>

      {/* =================================================================
          9. ARCHITECTURAL FOOTER
      ================================================================== */}
      <footer className="bg-[#0c2116] text-[#faf6ee] border-t-2 border-[#c88218] pb-24 md:pb-12">
        <div className="max-w-[1220px] mx-auto px-5 md:px-10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/12">
            {/* Brand Column (5 Cols) */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#dfa035]" />
                <span className="font-serif text-2xl text-[#faf6ee] tracking-tight">
                  Hotel Vaishali
                </span>
              </div>
              <p className="text-sm text-[#faf6ee]/75 max-w-sm leading-relaxed mb-6">
                Pune’s iconic South Indian restaurant on Fergusson College Road. Serving crisp roast dosas, pillowy idlis, medu vadas, signature masalas, and brass-cup filter coffee since 1951.
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-[#dfa035]">
                1218/1, Shivajinagar, FC Road, Pune 411004
              </p>
            </div>

            {/* Complete Original Site Directory (4 Cols) */}
            <div className="md:col-span-4">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#dfa035] font-semibold mb-4">
                Complete Index
              </h3>
              <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm text-[#faf6ee]/80">
                <li>
                  <a href="#restaurant" className="hover:text-[#dfa035] transition-colors">
                    The Restaurant
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="hover:text-[#dfa035] transition-colors">
                    Facilities &amp; Services
                  </a>
                </li>
                <li>
                  <a href="#person" className="hover:text-[#dfa035] transition-colors">
                    Person Behind The Hotel
                  </a>
                </li>
                <li>
                  <a href="#cuisines" className="hover:text-[#dfa035] transition-colors">
                    Cuisines &amp; Menu
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#dfa035] transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#downloads" className="hover:text-[#dfa035] transition-colors">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-[#dfa035] transition-colors">
                    In The News
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="hover:text-[#dfa035] transition-colors">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#dfa035] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Lines (3 Cols) */}
            <div className="md:col-span-3">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#dfa035] font-semibold mb-4">
                Telephone &amp; Desk
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#faf6ee]/80">
                <li>
                  Desk:{" "}
                  <a href="tel:+912025531244" className="text-[#faf6ee] hover:text-[#dfa035]">
                    (020) 25531244
                  </a>{" "}
                  /{" "}
                  <a href="tel:+912025531184" className="text-[#faf6ee] hover:text-[#dfa035]">
                    25531184
                  </a>
                </li>
                <li>
                  Office:{" "}
                  <a href="tel:+912025672930" className="text-[#faf6ee] hover:text-[#dfa035]">
                    (020) 25672930
                  </a>
                </li>
                <li>
                  Mail:{" "}
                  <a
                    href="mailto:info@vaishalihotel.in"
                    className="text-[#faf6ee] hover:text-[#dfa035] underline underline-offset-4"
                  >
                    info@vaishalihotel.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#faf6ee]/60">
            <p>© {new Date().getFullYear()} Hotel Vaishali (Vaishali Restaurant), Pune. All rights reserved.</p>
            <p className="text-[#faf6ee]/80">
              Concept redesign by <strong className="text-[#dfa035] font-medium">Aryan Dani</strong>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href="https://wa.me/912025531244?text=Hello%20Hotel%20Vaishali%2C%20I%20would%20like%20to%20enquire%20about%20your%20menu%20and%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire with Hotel Vaishali on WhatsApp"
        className="fixed bottom-20 md:bottom-6 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#122e1f] text-[#faf6ee] border border-[#dfa035]/50 px-4 py-2.5 text-xs uppercase tracking-[0.14em] font-semibold shadow-[0_12px_30px_rgba(12,33,22,0.35)] hover:bg-[#0c2116] hover:border-[#dfa035] transition-all"
      >
        <MessageCircle className="w-4 h-4 text-[#dfa035]" />
        <span className="hidden sm:inline">WhatsApp Desk</span>
      </a>
    </div>
  );
}

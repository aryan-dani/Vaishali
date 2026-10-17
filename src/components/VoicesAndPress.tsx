"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, FileText, Check } from "lucide-react";
import { PATRON_VOICES, PRESS_CLIPPINGS, DOWNLOAD_RESOURCES } from "@/data/vaishaliData";

export default function VoicesAndPress() {
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const currentVoice = PATRON_VOICES[voiceIndex];

  const handlePrev = () => {
    setVoiceIndex((prev) => (prev === 0 ? PATRON_VOICES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setVoiceIndex((prev) => (prev === PATRON_VOICES.length - 1 ? 0 : prev + 1));
  };

  const handleDownload = (id: string) => {
    setDownloadedId(id);
    setTimeout(() => {
      setDownloadedId((current) => (current === id ? null : current));
    }, 4000);
  };

  return (
    <>
      {/* =================================================================
          TESTIMONIALS — EDITORIAL PULL-QUOTE CHRONICLE
      ================================================================== */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="py-20 md:py-28 border-t border-[#d2c5ae] bg-[#f3ece0]/55"
      >
        <div className="max-w-[1220px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Section Meta & Google Rating Monument */}
            <div className="lg:col-span-4 lg:border-r lg:border-[#d2c5ae] lg:pr-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#265c3f] font-semibold mb-3">
                <span>V. Guest Voices</span>
              </div>
              <h2
                id="testimonials-heading"
                className="font-serif text-3xl sm:text-4xl text-[#0c2116] tracking-tight mb-6"
              >
                Three Generations at the Same Table.
              </h2>
              <p className="text-sm text-[#3b443d] leading-relaxed mb-8">
                Students from Fergusson College, morning walkers from Prabhat Road, visiting alumni, and some of India’s most celebrated artists and leaders have called these tables their own.
              </p>

              <div className="pt-6 border-t border-[#d2c5ae] flex items-baseline gap-4">
                <span className="font-serif text-4xl sm:text-5xl text-[#122e1f]">4.3★</span>
                <div>
                  <span className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#0c2116]">
                    18,000+ Google Reviews
                  </span>
                  <span className="block text-xs text-[#68736b] mt-0.5">
                    Among Pune’s most-reviewed culinary institutions
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Large Editorial Pull-Quote */}
            <div className="lg:col-span-8 flex flex-col justify-between min-h-[290px]">
              <div className="flex items-center justify-between border-b border-[#d2c5ae] pb-4 mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#68736b]">
                  Patron Archive · 0{voiceIndex + 1} / 0{PATRON_VOICES.length}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#a65212] font-semibold">
                  {currentVoice.era}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.figure
                  key={currentVoice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-10"
                >
                  <blockquote className="font-serif text-xl sm:text-2xl md:text-[28px] text-[#0c2116] leading-[1.42] tracking-tight">
                    “{currentVoice.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-semibold text-[#122e1f]">{currentVoice.author}</span>
                    <span className="text-[#d2c5ae]">—</span>
                    <span className="text-[#3b443d]">{currentVoice.context}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              {/* Minimal Hairline Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-[#d2c5ae]">
                <div className="flex items-center gap-2">
                  {PATRON_VOICES.map((voice, idx) => (
                    <button
                      key={voice.id}
                      type="button"
                      onClick={() => setVoiceIndex(idx)}
                      aria-label={`Read quote ${idx + 1} from ${voice.author}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === voiceIndex
                          ? "w-8 bg-[#122e1f]"
                          : "w-2 bg-[#d2c5ae] hover:bg-[#68736b]"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous patron quote"
                    className="w-10 h-10 rounded-full border border-[#122e1f]/25 flex items-center justify-center text-[#0c2116] hover:bg-[#122e1f] hover:text-[#faf6ee] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next patron quote"
                    className="w-10 h-10 rounded-full border border-[#122e1f]/25 flex items-center justify-center text-[#0c2116] hover:bg-[#122e1f] hover:text-[#faf6ee] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          IN THE NEWS & DOWNLOADS — ARCHITECTURAL LEDGER
      ================================================================== */}
      <section
        id="news"
        aria-labelledby="news-heading"
        className="py-20 md:py-28 border-t border-[#d2c5ae]"
      >
        <div className="max-w-[1220px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            {/* Left Column: In The News (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#265c3f] font-semibold mb-3">
                <span>VI. In The News</span>
                <span className="h-[1px] w-8 bg-[#265c3f]/40" />
                <span>Press &amp; Chronicles</span>
              </div>
              <h2
                id="news-heading"
                className="font-serif text-3xl sm:text-4xl text-[#0c2116] tracking-tight mb-8"
              >
                Written Into Pune’s Cultural Memory.
              </h2>

              <div className="divide-y divide-[#d2c5ae] border-t border-b border-[#d2c5ae]">
                {PRESS_CLIPPINGS.map((clip, index) => (
                  <article key={clip.id} className="py-6 group">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#68736b] mb-2">
                      <span className="font-semibold text-[#a65212]">{clip.publication}</span>
                      <span>0{index + 1} · {clip.year}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0c2116] group-hover:text-[#1b432d] transition-colors mb-2">
                      “{clip.title}”
                    </h3>
                    <p className="text-sm text-[#3b443d] leading-relaxed">
                      {clip.summary}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Column: Downloads & Publications (5 Cols) */}
            <div id="downloads" className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-[#d2c5ae]">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#265c3f] font-semibold mb-3">
                <span>Downloads &amp; Tariffs</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0c2116] tracking-tight mb-4">
                Menus &amp; Media Index.
              </h2>
              <p className="text-sm text-[#3b443d] leading-relaxed mb-8">
                 Printable menu sheets, bulk gathering order guidelines, and archival press notes.
              </p>

              <div className="divide-y divide-[#d2c5ae] border-t border-b border-[#d2c5ae]">
                {DOWNLOAD_RESOURCES.map((item) => {
                  const isTriggered = downloadedId === item.id;
                  return (
                    <div key={item.id} className="py-5 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#265c3f] shrink-0" />
                          <h3 className="font-serif text-lg text-[#0c2116]">{item.title}</h3>
                        </div>
                        <span className="block text-[11px] uppercase tracking-[0.14em] text-[#a65212] font-semibold mt-1">
                          {item.meta}
                        </span>
                        <p className="text-xs sm:text-sm text-[#3b443d] mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                        {isTriggered && (
                          <p className="mt-2 text-xs font-medium text-[#1b432d]">
                            ✓ Document slot ready — links directly to official PDF on launch.
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDownload(item.id)}
                        aria-label={`Download ${item.title}`}
                        className="shrink-0 w-10 h-10 rounded-full border border-[#122e1f]/25 flex items-center justify-center text-[#0c2116] hover:bg-[#122e1f] hover:text-[#faf6ee] transition-colors mt-1"
                      >
                        {isTriggered ? (
                          <Check className="w-4 h-4 text-[#265c3f]" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

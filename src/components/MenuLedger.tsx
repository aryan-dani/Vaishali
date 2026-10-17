"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, X } from "lucide-react";
import { MENU_CATEGORIES, MenuCategory } from "@/data/vaishaliData";

export default function MenuLedger() {
  const [activeTab, setActiveTab] = useState<MenuCategory["id"]>("breakfast");
  const [searchQuery, setSearchQuery] = useState("");
  const [signaturesOnly, setSignaturesOnly] = useState(false);

  const currentCategory = useMemo(
    () => MENU_CATEGORIES.find((c) => c.id === activeTab) || MENU_CATEGORIES[0],
    [activeTab]
  );

  const displayedItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length > 0) {
      return MENU_CATEGORIES.flatMap((cat) =>
        cat.items
          .filter((item) => {
            const matchesText =
              item.name.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q) ||
              (item.tag && item.tag.toLowerCase().includes(q));
            const matchesSig = !signaturesOnly || item.signature;
            return matchesText && matchesSig;
          })
          .map((item) => ({ ...item, categoryName: cat.label }))
      );
    }

    return currentCategory.items
      .filter((item) => !signaturesOnly || item.signature)
      .map((item) => ({ ...item, categoryName: currentCategory.label }));
  }, [activeTab, currentCategory, searchQuery, signaturesOnly]);

  return (
    <section
      id="cuisines"
      aria-labelledby="menu-heading"
      className="py-20 md:py-28 border-t border-[#d2c5ae]"
    >
      <div className="max-w-[1220px] mx-auto px-5 md:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#265c3f] font-semibold mb-3">
              <span>II. The Culinary Bill of Fare</span>
              <span className="h-[1px] w-10 bg-[#265c3f]/40" />
              <span>100% Pure Vegetarian</span>
            </div>
            <h2
              id="menu-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0c2116] tracking-tight"
            >
              From the Cast-Iron Tava &amp; Brass Filter.
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#3b443d] max-w-md leading-relaxed">
            Every batter is stone-ground in-house and fermented overnight. Every dish is finished with our closely guarded house-blended masalas and served on fresh banana leaves.
          </p>
        </div>

        {/* Double-Ruled Architectural Menu Ledger */}
        <div className="border border-[#122e1f]/30 p-1.5 sm:p-2 bg-[#f3ece0]/60">
          <div className="border border-[#122e1f]/20 bg-[#faf6ee]">
            {/* Top Controls Bar: Category Tabs + Search */}
            <div className="border-b border-[#d2c5ae] px-4 sm:px-8 pt-5 pb-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Category Tabs */}
              <div
                role="tablist"
                aria-label="Menu categories"
                className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0 -mx-1 px-1"
              >
                {MENU_CATEGORIES.map((category) => {
                  const isSelected = activeTab === category.id && searchQuery.trim() === "";
                  return (
                    <button
                      key={category.id}
                      role="tab"
                      type="button"
                      aria-selected={isSelected}
                      onClick={() => {
                        setActiveTab(category.id);
                        setSearchQuery("");
                      }}
                      className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                        isSelected
                          ? "text-[#faf6ee]"
                          : "text-[#3b443d] hover:text-[#0c2116] hover:bg-[#e5dccb]/50"
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          layoutId="menu-tab-pill"
                          transition={{ type: "spring", stiffness: 400, damping: 34 }}
                          className="absolute inset-0 rounded-full bg-[#122e1f] -z-0"
                        />
                      )}
                      <span className="relative z-10">{category.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search & House Classics Filter */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <div className="relative flex-1 sm:w-60">
                  <Search className="w-3.5 h-3.5 text-[#68736b] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Find dosa, spdp, coffee…"
                    aria-label="Search dishes across the menu"
                    className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-transparent border-b border-[#122e1f]/30 focus:border-[#122e1f] focus:outline-none text-[#141915] placeholder:text-[#68736b]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#68736b] hover:text-[#141915]"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSignaturesOnly(!signaturesOnly)}
                  aria-pressed={signaturesOnly}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors whitespace-nowrap ${
                    signaturesOnly
                      ? "bg-[#c88218] border-[#c88218] text-[#0c2116] font-semibold"
                      : "border-[#d2c5ae] text-[#3b443d] hover:border-[#122e1f]"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>House Classics</span>
                </button>
              </div>
            </div>

            {/* Category Sub-Banner */}
            <div className="px-5 sm:px-8 py-5 bg-[#f3ece0]/45 border-b border-[#d2c5ae]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#0c2116]">
                  {searchQuery.trim()
                    ? `Search Results for “${searchQuery.trim()}”`
                    : currentCategory.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#3b443d] mt-0.5">
                  {searchQuery.trim()
                    ? `Showing ${displayedItems.length} matching preparation${
                        displayedItems.length === 1 ? "" : "s"
                      } across the menu`
                    : currentCategory.subtitle}
                </p>
              </div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#265c3f] font-semibold shrink-0">
                {searchQuery.trim() ? "All Categories" : currentCategory.timing}
              </span>
            </div>

            {/* Two-Column Typographic Menu Sheet */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${searchQuery}-${signaturesOnly}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
                className="px-5 sm:px-8 py-8"
              >
                {displayedItems.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="font-serif text-lg text-[#0c2116]">
                      No dishes match your filter.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setSignaturesOnly(false);
                      }}
                      className="mt-3 text-xs uppercase tracking-widest text-[#a65212] underline underline-offset-4"
                    >
                      Reset Menu Filter
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {displayedItems.map((item) => (
                      <div key={item.id} className="group">
                        {/* Name + Dotted Leader + Tariff */}
                        <div className="flex items-baseline gap-2">
                          <h4 className="font-serif text-base sm:text-lg font-medium text-[#0c2116] group-hover:text-[#1b432d] transition-colors">
                            {item.name}
                          </h4>
                          {item.tag && (
                            <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#a65212] shrink-0">
                              · {item.tag}
                            </span>
                          )}
                          <span className="flex-1 border-b border-dotted border-[#d2c5ae] mx-1 translate-y-[-4px]" />
                          <span
                            className="font-serif text-sm sm:text-base text-[#3b443d] tabular-nums shrink-0"
                            title="Tariff placeholder"
                          >
                            {item.price}
                          </span>
                        </div>

                        {/* Tasting Note */}
                        <p className="text-xs sm:text-sm text-[#3b443d]/90 mt-1.5 leading-relaxed pr-6">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Quiet Ledger Footer */}
            <div className="px-5 sm:px-8 py-3.5 border-t border-[#d2c5ae]/80 bg-[#f3ece0]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#68736b]">
              <span>
                ● Pure Vegetarian Kitchen · Freshly ground batters &amp; house-blended masalas
              </span>
              <span>
                Tariff column (₹ --) formatted for live counter rates · Taxes as applicable
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

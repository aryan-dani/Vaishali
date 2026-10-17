"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function VisitAndEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    topic: "Bulk / Parcel Order",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; phone?: string; message?: string } = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please share your full name.";
    }
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 8) {
      nextErrors.phone = "Please enter a valid contact number.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Please add your note or enquiry details.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 border-t border-[#d2c5ae] bg-[#f3ece0]/45"
    >
      <div className="max-w-[1220px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#265c3f] font-semibold mb-3">
              <span>VII. Visit &amp; Correspondence</span>
              <span className="h-[1px] w-10 bg-[#265c3f]/40" />
              <span>Shivajinagar · Pune</span>
            </div>
            <h2
              id="contact-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0c2116] tracking-tight"
            >
              Find Us on Fergusson College Road.
            </h2>
          </div>

          <a
            href="https://maps.google.com/?q=Hotel+Vaishali+1218/1+Fergusson+College+Road+Pune+411004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#122e1f] border-b border-[#122e1f] pb-1 hover:text-[#a65212] hover:border-[#a65212] transition-colors self-start md:self-auto"
          >
            <span>Open Directions in Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Architectural Two-Column Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#122e1f]/25 bg-[#faf6ee]">
          {/* Left Column: Directory & Map (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:border-r lg:border-[#d2c5ae] flex flex-col justify-between gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#68736b] font-semibold mb-2">
                  Location
                </h3>
                <address className="not-italic font-serif text-lg text-[#0c2116] leading-snug">
                  Hotel Vaishali<br />
                  1218/1, Shivajinagar,<br />
                  Fergusson College Road,<br />
                  Pune 411004, Maharashtra
                </address>
              </div>

              <div>
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#68736b] font-semibold mb-2">
                  Hours of Service
                </h3>
                <p className="font-serif text-lg text-[#0c2116]">
                  Monday – Sunday<br />
                  7:00 AM – 11:00 PM
                </p>
                <p className="text-xs text-[#68736b] mt-1.5 leading-relaxed">
                  Walk-in seating across both our indoor hall and open-air garden courtyard.
                </p>
              </div>

              <div>
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#68736b] font-semibold mb-2">
                  Telephone Desk
                </h3>
                <ul className="space-y-1 text-sm text-[#141915]">
                  <li>
                    <span className="text-[#68736b] mr-2">Dining &amp; Parcel:</span>
                    <a href="tel:+912025531244" className="font-medium underline underline-offset-4 hover:text-[#a65212]">
                      (020) 25531244
                    </a>
                  </li>
                  <li>
                    <span className="text-[#68736b] mr-2">Alternate Line:</span>
                    <a href="tel:+912025531184" className="font-medium underline underline-offset-4 hover:text-[#a65212]">
                      (020) 25531184
                    </a>
                  </li>
                  <li>
                    <span className="text-[#68736b] mr-2">Admin Office:</span>
                    <a href="tel:+912025672930" className="font-medium underline underline-offset-4 hover:text-[#a65212]">
                      (020) 25672930
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-[#68736b] font-semibold mb-2">
                  Electronic Mail
                </h3>
                <a
                  href="mailto:info@vaishalihotel.in"
                  className="font-serif text-lg text-[#0c2116] underline decoration-[#d2c5ae] underline-offset-4 hover:text-[#a65212]"
                >
                  info@vaishalihotel.in
                </a>
                <p className="text-xs text-[#68736b] mt-1.5">
                  For institutional orders, press, and management correspondence.
                </p>
              </div>
            </div>

            {/* Framed Embedded Google Map */}
            <div className="border border-[#d2c5ae] p-1.5 bg-[#f3ece0]">
              <iframe
                title="Google Map of Hotel Vaishali, 1218/1 Fergusson College Road, Pune"
                src="https://www.google.com/maps?q=Hotel+Vaishali,+1218/1,+Fergusson+College+Road,+Shivajinagar,+Pune+411004&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[250px] grayscale-[20%] contrast-[1.02] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column: Guestbook & Enquiry Form (6 Cols) */}
          <div id="feedback" className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#a65212] font-semibold block mb-2">
                Guestbook &amp; Order Desk
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0c2116] mb-3">
                Write to the Management.
              </h3>
              <p className="text-sm text-[#3b443d] leading-relaxed mb-8">
                Whether you are arranging bulk breakfast boxes for a family celebration or sharing reflections from your visit, our desk responds promptly.
              </p>

              {submitted ? (
                <div
                  role="status"
                  className="py-12 px-6 border border-[#265c3f]/30 bg-[#e6efe9]/50 text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#1b432d] mx-auto mb-3" />
                  <h4 className="font-serif text-2xl text-[#0c2116] mb-2">
                    With Warm Regards, {formData.name}.
                  </h4>
                  <p className="text-sm text-[#3b443d] max-w-md mx-auto leading-relaxed mb-6">
                    Your note regarding <strong>{formData.topic}</strong> has been logged for our Fergusson College Road desk (<code>info@vaishalihotel.in</code>).
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", topic: "Bulk / Parcel Order", message: "" });
                    }}
                    className="text-xs uppercase tracking-[0.16em] font-semibold text-[#122e1f] border-b border-[#122e1f] pb-0.5"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label
                      htmlFor="guest-name"
                      className="block text-[11px] uppercase tracking-[0.16em] text-[#3b443d] font-semibold mb-1.5"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="guest-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Siddharth Kulkarni"
                      className="w-full py-2.5 bg-transparent border-b border-[#122e1f]/35 focus:border-[#0c2116] focus:outline-none text-base text-[#0c2116] placeholder:text-[#68736b]/60"
                    />
                    {errors.name && (
                      <p role="alert" className="text-xs text-red-700 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="guest-phone"
                        className="block text-[11px] uppercase tracking-[0.16em] text-[#3b443d] font-semibold mb-1.5"
                      >
                        Telephone Number *
                      </label>
                      <input
                        id="guest-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98220 XXXXX"
                        className="w-full py-2.5 bg-transparent border-b border-[#122e1f]/35 focus:border-[#0c2116] focus:outline-none text-base text-[#0c2116] placeholder:text-[#68736b]/60"
                      />
                      {errors.phone && (
                        <p role="alert" className="text-xs text-red-700 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="guest-topic"
                        className="block text-[11px] uppercase tracking-[0.16em] text-[#3b443d] font-semibold mb-1.5"
                      >
                        Subject of Note
                      </label>
                      <select
                        id="guest-topic"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full py-2.5 bg-transparent border-b border-[#122e1f]/35 focus:border-[#0c2116] focus:outline-none text-base text-[#0c2116]"
                      >
                        <option value="Bulk / Parcel Order">Bulk &amp; Party Parcel Order</option>
                        <option value="Guest Feedback">Dining Feedback</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Press / Archival">Press &amp; Media</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="guest-message"
                      className="block text-[11px] uppercase tracking-[0.16em] text-[#3b443d] font-semibold mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="guest-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your preferred date, parcel quantities, or dining reflections…"
                      className="w-full py-2.5 bg-transparent border-b border-[#122e1f]/35 focus:border-[#0c2116] focus:outline-none text-base text-[#0c2116] placeholder:text-[#68736b]/60 resize-y"
                    />
                    {errors.message && (
                      <p role="alert" className="text-xs text-red-700 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#122e1f] text-[#faf6ee] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#0c2116] transition-colors"
                    >
                      <span>Dispatch Message</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <span className="text-xs text-[#68736b]">
                      Urgent parcel? Call{" "}
                      <a href="tel:+912025531244" className="text-[#122e1f] font-medium underline">
                        (020) 25531244
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

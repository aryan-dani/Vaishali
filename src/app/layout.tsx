import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaishalihotel.in"),
  title: "Hotel Vaishali · Est. 1951 | Fergusson College Road, Pune",
  description:
    "Pune’s iconic South Indian culinary institution on Fergusson College Road (FC Road). Famous for crisp Mysore masala dosas, pillowy steamed idlis, medu vada, signature chutneys, and brass-cup filter coffee beneath a banyan-shaded courtyard.",
  openGraph: {
    type: "website",
    title: "Hotel Vaishali · Est. 1951 | Fergusson College Road, Pune",
    description:
      "Where Pune gathers over crisp dosas and filter coffee. 1218/1, Shivajinagar, Fergusson College Road, Pune 411004.",
    siteName: "Hotel Vaishali",
    locale: "en_IN",
    images: [{ url: "/images/hero-feast.png", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Vaishali · Est. 1951 | Fergusson College Road, Pune",
    description:
      "Pune’s beloved South Indian institution on FC Road—serving generations since 1951.",
    images: ["/images/hero-feast.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: "Hotel Vaishali",
  alternateName: "Vaishali Restaurant",
  foundingDate: "1951",
  founder: {
    "@type": "Person",
    name: "Jagannath B. Shetty",
  },
  description:
    "Iconic South Indian restaurant on Fergusson College Road (FC Road), Pune, celebrated for idli, medu vada, dosa, uttapam, signature chutneys, and filter coffee in an open-air garden courtyard.",
  url: "https://www.vaishalihotel.in/",
  telephone: "+91-20-25531244",
  email: "info@vaishalihotel.in",
  priceRange: "₹₹",
  servesCuisine: ["South Indian", "Pure Vegetarian", "Indian"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1218/1, Shivajinagar, Fergusson College Road",
    addressLocality: "Pune",
    postalCode: "411004",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5211,
    longitude: 73.8415,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.3",
    reviewCount: "18000",
    bestRating: "5",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-20-25531244",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-20-25531184",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-20-25672930",
      contactType: "office",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#faf6ee] text-[#141915] antialiased selection:bg-[#122e1f] selection:text-[#faf6ee]">
        {children}
      </body>
    </html>
  );
}

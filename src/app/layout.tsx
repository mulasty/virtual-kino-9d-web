import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtualkino.pl"),
  title: {
    default:
      "Virtual Kino 9D Łomża | Wynajem Kina Wirtualnej Rzeczywistości VR na Eventy",
    template: "%s | Virtual Kino 9D",
  },
  description:
    "Wynajem mobilnego kina 9D VR 360° na imprezy, wesela, urodziny, festyny, eventy firmowe i galerie handlowe. Łomża, Podlaskie i cała Polska. Symulator z obracaniem 360°, efektami wiatru i wibracji. Tel. 516 535 479.",
  keywords: [
    "kino 9D",
    "wirtualna rzeczywistość",
    "wynajem VR",
    "symulator 9D",
    "atrakcje na wesele",
    "atrakcje na event firmowy",
    "atrakcje na festyn",
    "atrakcje na urodziny",
    "kino 9D Łomża",
    "kino 9D Podlaskie",
    "VR Łomża",
    "atrakcje eventowe",
    "wynajem atrakcji",
    "symulator VR",
    "mobilne kino 9D",
    "team building VR",
    "atrakcje do galerii handlowej",
    "kino 9D wynajem",
    "wirtualna rzeczywistość event",
    "atrakcje na komunie",
    "atrakcje na wieczór panieński",
    "atrakcje na wieczór kawalerski",
  ],
  authors: [{ name: "Virtual Kino 9D" }],
  creator: "Virtual Kino 9D",
  publisher: "Virtual Kino 9D",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://virtualkino.pl",
    siteName: "Virtual Kino 9D",
    title: "Virtual Kino 9D Łomża | Wynajem Kina VR 360° na Eventy",
    description:
      "Mobilne kino 9D VR z obracaniem 360° na Twoją imprezę. Wesela, urodziny, festyny, eventy firmowe. Łomża i cała Polska. Tel. 516 535 479.",
    images: [
      {
        url: "https://virtualkino.pl/images/1000007907-ltmyqt5b.jpg",
        width: 1200,
        height: 630,
        alt: "Virtual Kino 9D - Symulator VR 360° na evencie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Kino 9D | Wynajem Kina VR na Eventy",
    description:
      "Mobilne kino 9D VR 360° na imprezy. Łomża i cała Polska. Tel. 516 535 479.",
    images: ["https://virtualkino.pl/images/1000007907-ltmyqt5b.jpg"],
  },
  alternates: {
    canonical: "https://virtualkino.pl",
  },
  category: "Rozrywka i Eventy",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://virtualkino.pl/#organization",
      name: "Virtual Kino 9D",
      alternateName: "VIRTUAL KINO 9D PRZEMYSŁAW KSEPKA",
      url: "https://virtualkino.pl",
      logo: "https://virtualkino.pl/images/5-lt6cnztm.png",
      description:
        "Wynajem mobilnego kina 9D VR 360° na imprezy, wesela, urodziny, festyny i eventy firmowe.",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61550814823409",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+48-516-535-479",
        contactType: "customer service",
        areaServed: "PL",
        availableLanguage: ["Polish"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://virtualkino.pl/#localbusiness",
      name: "Virtual Kino 9D",
      description:
        "Wynajem mobilnego kina 9D VR 360° na eventy. Symulator z obracaniem 360°, efektami wiatru, wibracji i dźwięku. Obsługujemy Łomżę, województwo podlaskie oraz całą Polskę.",
      url: "https://virtualkino.pl",
      telephone: "+48 516 535 479",
      email: "kontakt@virtualkino.pl",
      priceRange: "$$",
      image: "https://virtualkino.pl/images/1000007907-ltmyqt5b.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Zawady Przedmieście 2",
        addressLocality: "Łomża",
        postalCode: "18-400",
        addressRegion: "podlaskie",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "53.1781",
        longitude: "22.0594",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Łomża",
        },
        {
          "@type": "AdministrativeArea",
          name: "województwo podlaskie",
        },
        {
          "@type": "Country",
          name: "Polska",
        },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Oferta wynajmu kina 9D",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wynajem kina 9D na event",
              description: "Wynajem mobilnego kina VR na imprezy firmowe, wesela, urodziny, festyny.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dzierżawa kina 9D długoterminowa",
              description: "Dzierżawa symulatora VR na dłuższy okres dla galerii handlowych i parków rozrywki.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://virtualkino.pl/#website",
      url: "https://virtualkino.pl",
      name: "Virtual Kino 9D",
      description: "Wynajem mobilnego kina 9D VR na eventy w całej Polsce.",
      publisher: {
        "@id": "https://virtualkino.pl/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://virtualkino.pl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

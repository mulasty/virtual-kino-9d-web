"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, Users, Shield, Check, ArrowRight } from "lucide-react";

const plans = [
  {
    icon: Clock,
    name: "Wynajem jednorazowy",
    description:
      "Idealne rozwiązanie na wesele, urodziny, komunie, festyn i imprezę firmową w Łomży i okolicach",
    price: "od 800 zł",
    period: "/event",
    features: [
      "Dostawa i montaż na miejscu w Łomży i okolicy",
      "Dostęp do biblioteki filmów VR (kolejki, horrory, bajki)",
      "Czas trwania: 2h – cały dzień",
      "Obsługa techniczna w cenie",
    ],
    cta: "Zapytaj o wycenę na Twój event",
    popular: false,
    color: "primary",
  },
  {
    icon: Users,
    name: "Wynajem z operatorem",
    description:
      "Pełna obsługa na miejscu – Ty cieszysz się eventem, my zajmujemy się gośćmi",
    price: "od 1200 zł",
    period: "/event",
    features: [
      "Wszystko z pakietu podstawowego",
      "Doświadczony operator na miejscu",
      "Pomoc przy wsiadaniu i zdejmowaniu gogli VR",
      "Priorytetowa obsługa gości w kolejce",
      "Bezpieczeństwo i nadzór nad uczestnikami",
    ],
    cta: "Wybierz najpopularniejszy pakiet",
    popular: true,
    color: "secondary",
  },
  {
    icon: Shield,
    name: "Dzierżawa długoterminowa",
    description:
      "Dla galerii handlowych, parków rozrywki i stałych lokalizacji w Podlaskiem",
    price: "Indywidualnie",
    period: "",
    features: [
      "Dzierżawa na miesiąc lub dłużej",
      "Możliwość zarabiania na sprzedaży biletów",
      "Reklama Twojej marki na obudowie symulatora",
      "Regularny serwis i aktualizacja filmów",
      "Elastyczne warunki umowy",
    ],
    cta: "Skontaktuj się – przygotujemy ofertę",
    popular: false,
    color: "accent",
  },
];

const events = [
  "Imprezy firmowe Łomża",
  "Wesela Podlaskie",
  "Urodziny",
  "Komunie",
  "Festyny",
  "Koncerty",
  "Targi",
  "Galerie handlowe",
  "Wieczory panieńskie",
  "Wieczory kawalerskie",
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section id="oferta" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,0,229,0.06)_0%,_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-widest text-secondary uppercase mb-4">
            Oferta
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-[family-name:var(--font-orbitron)] mb-6">
            <span className="text-foreground">WYNAJMIJ </span>
            <span className="text-secondary text-glow-magenta">KINO 9D</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted leading-relaxed">
            Elastyczne warunki współpracy dopasowane do Twoich potrzeb. Od
            jednorazowego wynajmu na wesele w Łomży, przez obsługę festynu z
            operatorem, po długoterminową dzierżawę w galerii handlowej w
            Podlaskiem.
          </p>
        </motion.div>

        {/* Event tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {events.map((event) => (
            <span
              key={event}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted hover:border-primary/30 hover:text-primary transition-colors cursor-default"
            >
              {event}
            </span>
          ))}
        </motion.div>

        {/* Event photos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16"
        >
          {[
            "/images/IMG-20230904-WA0005-ltmyoxx3.jpg",
            "/images/IMG-20230918-WA0001-ltmyotbi.jpg",
            "/images/20230923_161621-ltmyljqg.jpg",
            "/images/IMG20231006165033-ltmyoca8.jpg",
          ].map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={src}
                alt={`Kino 9D na evencie w Łomży i okolicach - zdjęcie ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === i;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onMouseEnter={() => setHoveredPlan(i)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative rounded-3xl p-8 transition-all duration-500 ${
                  isPopular
                    ? "bg-gradient-to-b from-secondary/10 to-transparent border-2 border-secondary/40"
                    : "bg-surface-elevated/50 border border-white/10"
                } ${isHovered ? "scale-[1.02] shadow-2xl" : ""}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-bold text-black">
                    Najpopularniejszy
                  </div>
                )}

                <div
                  className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${
                    plan.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : plan.color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-black font-[family-name:var(--font-orbitron)] text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <Check
                        className={`w-5 h-5 shrink-0 ${
                          plan.color === "primary"
                            ? "text-primary"
                            : plan.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`group flex items-center justify-center gap-2 w-full rounded-full py-3.5 font-bold transition-all ${
                    isPopular
                      ? "bg-secondary text-black hover:shadow-[0_0_25px_rgba(255,0,229,0.4)]"
                      : "bg-white/5 text-foreground border border-white/10 hover:bg-white/10 hover:border-primary/30"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile note with local SEO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"
        >
          <p className="text-muted">
            <span className="text-primary font-bold">Mobilność</span> – Kino 9D
            zamontowane na aucie. Dowozimy pod wskazany adres w Łomży,
            województwie podlaskim i na terenie całej Polski. Nie musisz
            martwić się o transport.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

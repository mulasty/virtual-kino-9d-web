"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqCategories = [
  {
    name: "Wesele i uroczystości",
    questions: [
      {
        q: "Czy kino 9D sprawdzi się na weselu?",
        a: "Tak, kino 9D VR to jedna z najpopularniejszych atrakcji na weselach w 2024 i 2025 roku. Goście chętnie korzystają z symulatora w przerwach między posiłkami, a dzieci uwielbiają seanse z bajkami. Oferujemy wynajem z operatorem, który zadba o płynność obsługi.",
      },
      {
        q: "Czy można wynająć kino 9D na komunię lub chrzciny?",
        a: "Oczywiście. Symulator VR 360° to doskonała atrakcja dla dzieci i dorosłych na komunie, chrzciny, urodziny i inne rodzinne uroczystości. Posiadamy w bibliotece filmy odpowiednie dla najmłodszych uczestników.",
      },
    ],
  },
  {
    name: "Eventy firmowe i team building",
    questions: [
      {
        q: "Czy kino 9D to dobry pomysł na team building lub event firmowy?",
        a: "Absolutnie. Kino 9D VR przyciąga uwagę i buduje pozytywne wspomnienia związane z marką. Idealnie sprawdza się na imprezach integracyjnych, dniach otwartych, targach branżowych i eventach networkingowych.",
      },
      {
        q: "Czy możecie obsłużyć dużą grupę pracowników?",
        a: "Tak, jeden seans trwa od 2 do 7 minut, co pozwala obsłużyć nawet kilkudziesięcioosobową grupę w ciągu godziny. Oferujemy wynajem z doświadczonym operatorem, który zorganizuje kolejkę i zadba o każdego uczestnika.",
      },
    ],
  },
  {
    name: "Festyny, koncerty i galerie",
    questions: [
      {
        q: "Czy kino 9D można postawić na festynie lub koncercie?",
        a: "Tak, nasz symulator jest w pełni mobilny i zamontowany na aucie. Przyjeżdżamy pod wskazany adres, montujemy urządzenie i obsługujemy event przez cały dzień. Nie ma potrzeby martwić się o transport.",
      },
      {
        q: "Czy oferujecie dzierżawę długoterminową do galerii handlowej?",
        a: "Tak, proponujemy dzierżawę długoterminową z możliwością zarabiania na biletach lub reklamach. To świetny sposób na zwiększenie ruchu klientów w galerii handlowej i atrakcja, która przyciąga rodziny z dziećmi.",
      },
    ],
  },
  {
    name: "Technologia i bezpieczeństwo",
    questions: [
      {
        q: "Jak działa symulator 9D VR 360°?",
        a: "Symulator wykorzystuje technologię obracania o 360 stopni, co zwiększa realizm doświadczenia. Dodatkowe efekty to wiatr, wibracje, pchanie pleców, machanie nogami i wstrzykiwanie powietrza. Użytkownik zakłada gogle VR i przenosi się do wybranego świata wirtualnego.",
      },
      {
        q: "Czy kino 9D jest bezpieczne dla dzieci i osób starszych?",
        a: "Tak, symulator posiada wszystkie niezbędne certyfikaty i normy bezpieczeństwa. Operator dobiera film i intensywność seansu do wieku i preferencji uczestnika. Dla osób wrażliwych na ruch polecamy łagodniejsze scenariusze, np. wycieczki podróżnicze.",
      },
      {
        q: "Ile osób może skorzystać z kina 9D na godzinę?",
        a: "Jeden seans trwa 2-7 minut, w zależności od wybranego filmu. Oznacza to, że w ciągu godziny możemy obsłużyć od 8 do 20 osób, w zależności od wybranej pakiety i czasu trwania seansu.",
      },
    ],
  },
  {
    name: "Cennik i lokalizacja",
    questions: [
      {
        q: "Ile kosztuje wynajem kina 9D?",
        a: "Ceny zaczynają się od 800 zł za event. Pakiet z operatorem to od 1200 zł. Ostateczna wycena zależy od lokalizacji, czasu trwania imprezy i liczby gości. Zapraszamy do kontaktu telefonicznego: 516 535 479.",
      },
      {
        q: "Czy dowozicie kino 9D poza Łomżą?",
        a: "Tak, działamy na terenie całej Polski. Nasze kino jest mobilne i zamontowane na aucie, więc dojeżdżamy pod wskazany adres. Siedziba firmy znajduje się w Łomży (województwo podlaskie), ale obsługujemy eventy w każdym regionie kraju.",
      },
      {
        q: "Jakiej powierzchni potrzebujecie do rozstawienia symulatora?",
        a: "Symulator wymaga około 3×3 metry wolnej przestrzeni oraz dostępu do prądu. Jesteśmy w stanie dostosować się do większości lokalizacji – od sal weselnych, przez parkingi przy festynach, po korytarze w galeriach handlowych.",
      },
    ],
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // JSON-LD FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((q) => ({
        "@type": "Question",
        name: q.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.a,
        },
      }))
    ),
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-[family-name:var(--font-orbitron)] mb-6">
            <span className="text-foreground">NAJCZĘŚCIEJ </span>
            <span className="gradient-text text-glow">ZADAWANE PYTANIA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Znajdź odpowiedzi na pytania dotyczące wynajmu kina 9D na wesele,
            event firmowy, festyn i inne okazje. Jeśli nie znalazłeś
            odpowiedzi – zadzwoń: 516 535 479.
          </p>
        </motion.div>

        <div className="space-y-10">
          {faqCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className="text-lg font-bold text-primary mb-4 font-[family-name:var(--font-orbitron)] tracking-wide">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`;
                  const isOpen = openItems[key];
                  return (
                    <div
                      key={key}
                      className={`rounded-2xl border transition-colors ${
                        isOpen
                          ? "border-primary/30 bg-primary/5"
                          : "border-white/10 bg-surface-elevated/30 hover:border-white/20"
                      }`}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between p-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base font-semibold text-foreground pr-4">
                          {item.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-muted" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted mb-4">Nie znalazłeś odpowiedzi?</p>
          <a
            href="tel:+48516535479"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-black font-bold hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
          >
            Zadzwoń: 516 535 479
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Building2, FileText } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="kontakt" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,240,255,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Kontakt
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-[family-name:var(--font-orbitron)] mb-6">
            <span className="text-foreground">SKONTAKTUJ SIĘ </span>
            <span className="gradient-text text-glow">Z NAMI</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Zadzwoń lub napisz – przedstawimy szczegóły oferty wynajmu kina 9D
            na Twój event w Łomży, Podlaskiem lub innym regionie Polski.
            Bezpłatna wycena w ciągu 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-surface-elevated/50 p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Dane kontaktowe
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+48516535479"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Telefon</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      +48 516 535 479
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:kontakt@virtualkino.pl"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                      kontakt@virtualkino.pl
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Siedziba firmy</p>
                    <p className="text-lg font-semibold text-foreground">
                      ul. Zawady Przedmieście 2
                    </p>
                    <p className="text-muted">18-400 Łomża, woj. podlaskie</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company details */}
            <div className="rounded-3xl border border-white/10 bg-surface-elevated/50 p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Dane firmy
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-muted mt-0.5 shrink-0" />
                  <div>
                    <p className="text-muted">Nazwa</p>
                    <p className="text-foreground font-medium">
                      VIRTUAL KINO 9D PRZEMYSŁAW KSEPKA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-muted mt-0.5 shrink-0" />
                  <div>
                    <p className="text-muted">NIP</p>
                    <p className="text-foreground font-medium">7182040568</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-muted mt-0.5 shrink-0" />
                  <div>
                    <p className="text-muted">REGON</p>
                    <p className="text-foreground font-medium">
                      20078138500000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-muted mt-0.5 shrink-0" />
                  <div>
                    <p className="text-muted">Forma prawna</p>
                    <p className="text-foreground font-medium">
                      Jednoosobowa działalność gospodarcza (CEIDG)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-muted mt-0.5 shrink-0" />
                  <div>
                    <p className="text-muted">Adres do doręczeń</p>
                    <p className="text-foreground font-medium">
                      ul. Stanisława Moniuszki 14/9, 18-400 Łomża
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Działamy na terenie całej Polski
              </h3>
              <p className="text-muted mb-4">
                Mobilne kino 9D zamontowane na aucie – dojeżdżamy pod wskazany
                adres. Specjalizujemy się w obsłudze eventów w Łomży,
                województwie podlaskim oraz na terenie całego kraju.
              </p>
              <a
                href="tel:+48516535479"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-black font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
              >
                <Phone className="w-4 h-4" />
                Zadzwoń teraz: 516 535 479
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-surface-elevated/50 p-8 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Wyślij zapytanie o wycenę
              </h3>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">
                      Imię
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="Twoje imię"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">
                      Nazwisko
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="Twoje nazwisko"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="twoj@email.pl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Telefon (opcjonalnie)
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="+48 500 000 000"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">
                      Rodzaj imprezy
                    </label>
                    <select className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors">
                      <option>Wybierz...</option>
                      <option>Wesele</option>
                      <option>Urodziny</option>
                      <option>Komunia / Chrzciny</option>
                      <option>Impreza firmowa / Team building</option>
                      <option>Festyn / Koncert</option>
                      <option>Galeria handlowa</option>
                      <option>Inne</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">
                      Lokalizacja
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                      placeholder="np. Łomża, Warszawa, Białystok"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                    placeholder="Opisz swoje wydarzenie: data, liczba gości, rodzaj eventu, preferowana lokalizacja..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sent}
                  className={`w-full flex items-center justify-center gap-2 rounded-full py-4 font-bold transition-all ${
                    sent
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-primary text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                  }`}
                >
                  {sent ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Wysłano! Odpowiemy w ciągu 24h.
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Wyślij zapytanie o wycenę
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

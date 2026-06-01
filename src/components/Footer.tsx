"use client";

import { motion } from "framer-motion";
import { Globe, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#hero" className="inline-block mb-4">
              <span className="text-2xl font-bold font-[family-name:var(--font-orbitron)] tracking-wider">
                <span className="text-primary text-glow">VIRTUAL</span>
                <span className="text-foreground ml-1">KINO</span>
                <span className="text-secondary text-glow-magenta ml-1">
                  9D
                </span>
              </span>
            </a>
            <p className="text-muted max-w-sm leading-relaxed mb-4">
              Mobilne kino wirtualnej rzeczywistości 9D VR 360° na eventy,
              wesela, urodziny i imprezy firmowe w Łomży, województwie
              podlaskim oraz na terenie całej Polski.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted mb-4">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                ul. Zawady Przedmieście 2, 18-400 Łomża
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +48 516 535 479
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                kontakt@virtualkino.pl
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61550814823409"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/shorts/KyYaDbnLCiQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#hero", label: "Start" },
                { href: "#doswiadczenie", label: "Doświadczenie" },
                { href: "#oferta", label: "Oferta" },
                { href: "#galeria", label: "Galeria" },
                { href: "#faq", label: "FAQ" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offer links */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Oferta
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Wynajem na wesele",
                "Eventy firmowe",
                "Urodziny i komunie",
                "Festyny i koncerty",
                "Galerie handlowe",
                "Dzierżawa długoterminowa",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#oferta"
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Virtual Kino 9D. Wszelkie prawa
            zastrzeżone.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-muted">
            <span>NIP: 7182040568</span>
            <span>REGON: 20078138500000</span>
            <span>Łomża, woj. podlaskie</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

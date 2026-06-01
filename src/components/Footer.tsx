"use client";

import { motion } from "framer-motion";
import { Globe, Phone, Mail } from "lucide-react";

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
            <p className="text-muted max-w-sm leading-relaxed mb-6">
              Mobilne kino wirtualnej rzeczywistości 9D VR 360° na eventy,
              wesela, urodziny i imprezy firmowe. Niezapomniane emocje dla
              każdego.
            </p>
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+48516535479"
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +48 516 535 479
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@virtualkino.pl"
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  kontakt@virtualkino.pl
                </a>
              </li>
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
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-foreground transition-colors">
              Polityka prywatności
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

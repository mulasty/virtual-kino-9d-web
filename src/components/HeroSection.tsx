"use client";

import { motion } from "framer-motion";
import { Play, ChevronDown, MapPin, Phone } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import VideoHero from "./VideoHero";
import YouTubeLightbox from "./YouTubeLightbox";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Facebook Reel Video Background */}
      <VideoHero />

      {/* Particles overlay on top of video */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Wynajem mobilnego kina VR w całej Polsce
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-orbitron)] leading-[1.1] tracking-tight mb-6 drop-shadow-lg"
        >
          <span className="block text-foreground">KINO 9D VR</span>
          <span className="block gradient-text text-glow mt-2">
            NA TWÓJ EVENT
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 drop-shadow-md"
        >
          Symulator <strong className="text-primary">9D VR 360°</strong> na
          wesele, urodziny, festyn, event firmowy i galerię handlową. Obrót o
          360°, efekty wiatru, wibracji i dźwięku. Łomża, Podlaskie i dowóz na
          terenie <strong className="text-primary">całej Polski</strong>.
        </motion.p>

        {/* Location & phone badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1 text-xs text-white/90">
            <MapPin className="w-3 h-3 text-primary" />
            Łomża · Podlaskie · Cała Polska
          </span>
          <a
            href="tel:+48516535479"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/20 backdrop-blur-md px-3 py-1 text-xs text-primary hover:bg-primary/30 transition-colors"
          >
            <Phone className="w-3 h-3" />
            516 535 479
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#oferta"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-black transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105"
          >
            <Play className="w-5 h-5 fill-black" />
            Sprawdź ofertę i cennik
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md px-8 py-4 text-base font-medium text-white transition-all hover:bg-black/50 hover:border-primary/40"
          >
            Bezpłatna wycena
          </a>
          <YouTubeLightbox videoId="KyYaDbnLCiQ" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "360°", label: "Obrót VR" },
            { value: "2-7 min", label: "Seans" },
            { value: "9D", label: "Rzeczywistość" },
            { value: "PL", label: "Zasięg" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary font-[family-name:var(--font-orbitron)] drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/80 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-white/70 uppercase tracking-widest">
          Przewiń
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

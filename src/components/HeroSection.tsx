"use client";

import { motion } from "framer-motion";
import { Play, ChevronDown, MapPin, Phone } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import VideoHero from "./VideoHero";
import YouTubeLightbox from "./YouTubeLightbox";

const HERO_VIDEO_SRC = "";

export default function HeroSection() {
  const hasVideo = Boolean(HERO_VIDEO_SRC);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {hasVideo ? (
        <VideoHero src={HERO_VIDEO_SRC}>
          <ParticlesBackground />
        </VideoHero>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-[#050510] to-background z-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,240,255,0.08)_0%,_transparent_70%)] z-0" />

          <ParticlesBackground />

          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

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
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-orbitron)] leading-[1.1] tracking-tight mb-6"
        >
          <span className="block text-foreground">KINO 9D VR</span>
          <span className="block gradient-text text-glow mt-2">
            NA TWOJ EVENT
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-6"
        >
          Symulator <strong className="text-foreground">9D VR 360°</strong> na
          wesele, urodziny, festyn, event firmowy i galerię handlową. Obrót o
          360°, efekty wiatru, wibracji i dźwięku. Łomża, Podlaskie i dowóz na
          terenie <strong className="text-foreground">całej Polski</strong>.
        </motion.p>

        {/* Location & phone badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
            <MapPin className="w-3 h-3 text-primary" />
            Łomża · Podlaskie · Cała Polska
          </span>
          <a
            href="tel:+48516535479"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary hover:bg-primary/10 transition-colors"
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/30"
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
              <div className="text-2xl sm:text-3xl font-bold text-primary font-[family-name:var(--font-orbitron)]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted uppercase tracking-widest">
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

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Heart, MessageCircle, Play, Eye } from "lucide-react";

const facebookStats = {
  likes: "6,262",
  followers: "~6,300",
  location: "Łomża",
  description: "MOC WRAŻEŃ · WIRTUALNA RZECZYWISTOŚĆ KINA 9D · SZEROKI WYBÓR FILMÓW",
};

const reels = [
  {
    id: "1087734079349276",
    title: "Kino 9D w akcji",
    stats: "747 wyświetleń · 6 polubień",
    date: "Sierpień 2024",
    url: "https://www.facebook.com/reel/1087734079349276/",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1087734079349276/",
  },
  {
    id: "491028563511367",
    title: "Piknik Rodzinny – miejscowość Baba",
    stats: "Piknik rodzinny",
    date: "Lipiec 2024",
    url: "https://www.facebook.com/reel/491028563511367/",
  },
  {
    id: "544122385418507",
    title: "Sezon 2025 otwarty!",
    stats: "Zaproszenie do Jednaczewa",
    date: "2025",
    url: "https://www.facebook.com/reel/544122385418507/",
  },
];

export default function SocialMediaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeReel, setActiveReel] = useState(0);

  return (
    <section id="social" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,240,255,0.05)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-widest text-secondary uppercase mb-4">
            Social Media
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-[family-name:var(--font-orbitron)] mb-6">
            <span className="text-foreground">ŚLEDŹ NAS </span>
            <span className="text-secondary text-glow-magenta">NA FB</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Najnowsze relacje z eventów, Reels z akcji i zapowiedzi. Bądź na
            bieżąco!
          </p>
        </motion.div>

        {/* Facebook Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Polubień", value: facebookStats.likes, icon: Heart },
            { label: "Obserwujących", value: facebookStats.followers, icon: Eye },
            { label: "Lokalizacja", value: facebookStats.location, icon: MessageCircle },
            { label: "Reels", value: "3+", icon: Play },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-surface-elevated/50 p-6 text-center backdrop-blur-sm"
              >
                <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground font-[family-name:var(--font-orbitron)]">
                  {stat.value}
                </div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Featured Reel + Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 rounded-3xl border border-white/10 bg-surface-elevated/50 overflow-hidden backdrop-blur-md"
          >
            <div className="p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {reels[activeReel].title}
                  </h3>
                  <p className="text-sm text-muted">
                    {reels[activeReel].stats} · {reels[activeReel].date}
                  </p>
                </div>
                <a
                  href={reels[activeReel].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
                >
                  Otwórz na FB
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embed area */}
            <div className="relative aspect-video bg-black">
              {reels[activeReel].embedUrl ? (
                <iframe
                  src={reels[activeReel].embedUrl}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="w-12 h-12 text-secondary mb-3" />
                  <p className="text-foreground font-medium">
                    {reels[activeReel].title}
                  </p>
                  <a
                    href={reels[activeReel].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-black hover:shadow-[0_0_20px_rgba(255,0,229,0.4)] transition-all"
                  >
                    <Play className="w-4 h-4 fill-black" />
                    Odtwórz na Facebooku
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          {/* Reel selector */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-foreground mb-4">
              Nasze Reels
            </h3>
            {reels.map((reel, i) => (
              <button
                key={reel.id}
                onClick={() => setActiveReel(i)}
                className={`w-full text-left rounded-2xl border p-4 transition-all duration-300 ${
                  activeReel === i
                    ? "border-secondary/40 bg-secondary/10"
                    : "border-white/10 bg-surface-elevated/30 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      activeReel === i
                        ? "bg-secondary/20 text-secondary"
                        : "bg-white/5 text-muted"
                    }`}
                  >
                    <Play className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-medium truncate ${
                        activeReel === i ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {reel.title}
                    </p>
                    <p className="text-xs text-muted">{reel.stats}</p>
                  </div>
                </div>
              </button>
            ))}

            {/* CTA */}
            <a
              href="https://www.facebook.com/profile.php?id=61550814823409"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-medium text-foreground hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Zobacz profil na Facebooku
            </a>
          </motion.div>
        </div>

        {/* Event banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Obserwuj nas na Facebooku
              </h3>
              <p className="text-muted">
                Bądź pierwszy, który dowie się o nowych lokalizacjach, eventach i
                promocjach. Sezon 2025 właśnie się rozpoczął!
              </p>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61550814823409"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 text-white font-bold hover:shadow-[0_0_25px_rgba(24,119,242,0.4)] transition-all hover:scale-105"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Polub nas na Facebooku
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

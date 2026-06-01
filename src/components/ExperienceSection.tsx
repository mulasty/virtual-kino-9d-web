"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  RotateCcw,
  Wind,
  Volume2,
  Target,
  Zap,
  Clock,
  Gamepad2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: RotateCcw,
    title: "Obrót 360°",
    desc: "Pełna rotacja w każdym kierunku. Poczujesz się jakbyś naprawdę latał.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Wind,
    title: "Efekty wiatru",
    desc: "Powiew powietrza synchronizowany z akcją na ekranie. Realizm na najwyższym poziomie.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    icon: Volume2,
    title: "Dźwięk przestrzenny",
    desc: "Surround sound, który otacza Cię z każdej strony i pogłębia immersję.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Target,
    title: "Interaktywne strzelanie",
    desc: "Nie tylko oglądasz – działasz. Steruj i oddawaj strzały w grach VR.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Zap,
    title: "Wibracje & pchanie",
    desc: "Fizyczne efekty: wibracje, pchanie pleców, machanie nogami, wstrzykiwanie powietrza.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    icon: Clock,
    title: "2-7 minut seansu",
    desc: "Intensywne doświadczenie w kompaktowej formie. Idealne na eventy.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Gamepad2,
    title: "Szeroki wybór filmów",
    desc: "Kolejki górskie, horrory, przygody, podróże i bajki dla najmłodszych.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Sparkles,
    title: "W pełni mobilne",
    desc: "Symulator zamontowany na aucie. Przyjeżdżamy pod wskazany adres.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="doswiadczenie"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Technologia
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-[family-name:var(--font-orbitron)] mb-6">
            <span className="text-foreground">CO TO JEST </span>
            <span className="gradient-text text-glow">KINO 9D?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            To nie jest zwykły seans. To pełne zanurzenie w wirtualnym świecie,
            gdzie Twoje ciało reaguje na każdy zakręt, każdą eksplozję i każdy
            powiew wiatru.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl border ${feature.border} ${feature.bg} p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]`}
              >
                <div
                  className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} ${feature.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 rounded-3xl border border-white/10 bg-surface-elevated/50 p-8 sm:p-12 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-orbitron)] text-foreground mb-4">
                Panel sterujący z ekranem dotykowym
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Symulator wyposażony jest w nowoczesny panel sterujący, który
                pozwala na intuicyjne zarządzanie seansami. Operator ma pełną
                kontrolę nad wyborem filmu, poziomem intensywności i
                bezpieczeństwem uczestników.
              </p>
              <div className="flex flex-wrap gap-3">
                {["VR 360°", "Efekty 4D", "Bezpieczeństwo", "Mobilność"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-video rounded-2xl border border-white/10 overflow-hidden relative">
                <Image
                  src="/images/1000007907-ltmyqt5b.jpg"
                  alt="Symulator 9D VR 360"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm text-white/80 font-medium">
                    Symulator 9D VR 360° w akcji
                  </p>
                </div>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50 -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

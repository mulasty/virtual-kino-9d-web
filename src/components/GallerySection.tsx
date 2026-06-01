"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryItems = [
  {
    title: "Imprezy firmowe",
    subtitle: "Team building & networking",
    image: "/images/IMG-20230904-WA0004-ltmyozxd.jpg",
    size: "large",
  },
  {
    title: "Wesela",
    subtitle: "Niezapomniana atrakcja",
    image: "/images/IMG-20230915-WA0003-ltdbgoe3.jpg",
    size: "small",
  },
  {
    title: "Festyny",
    subtitle: "Tłumy przy stoisku",
    image: "/images/20231013_163857-ltmyk2vj.jpg",
    size: "small",
  },
  {
    title: "Urodziny",
    subtitle: "Najlepszy prezent",
    image: "/images/20230910_093116-ltmyl7mw.jpg",
    size: "medium",
  },
  {
    title: "Galerie handlowe",
    subtitle: "Wzrost ruchu klientów",
    image: "/images/IMG_20231003_15501636-lth8esyk.jpeg",
    size: "medium",
  },
  {
    title: "Koncerty",
    subtitle: "Dodatkowa atrakcja",
    image: "/images/20231013_194406-ltmyr2oy.jpg",
    size: "large",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold tracking-widest text-accent uppercase mb-4">
            Galeria
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-[family-name:var(--font-orbitron)] mb-6">
            <span className="text-foreground">GDZIE </span>
            <span className="text-accent">Jesteśmy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Nasze kino 9D sprawdza się na każdym evencie. Zobacz, gdzie
            dostarczamy emocje.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, i) => {
            const gridClass =
              item.size === "large"
                ? "col-span-2 row-span-2"
                : item.size === "medium"
                ? "col-span-2"
                : "col-span-1";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${gridClass} group relative rounded-2xl overflow-hidden border border-white/10`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={
                    item.size === "large"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : item.size === "medium"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70">
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 transition-colors duration-300 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Extra image strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-3"
        >
          {[
            "/images/IMG-20230918-WA0011-ltmyos0h.jpg",
            "/images/IMG-20230921-WA0003-lth8cztv.jpg",
            "/images/IMG20231006140946-ltdbhbwj.jpg",
            "/images/IMG-20230904-WA0002-lth8d67x.jpg",
            "/images/IMG20231006165033-ltmyoca8.jpg",
            "/images/1000007953-ltmyq2gg.jpg",
          ].map((src, i) => (
            <div
              key={src}
              className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={src}
                alt={`Galeria ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

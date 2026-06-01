"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Link2 } from "lucide-react";

interface SharePlatform {
  name: string;
  icon: React.ReactNode;
  shareUrl: string;
  color: string;
  hoverColor: string;
  mobileOnly?: boolean;
}

function getShareData() {
  const url = encodeURIComponent("https://virtualkino.pl");
  const title = encodeURIComponent(
    "Virtual Kino 9D - Wynajem Kina VR 360° na Eventy"
  );
  const description = encodeURIComponent(
    "Mobilne kino 9D VR na wesele, urodziny, festyn i event firmowy. Łomża, Podlaskie i cała Polska. Tel. 516 535 479"
  );
  return { url, title, description };
}

function createPlatforms(): SharePlatform[] {
  const { url, title, description } = getShareData();

  return [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${description}`,
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#166fe5]",
    },
    {
      name: "Messenger",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.145 2 11.255c0 2.793 1.386 5.29 3.555 6.926V22l4.09-2.258c1.09.305 2.254.47 3.455.47 5.523 0 10-4.145 10-9.255S17.523 2 12 2zm1.066 12.407l-2.555-2.73-4.99 2.73 5.49-5.823 2.61 2.73 4.928-2.73-5.483 5.823z" />
        </svg>
      ),
      shareUrl: `https://www.facebook.com/dialog/send?link=${url}&redirect_uri=${url}`,
      color: "bg-[#0099FF]",
      hoverColor: "hover:bg-[#0088ee]",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      shareUrl: `https://wa.me/?text=${title}%20-%20${url}`,
      color: "bg-[#25D366]",
      hoverColor: "hover:bg-[#1ebe57]",
    },
    {
      name: "Telegram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.3.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      shareUrl: `https://t.me/share/url?url=${url}&text=${title}`,
      color: "bg-[#26A5E4]",
      hoverColor: "hover:bg-[#1d96d3]",
    },
    {
      name: "X / Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      shareUrl: `https://twitter.com/intent/tweet?url=${url}&text=${title}%20-%20${description}`,
      color: "bg-black border border-white/20",
      hoverColor: "hover:bg-white/10",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      color: "bg-[#0A66C2]",
      hoverColor: "hover:bg-[#0958a8]",
    },
    {
      name: "SMS",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      ),
      shareUrl: `sms:?&body=${title}%20-%20${url}`,
      color: "bg-[#34B7F1]",
      hoverColor: "hover:bg-[#2aa8e0]",
      mobileOnly: true,
    },
    {
      name: "Email",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      shareUrl: `mailto:?subject=${title}&body=${description}%0A%0A${url}`,
      color: "bg-[#EA4335]",
      hoverColor: "hover:bg-[#d33426]",
    },
  ];
}

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const platforms = createPlatforms();

  const handleCopy = async () => {
    await navigator.clipboard.writeText("https://virtualkino.pl");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-orbitron)]">
            UDOSTĘPNIJ
          </h3>
          <p className="text-muted mb-8">
            Poleć Virtual Kino 9D znajomym na każdej platformie
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 rounded-full ${platform.color} ${platform.hoverColor} px-4 py-2.5 text-white text-sm font-medium transition-all hover:scale-105 hover:shadow-lg`}
              title={`Udostępnij na ${platform.name}`}
            >
              {platform.icon}
              <span className="hidden sm:inline">{platform.name}</span>
            </a>
          ))}

          <button
            onClick={handleCopy}
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-foreground text-sm font-medium transition-all hover:bg-white/20 hover:scale-105"
            title="Kopiuj link"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-green-400" />
                <span className="hidden sm:inline text-green-400">Skopiowano!</span>
              </>
            ) : (
              <>
                <Link2 className="w-5 h-5" />
                <span className="hidden sm:inline">Kopiuj link</span>
              </>
            )}
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-xs text-muted"
        >
          Kompatybilne z Facebook, Messenger, WhatsApp, Telegram, X/Twitter,
          LinkedIn, SMS, Email, iMessage, Signal, Discord i innymi.
        </motion.p>
      </div>
    </section>
  );
}

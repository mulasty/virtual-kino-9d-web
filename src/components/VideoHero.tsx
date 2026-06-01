"use client";

import { useEffect, useRef, useState } from "react";

// Facebook Reel embed URL with autoplay
const FB_REEL_URL =
  "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1122855622432531%2F&show_text=false&width=560&t=0&autoplay=1&mute=1&loop=1";

export default function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile/touch devices where autoplay is usually blocked
    const mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      "ontouchstart" in window;
    setIsMobile(mobile);

    // On mobile, skip iframe entirely (fallback to CSS particles)
    if (mobile) {
      setLoadError(true);
      return;
    }

    // Timeout fallback if iframe doesn't load properly
    const timer = setTimeout(() => {
      setLoadError(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  // Fallback: show original gradient/particles background
  if (loadError || isMobile) {
    return <FallbackBackground />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* Facebook Reel iframe - fills entire hero */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={FB_REEL_URL}
          className="absolute inset-0 w-full h-full"
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
            // Scale up to hide FB chrome/UI edges
            transform: "scale(1.15)",
            transformOrigin: "center center",
          }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
          onError={() => setLoadError(true)}
          title="Virtual Kino 9D Reel"
        />
      </div>

      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background/90 z-[1]" />

      {/* Top and bottom bars to hide any FB UI */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-[2]" />

      {/* Side vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          boxShadow: "inset 0 0 200px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
}

function FallbackBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#050510] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,240,255,0.08)_0%,_transparent_70%)]" />
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[120px]" />
    </div>
  );
}

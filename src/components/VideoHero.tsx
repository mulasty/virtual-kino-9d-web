"use client";

import { useRef, useState, useEffect } from "react";

interface VideoHeroProps {
  src?: string;
  poster?: string;
  children?: React.ReactNode;
}

export default function VideoHero({ src, poster, children }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const handleCanPlay = () => setCanPlay(true);
    video.addEventListener("canplay", handleCanPlay);

    // Try autoplay muted
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.play().catch(() => {
      // Autoplay blocked, show poster/fallback
    });

    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [src]);

  // If no video src or mobile, render children (fallback)
  if (!src || (isMobile && !canPlay)) {
    return <>{children}</>;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          canPlay ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-[1]" />

      {/* Optional: vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          boxShadow: "inset 0 0 150px rgba(0,0,0,0.5)",
        }}
      />

      {/* Particles overlay on top of video */}
      <div className="absolute inset-0 z-[2] opacity-60">{children}</div>
    </div>
  );
}

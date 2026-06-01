# Video Hero – Instrukcja

## Co zostało zrobione

W Hero sekcji są teraz 3 opcje wizualne:

1. **Domyślnie (aktywne):** Gradient + animowane cząsteczki + pływające orby
2. **YouTube Lightbox:** Przycisk "Zobacz video" otwiera modal z YouTube Short
3. **Local video loop:** Gotowy komponent do wrzucenia własnego pliku MP4/WebM

---

## Jak włączyć video w tle Hero

1. Pobierz YouTube Short `KyYaDbnLCiQ` jako plik MP4 (np. przez yt-dlp)
2. Wyciągnij z niego **5-10 sekundowy fragment** idealny do loop
3. Umieść plik w `public/videos/hero-loop.mp4`
4. W pliku `src/components/HeroSection.tsx` zmień:
   ```ts
   const HERO_VIDEO_SRC = "/videos/hero-loop.mp4";
   ```

---

## Jaki fragment wybrać do loop?

Nie mogę przeskanować video, ale na podstawie doświadczenia z VR/9D kinem, idealny loop to:

### Najlepszy moment (zalecany):
- **Sekundy:** gdzie symulator się obraca o 360°
- **Co widać:** fotel w ruchu, neonowe światła, zadowolona twarz użytkownika
- **Dlaczego:** pokazuje główny "wow" produktu w 5 sekund

### Alternatywne momenty:
- Ludzie wchodzący do fotela (buduje ciekawość)
- Efekty specjalne (wiatr, dym, światła) – atmosfera eventu
- Panorama z góry – pokazuje skalę i mobilność

### Techniczne wymagania loop:
- **Format:** MP4 (H.264) lub WebM
- **Długość:** 5-15 sekund (krótsze = mniejszy plik, płynniejszy loop)
- **Rozmiar:** max 5-10 MB (kompresja przez HandBrake lub ffmpeg)
- **Audio:** wyłączone/muted (dla Hero tła)
- **Pętla:** musi zaczynać i kończyć się podobnym kadrem (seamless loop)

---

## Komendy ffmpeg do przygotowania loop

```bash
# Pobranie z YouTube
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" \
  "https://youtube.com/shorts/KyYaDbnLCiQ" -o raw.mp4

# Wycięcie fragmentu (np. od 3s do 10s)
ffmpeg -i raw.mp4 -ss 00:00:03 -t 7 -c copy clip.mp4

# Kompresja do web
ffmpeg -i clip.mp4 -c:v libx264 -preset slow -crf 28 -vf "scale=1920:-2" \
  -an -movflags +faststart hero-loop.mp4

# Opcjonalnie: WebM (lepiej kompresuje)
ffmpeg -i clip.mp4 -c:v libvpx-vp9 -b:v 1M -vf "scale=1920:-2" \
  -an hero-loop.webm
```

---

## Aktualne pliki video w projekcie

Brak – wszystko oparte na CSS/Canvas. Video to opcjonalne ulepszenie.

---

## Sugestia

Jeśli nie masz dobrego materiału video, **obecne tło cząsteczkowe + gradient wygląda bardzo profesjonalnie** i nie obciąża strony. Video w tle to "nice to have", nie "must have".

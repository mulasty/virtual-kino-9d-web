import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import SocialMediaSection from "@/components/SocialMediaSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ServicesSection />
        <GallerySection />
        <SocialMediaSection />
        <FAQSection />
        <ContactSection />
        <ShareButtons />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

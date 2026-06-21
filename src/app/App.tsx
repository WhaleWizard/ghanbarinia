import "../styles/fonts.css";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { MarqueeBar } from "./components/MarqueeBar";
import { Heritage } from "./components/Heritage";
import { CarpetScrollStory } from "./components/CarpetScrollStory";
import { Collections } from "./components/Collections";
import { Craftsmanship } from "./components/Craftsmanship";
import { Masterworks } from "./components/Masterworks";
import { Showrooms } from "./components/Showrooms";
import { Consultation } from "./components/Consultation";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <MarqueeBar />
        <Heritage />
        <CarpetScrollStory />
        <Collections />
        <Craftsmanship />
        <Masterworks />
        <Showrooms />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}

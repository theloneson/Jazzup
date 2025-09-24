import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroArtwork from "@/assets/hero-artwork.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroArtwork}
          alt="Jazzup's vibrant street art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="space-y-8">
            {/* Logo/Brand */}
            <div className="space-y-4">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-light leading-none">
                Jazzup
              </h1>
              <div className="font-body text-lg md:text-xl text-light/90 max-w-2xl">
                <span className="font-display text-2xl text-secondary">Ajayi Samuel A.</span>
                <br />
                Lagos-based multidisciplinary artist
              </div>
            </div>

            {/* Tagline */}
            <blockquote className="font-body text-xl md:text-2xl text-light/95 italic max-w-3xl border-l-4 border-neon pl-6">
              "Art is not just to be looked at — it's to be felt and lived."
            </blockquote>

            {/* Stats Strip */}
            <div className="flex flex-wrap gap-6 text-light/80 font-body text-sm md:text-base">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                450+ Works
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                UNICEF 2023 Award
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon rounded-full" />
                Collabs: Crocs, Tiger Beer, Flying Fish
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="hero-button group">
                <span className="font-display">Shop Originals</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-light/10 border-light/30 text-light hover:bg-light/20 px-8 py-4 rounded-2xl font-body backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Explore Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scribble Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
        <div className="scribble-overlay bg-secondary/20 rounded-full" />
      </div>
      <div className="absolute bottom-40 left-10 w-24 h-24 opacity-20">
        <div className="scribble-overlay bg-neon/20 rounded-full" />
      </div>
    </section>
  );
};
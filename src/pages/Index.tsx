import { useState } from "react";
import { ArrowRight, Play, Sparkles, Users, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroArtwork from "@/assets/hero-artwork.jpg";
import galleryPreview from "@/assets/gallery-preview.jpg";

const Index = () => {
  const [email, setEmail] = useState("");

  const highlights = [
    "450+ Artworks Created",
    "UNICEF Best Digital Artist 2023", 
    "Collabs: Crocs, Tiger Beer, Flying Fish",
    "Based in Lagos"
  ];

  const featuredWorks = [
    {
      id: 1,
      title: "Urban Dreams",
      year: "2024",
      story: "A vibrant exploration of Lagos street life through dreams and aspirations.",
      image: galleryPreview
    },
    {
      id: 2,
      title: "Scribble Revolution",
      year: "2023", 
      story: "The signature piece that defined the Scribblism movement.",
      image: galleryPreview
    },
    {
      id: 3,
      title: "Neon Nights",
      year: "2024",
      story: "Capturing the electric energy of Lagos nightlife.",
      image: galleryPreview
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section - Full Viewport Canvas */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Artwork */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroArtwork}
              alt="Jazzup's vibrant street art"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-4xl">
              <div className="space-y-8">
                {/* Logo/Brand */}
                <div className="space-y-6">
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

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="hero-button group">
                    <a href="/portfolio">
                      <span className="font-display">Explore Portfolio</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" className="bg-light/10 border-light/30 text-light hover:bg-light/20 px-8 py-4 rounded-2xl font-body backdrop-blur-sm">
                    <a href="/shop">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Shop Originals
                    </a>
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

        {/* Micro Highlights Strip */}
        <section className="py-6 bg-primary/5 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-sm md:text-base text-foreground">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Style Section */}
        <section className="py-20 bg-gradient-to-br from-background via-light to-background relative">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="font-display text-4xl md:text-6xl text-primary">
                Scribblism — Chaos into Beauty
              </h2>
              <blockquote className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                "My art is a rebellion against perfection. Every scribble represents the 
                beautiful disorder of human experience."
              </blockquote>
              <div className="font-body text-lg text-muted-foreground">— Jazzup</div>
            </div>
          </div>
          
          {/* Animated scribbles */}
          <div className="absolute top-10 left-20 w-16 h-16 opacity-20">
            <div className="scribble-overlay bg-accent/30 rounded-full animate-pulse" />
          </div>
          <div className="absolute bottom-10 right-32 w-20 h-20 opacity-15">
            <div className="scribble-overlay bg-neon/30 rounded-full animate-pulse" />
          </div>
        </section>

        {/* Featured Artworks */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
                Featured Works
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the raw energy and emotional depth of Scribblism
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredWorks.map((work) => (
                <Card key={work.id} className="gallery-card group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-light">
                        <div className="flex items-center gap-2 mb-2">
                          <Play className="h-4 w-4" />
                          <span className="text-sm">View Full Story</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {work.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-3">
                      {work.year}
                    </p>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2">
                      {work.story}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="group">
                <a href="/portfolio">
                  <span className="font-body">View Full Portfolio</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Spotlight */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-4xl md:text-5xl text-primary">
                  Next Exhibition
                </h2>
                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-foreground">
                    Scribblism: Lagos to the World
                  </h3>
                  <p className="font-body text-muted-foreground">
                    March 15-30, 2024 • Terra Kulture, Lagos
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    A comprehensive showcase of Jazzup's evolution from street art to gallery exhibitions, 
                    featuring never-before-seen pieces and interactive installations.
                  </p>
                </div>
                <Button asChild className="hero-button">
                  <a href="/exhibitions">
                    <span className="font-body">See All Exhibitions</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              <div className="artwork-frame">
                <img
                  src={galleryPreview}
                  alt="Exhibition preview"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Teaser */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="font-display text-4xl md:text-5xl text-primary">
                Try the Scribble Experience
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Get a taste of the creative chaos — try our mini scribble wall
              </p>
              
              <Card className="p-8 bg-gradient-to-br from-light to-background">
                <CardContent className="p-0">
                  <div className="h-64 bg-light rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Sparkles className="h-8 w-8 text-primary" />
                      </div>
                      <p className="font-body text-muted-foreground">
                        Interactive canvas coming soon...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button size="lg" className="hero-button">
                <span className="font-body">Try Full Experience</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Capture */}
        <section className="py-20 bg-dark text-light">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="font-display text-4xl md:text-5xl text-secondary">
                Join the Scribble Circle
              </h2>
              <p className="font-body text-lg text-light/80">
                Get exclusive access to new works, exhibition previews, and behind-the-scenes content
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-light/10 border-light/20 text-light placeholder:text-light/50"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Subscribe
                </Button>
              </div>
              
              <p className="font-body text-xs text-light/60">
                No spam, just art. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

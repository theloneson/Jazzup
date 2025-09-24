import { Award, Palette, Users, Play } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import artistPortrait from "@/assets/artist-portrait.jpg";

const About = () => {
  const achievements = [
    {
      icon: Palette,
      title: "450+ Custom Works",
      description: "From sneakers to large-scale murals"
    },
    {
      icon: Award,
      title: "UNICEF 2023 Award",
      description: "Best Digital Artist recognition"
    },
    {
      icon: Users,
      title: "Major Collaborations",
      description: "Crocs, Tiger Beer, Flying Fish & more"
    }
  ];

  const influences = [
    { 
      name: "Jean-Michel Basquiat", 
      impact: "Freedom through raw expression",
      description: "The king of neo-expressionism taught me that art doesn't need to be perfect to be powerful"
    },
    { 
      name: "Slawn", 
      impact: "Rebellion against conformity",
      description: "A pioneer of contemporary African street art, showing me how to blend tradition with innovation"
    },
    { 
      name: "Musa Ganiyy", 
      impact: "Vibrance in Nigerian heritage",
      description: "His celebration of Nigerian culture through art inspired my own journey of cultural expression"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "First Sneaker Customs",
      description: "Started painting custom sneakers for friends in Lagos"
    },
    {
      year: "2019", 
      title: "Scribblism Born",
      description: "Developed signature chaotic style blending street and gallery aesthetics"
    },
    {
      year: "2021",
      title: "450+ Artworks",
      description: "Reached milestone of over 450 custom pieces created"
    },
    {
      year: "2022",
      title: "Major Collaborations",
      description: "Partnerships with Crocs, Tiger Beer, and Flying Fish"
    },
    {
      year: "2023",
      title: "UNICEF Recognition",
      description: "Won Best Digital Artist award for social impact through art"
    },
    {
      year: "2024",
      title: "Global Exhibitions",
      description: "Showcasing Scribblism in galleries across Africa and beyond"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="order-2 lg:order-1">
              <div className="artwork-frame relative">
                <img
                  src={artistPortrait}
                  alt="Ajayi Samuel A. (Jazzup)"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
                {/* Scribble Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10 rounded-2xl" />
                <div className="absolute top-4 right-4 scribble-overlay w-16 h-16 bg-neon/20 rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h1 className="font-display text-5xl md:text-7xl text-primary mb-6">
                  Meet Jazzup
                </h1>
                <div className="space-y-6 font-body text-lg text-foreground">
                  <p>
                    <span className="font-display text-2xl text-secondary">"Ajayi Samuel A."</span>, 
                    known as <span className="font-display text-accent">Jazzup</span>, 
                    is a Lagos-based multidisciplinary artist whose groundbreaking style 
                    <span className="font-display text-primary"> "Scribblism"</span> has revolutionized 
                    contemporary African street art.
                  </p>
                  <p>
                    Born from the chaotic energy of Lagos streets, Jazzup's work transcends 
                    traditional boundaries, blending raw emotional expression with sophisticated 
                    artistic technique. Every scribble is a rebellion against perfection.
                  </p>
                </div>
              </div>

              {/* Behind the Scenes Video */}
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Button size="lg" className="hero-button">
                      <Play className="mr-2 h-5 w-5" />
                      <span className="font-display">Behind the Scenes</span>
                    </Button>
                    <div>
                      <h3 className="font-display text-lg text-foreground">Studio Sessions</h3>
                      <p className="font-body text-sm text-muted-foreground">
                        Watch the creative process unfold
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-16 bg-gradient-to-r from-dark/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl text-primary">
              Artist Statement
            </h2>
            <div className="relative">
              <blockquote className="font-body text-xl md:text-2xl text-foreground leading-relaxed italic">
                "My art is a rebellion against perfection. Every scribble, every chaotic stroke 
                represents the beautiful disorder of human experience. Through Scribblism, 
                I invite viewers to embrace their own creative chaos and find beauty in the unplanned."
              </blockquote>
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-display">"</div>
              <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20 font-display">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {achievements.map((item, index) => (
              <Card key={index} className="text-center p-8 hover-lift bg-gradient-to-br from-background to-light">
                <CardContent className="p-0">
                  <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              The Journey
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From painting sneakers to global recognition — the evolution of Scribblism
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-max px-4">
              {timeline.map((milestone, index) => (
                <Card key={index} className="min-w-80 hover-lift">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        <span className="font-display text-lg text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="font-display text-xl text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influences Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Influences
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The artists who shaped the Scribblism movement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {influences.map((influence, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
                  <h3 className="font-display text-2xl text-primary">
                    {influence.name}
                  </h3>
                  <p className="font-display text-lg text-accent">
                    {influence.impact}
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {influence.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-dark/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">
              Mission Statement
            </h2>
            <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
              "Art is freedom, chaos, and faith — Scribblism is my way of showing it."
            </blockquote>
            <div className="mt-8">
              <span className="font-body text-lg text-muted-foreground">— Jazzup</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
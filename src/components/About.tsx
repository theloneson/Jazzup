import { Award, Palette, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import artistPortrait from "@/assets/artist-portrait.jpg";

export const About = () => {
  const achievements = [
    {
      icon: Palette,
      title: "450+ Custom Works",
      description: "From sneakers to large-scale murals"
    },
    {
      icon: Award,
      title: "UNICEF 2023 Award",
      description: "Recognition for social impact through art"
    },
    {
      icon: Users,
      title: "Major Collaborations",
      description: "Crocs, Tiger Beer, Flying Fish & more"
    }
  ];

  const influences = [
    { name: "Jean-Michel Basquiat", impact: "Neo-expressionist pioneer" },
    { name: "Slawn", impact: "Contemporary African street art" },
    { name: "Musa Ganiyy", impact: "Nigerian artistic heritage" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="space-y-8">
            <div className="artwork-frame">
              <img
                src={artistPortrait}
                alt="Ajayi Samuel A. (Jazzup)"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
              />
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.map((item, index) => (
                <Card key={index} className="text-center p-4 hover-lift">
                  <CardContent className="p-0">
                    <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-display text-sm text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
                Meet Jazzup
              </h2>
              <div className="space-y-4 font-body text-lg text-foreground">
                <p>
                  Ajayi Samuel A., known as <span className="font-display text-secondary">"Jazzup"</span>, 
                  is a Lagos-based multidisciplinary artist whose groundbreaking style 
                  <span className="font-display text-accent"> "Scribblism"</span> has revolutionized 
                  contemporary African street art.
                </p>
                <p>
                  Born from the chaotic energy of Lagos streets, Jazzup's work transcends 
                  traditional boundaries, blending raw emotional expression with sophisticated 
                  artistic technique. His signature approach captures the visceral pulse of 
                  urban life through bold colors, dynamic textures, and unfiltered creativity.
                </p>
              </div>
            </div>

            {/* Artist Statement */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border-l-4 border-neon">
              <h3 className="font-display text-xl text-foreground mb-4">Artist Statement</h3>
              <blockquote className="font-body text-muted-foreground italic leading-relaxed">
                "My art is a rebellion against perfection. Every scribble, every chaotic stroke 
                represents the beautiful disorder of human experience. Through Scribblism, 
                I invite viewers to embrace their own creative chaos and find beauty in the unplanned."
              </blockquote>
            </div>

            {/* Influences */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">Influences</h3>
              <div className="space-y-3">
                {influences.map((influence, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                    <div>
                      <span className="font-display text-foreground">{influence.name}</span>
                      <span className="font-body text-sm text-muted-foreground ml-2">
                        — {influence.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
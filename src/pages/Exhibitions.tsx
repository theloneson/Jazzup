import { Calendar, MapPin, ExternalLink, Users, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import galleryPreview from "@/assets/gallery-preview.jpg";

const Exhibitions = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Scribblism: Lagos to the World",
      date: "March 15-30, 2024",
      location: "Terra Kulture, Lagos",
      description: "A comprehensive showcase of Jazzup's evolution from street art to gallery exhibitions.",
      image: galleryPreview,
      status: "upcoming",
      ticketUrl: "#rsvp",
      featured: true
    },
    {
      id: 2,
      title: "African Contemporary Collective",
      date: "April 10-20, 2024", 
      location: "National Gallery, Abuja",
      description: "Group exhibition featuring emerging African artists pushing creative boundaries.",
      image: galleryPreview,
      status: "upcoming",
      ticketUrl: "#rsvp",
      featured: false
    }
  ];

  const pastExhibitions = [
    {
      id: 3,
      title: "Chaos & Order: The Scribblism Movement",
      date: "December 2023",
      location: "Nike Art Gallery, Lagos",
      description: "Solo exhibition introducing Scribblism to the Nigerian art scene.",
      image: galleryPreview,
      status: "past",
      highlights: ["250+ visitors", "15 pieces sold", "Featured in Guardian Arts"]
    },
    {
      id: 4,
      title: "Street to Gallery",
      date: "August 2023",
      location: "Rele Gallery, Lagos",
      description: "Group exhibition celebrating urban art forms.",
      image: galleryPreview,
      status: "past",
      highlights: ["First gallery showing", "Media coverage", "Collector interest"]
    },
    {
      id: 5,
      title: "Digital Africa Art Fair",
      date: "June 2023",
      location: "Virtual Exhibition",
      description: "Online showcase of digital artworks and NFT collections.",
      image: galleryPreview,
      status: "past",
      highlights: ["Global reach", "Digital sales", "International recognition"]
    }
  ];

  const collaborations = [
    {
      id: 1,
      brand: "Crocs",
      year: "2023",
      campaign: "Custom Clog Collection",
      description: "Limited edition hand-painted Crocs featuring Scribblism patterns.",
      image: galleryPreview,
      impact: "10,000+ units sold globally"
    },
    {
      id: 2,
      brand: "Tiger Beer",
      year: "2023",
      campaign: "Lagos Street Culture",
      description: "Artistic campaign celebrating Lagos street culture and nightlife.",
      image: galleryPreview,
      impact: "5M+ social impressions"
    },
    {
      id: 3,
      brand: "Flying Fish",
      year: "2022",
      campaign: "Urban Legends",
      description: "Mural series across Lagos showcasing urban stories.",
      image: galleryPreview,
      impact: "12 murals across Lagos"
    }
  ];

  const pressHighlights = [
    {
      outlet: "The Guardian Nigeria",
      quote: "Jazzup's Scribblism represents a new wave of African contemporary art.",
      year: "2023"
    },
    {
      outlet: "Artsy Magazine",
      quote: "A raw, unfiltered voice in the global art conversation.",
      year: "2023"
    },
    {
      outlet: "CNN African Voices",
      quote: "Transforming chaos into beauty, one scribble at a time.",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="font-display text-5xl md:text-7xl text-primary">
              Exhibitions & Collaborations
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              From Lagos galleries to global brands — showcasing Scribblism to the world
            </p>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
          <div className="scribble-overlay bg-secondary/20 rounded-full" />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Don't miss these exclusive showcases
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className={`overflow-hidden hover-lift ${event.featured ? 'border-primary' : ''}`}>
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  {event.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-col gap-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-body text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="font-body text-sm">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="font-body text-muted-foreground">
                      {event.description}
                    </p>

                    <Button className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span className="font-body">RSVP Now</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Exhibitions Timeline */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Exhibition History
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              A journey through gallery spaces and artistic milestones
            </p>
          </div>

          <div className="space-y-8">
            {pastExhibitions.map((exhibition, index) => (
              <Card key={exhibition.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                  </div>
                  
                  <div className="lg:col-span-2 p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-display text-2xl text-foreground mb-2">
                          {exhibition.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="font-body text-sm">{exhibition.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span className="font-body text-sm">{exhibition.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="font-body text-muted-foreground">
                        {exhibition.description}
                      </p>

                      {exhibition.highlights && (
                        <div className="flex flex-wrap gap-2">
                          {exhibition.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="font-body text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Brand Collaborations
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Bringing Scribblism to global brands and campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborations.map((collab) => (
              <Card key={collab.id} className="hover-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={collab.image}
                    alt={collab.campaign}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-1">
                        {collab.brand}
                      </h3>
                      <p className="font-body text-sm text-primary">
                        {collab.campaign} • {collab.year}
                      </p>
                    </div>

                    <p className="font-body text-muted-foreground text-sm">
                      {collab.description}
                    </p>

                    <div className="flex items-center gap-2 text-accent">
                      <Award className="h-4 w-4" />
                      <span className="font-body text-sm">{collab.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-dark/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Press & Recognition
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              What the art world is saying about Scribblism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressHighlights.map((press, index) => (
              <Card key={index} className="p-8 text-center hover-lift">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="text-4xl text-primary/20 font-display">"</div>
                    <blockquote className="font-body text-foreground leading-relaxed italic">
                      {press.quote}
                    </blockquote>
                    <div className="space-y-1">
                      <div className="font-display text-primary">{press.outlet}</div>
                      <div className="font-body text-sm text-muted-foreground">{press.year}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Exhibitions;
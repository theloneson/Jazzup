import { ArrowRight, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import galleryPreview from "@/assets/gallery-preview.jpg";

export const FeaturedWorks = () => {
  const featured = [
    {
      id: 1,
      title: "Urban Dreams",
      year: "2024",
      medium: "Acrylic on Canvas",
      price: "₦850,000",
      story: "A vibrant exploration of Lagos street life through the lens of dreams and aspirations.",
      image: galleryPreview,
      available: true,
      likes: 247
    },
    {
      id: 2,
      title: "Scribble Revolution",
      year: "2023",
      medium: "Mixed Media",
      price: "₦1,200,000",
      story: "The signature piece that defined the Scribblism movement in contemporary African art.",
      image: galleryPreview,
      available: false,
      likes: 392
    },
    {
      id: 3,
      title: "Neon Nights",
      year: "2024",
      medium: "Spray Paint & Markers",
      price: "₦650,000",
      story: "Capturing the electric energy of Lagos nightlife through bold strokes and neon colors.",
      image: galleryPreview,
      available: true,
      likes: 156
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background via-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-4">
            Featured Works
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the raw energy and emotional depth of Scribblism through these curated pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((piece, index) => (
            <Card key={piece.id} className="gallery-card group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-light">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                {!piece.available && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-body">
                    Sold
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl text-foreground mb-1">
                        {piece.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {piece.year} • {piece.medium}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{piece.likes}</span>
                    </div>
                  </div>

                  <p className="font-body text-sm text-muted-foreground line-clamp-2">
                    {piece.story}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-display text-lg text-primary">
                      {piece.price}
                    </span>
                    {piece.available && (
                      <Button size="sm" className="font-body">
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            <span className="font-body">View Full Portfolio</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
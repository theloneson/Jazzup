import { useState } from "react";
import { Eye, Filter, Grid3X3, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import galleryPreview from "@/assets/gallery-preview.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState<any>(null);

  const categories = [
    "All",
    "Customs & Wearables", 
    "Scribblism Canvases",
    "Digital Scribbles",
    "Murals",
    "Collaborations"
  ];

  const artworks = [
    {
      id: 1,
      title: "Urban Dreams",
      year: "2024",
      medium: "Acrylic on Canvas",
      category: "Scribblism Canvases",
      price: "₦850,000",
      story: "A vibrant exploration of Lagos street life through the lens of dreams and aspirations. This piece captures the raw energy of urban existence while celebrating the beauty found in everyday chaos.",
      image: galleryPreview,
      available: true,
      size: "48 x 36 inches"
    },
    {
      id: 2,
      title: "Scribble Revolution",
      year: "2023", 
      medium: "Mixed Media",
      category: "Scribblism Canvases",
      price: "₦1,200,000",
      story: "The signature piece that defined the Scribblism movement in contemporary African art. Every stroke represents a rebellion against perfection.",
      image: galleryPreview,
      available: false,
      size: "60 x 40 inches"
    },
    {
      id: 3,
      title: "Neon Nights",
      year: "2024",
      medium: "Spray Paint & Markers",
      category: "Murals",
      price: "₦650,000",
      story: "Capturing the electric energy of Lagos nightlife through bold strokes and neon colors.",
      image: galleryPreview,
      available: true,
      size: "72 x 48 inches"
    },
    {
      id: 4,
      title: "Custom Air Force 1",
      year: "2024",
      medium: "Acrylic on Leather",
      category: "Customs & Wearables",
      price: "₦45,000",
      story: "Hand-painted custom sneakers featuring signature Scribblism patterns.",
      image: galleryPreview,
      available: true,
      size: "Size 42"
    },
    {
      id: 5,
      title: "Tiger Beer Collab",
      year: "2023",
      medium: "Digital Art",
      category: "Collaborations",
      price: "Commission Work",
      story: "Collaborative artwork created for Tiger Beer's Lagos campaign.",
      image: galleryPreview,
      available: false,
      size: "Digital"
    },
    {
      id: 6,
      title: "Digital Chaos #1",
      year: "2024",
      medium: "Digital Scribbles",
      category: "Digital Scribbles",
      price: "₦25,000",
      story: "First in the digital chaos series exploring Scribblism in digital mediums.",
      image: galleryPreview,
      available: true,
      size: "4K Digital"
    }
  ];

  const filteredArtworks = selectedCategory === "All" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const openLightbox = (piece: any) => {
    setSelectedPiece(piece);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedPiece(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="font-display text-5xl md:text-7xl text-primary">
              Portfolio
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse yourself in the chaotic beauty of Scribblism — where every stroke tells a story
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="font-body"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search & View Options */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search artworks..."
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredArtworks.map((artwork, index) => (
              <Card 
                key={artwork.id} 
                className="gallery-card group cursor-pointer break-inside-avoid"
                onClick={() => openLightbox(artwork)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ height: `${200 + (index % 3) * 100}px` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-light">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">View Details</span>
                      </div>
                      <h3 className="font-display text-lg mb-1">{artwork.title}</h3>
                      <p className="text-sm opacity-90">{artwork.year} • {artwork.medium}</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  {!artwork.available && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-body">
                      Sold
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedPiece && (
        <div className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-6xl w-full bg-background rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedPiece.image}
                  alt={selectedPiece.title}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 text-light hover:bg-light/20"
                  onClick={closeLightbox}
                >
                  ×
                </Button>
              </div>

              {/* Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h2 className="font-display text-3xl text-primary mb-2">
                    {selectedPiece.title}
                  </h2>
                  <p className="font-body text-muted-foreground">
                    {selectedPiece.year} • {selectedPiece.medium} • {selectedPiece.size}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-xl text-foreground">Story</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {selectedPiece.story}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-primary">
                      {selectedPiece.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {selectedPiece.available ? "Available" : "Sold"}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    {selectedPiece.available && (
                      <>
                        <Button className="flex-1">
                          Buy Original
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Buy Print
                        </Button>
                      </>
                    )}
                    <Button variant="outline" className="flex-1">
                      Request Commission
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;
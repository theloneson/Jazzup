import { useState } from "react";
import { ShoppingBag, Heart, Star, Filter, Timer } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import galleryPreview from "@/assets/gallery-preview.jpg";

const Shop = () => {
  const [selectedCollection, setSelectedCollection] = useState("All");
  const [cart, setCart] = useState<any[]>([]);

  const collections = ["All", "Originals", "Prints", "Wearables", "Commissions"];

  const products = [
    {
      id: 1,
      title: "Urban Dreams Original",
      collection: "Originals",
      price: 850000,
      originalPrice: null,
      currency: "₦",
      image: galleryPreview,
      rating: 5,
      reviews: 12,
      inStock: true,
      isLimited: false,
      story: "A vibrant exploration of Lagos street life through the lens of dreams and aspirations.",
      size: "48 x 36 inches",
      medium: "Acrylic on Canvas"
    },
    {
      id: 2,
      title: "Scribble Revolution Print",
      collection: "Prints",
      price: 25000,
      originalPrice: 35000,
      currency: "₦",
      image: galleryPreview,
      rating: 4.8,
      reviews: 28,
      inStock: true,
      isLimited: true,
      story: "High-quality print of the signature piece that defined Scribblism.",
      size: "A3 Premium Paper",
      medium: "Giclée Print"
    },
    {
      id: 3,
      title: "Custom Air Force 1",
      collection: "Wearables",
      price: 45000,
      originalPrice: null,
      currency: "₦",
      image: galleryPreview,
      rating: 5,
      reviews: 45,
      inStock: true,
      isLimited: false,
      story: "Hand-painted custom sneakers featuring signature Scribblism patterns.",
      size: "Available in all sizes",
      medium: "Acrylic on Leather"
    },
    {
      id: 4,
      title: "Neon Nights Original",
      collection: "Originals",
      price: 650000,
      originalPrice: null,
      currency: "₦",
      image: galleryPreview,
      rating: 5,
      reviews: 8,
      inStock: true,
      isLimited: false,
      story: "Capturing the electric energy of Lagos nightlife through bold strokes.",
      size: "72 x 48 inches",
      medium: "Spray Paint & Markers"
    },
    {
      id: 5,
      title: "Digital Chaos Print Set",
      collection: "Prints",
      price: 15000,
      originalPrice: 20000,
      currency: "₦",
      image: galleryPreview,
      rating: 4.7,
      reviews: 34,
      inStock: true,
      isLimited: true,
      story: "Set of 3 prints from the digital chaos series.",
      size: "A4 Set of 3",
      medium: "Premium Digital Prints"
    },
    {
      id: 6,
      title: "Custom Commission",
      collection: "Commissions",
      price: 100000,
      originalPrice: null,
      currency: "₦",
      image: galleryPreview,
      rating: 5,
      reviews: 67,
      inStock: true,
      isLimited: false,
      story: "Personalized artwork created just for you. Starting price for small pieces.",
      size: "Custom sizing available",
      medium: "Your choice of medium"
    }
  ];

  const filteredProducts = selectedCollection === "All" 
    ? products 
    : products.filter(product => product.collection === selectedCollection);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const formatPrice = (price: number, currency: string) => {
    return `${currency}${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 relative z-10">
            <h1 className="font-display text-5xl md:text-7xl text-primary">
              Own a Piece of Scribblism
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              From original masterpieces to wearable art — every piece is hand-created and one-of-one
            </p>
            
            {/* Limited Drop Alert */}
            <div className="inline-flex items-center gap-2 bg-neon/10 border border-neon/20 rounded-full px-6 py-3">
              <Timer className="h-4 w-4 text-neon" />
              <span className="font-body text-sm text-foreground">
                Limited prints collection ends in 5 days
              </span>
            </div>
          </div>
          
          {/* Background scribbles */}
          <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
            <div className="scribble-overlay bg-secondary/20 rounded-full" />
          </div>
          <div className="absolute bottom-20 left-10 w-24 h-24 opacity-15">
            <div className="scribble-overlay bg-neon/20 rounded-full" />
          </div>
        </div>
      </section>

      {/* Collection Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Collection Tabs */}
            <div className="flex flex-wrap gap-2">
              {collections.map((collection) => (
                <Button
                  key={collection}
                  variant={selectedCollection === collection ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCollection(collection)}
                  className="font-body"
                >
                  {collection}
                </Button>
              ))}
            </div>

            {/* Filter & Sort */}
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <span className="font-body text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="gallery-card group cursor-pointer overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isLimited && (
                      <Badge className="bg-neon text-dark font-body">Limited</Badge>
                    )}
                    {product.originalPrice && (
                      <Badge variant="secondary" className="font-body">Sale</Badge>
                    )}
                  </div>

                  {/* Wishlist */}
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute top-4 right-4 text-light hover:bg-light/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      className="w-full hero-button"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      <span className="font-body">Quick Add</span>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-neon' : 'text-muted-foreground'}`} 
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <span className="font-body text-xs text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Title & Collection */}
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">
                        {product.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {product.size} • {product.medium}
                      </p>
                    </div>

                    {/* Story */}
                    <p className="font-body text-sm text-muted-foreground line-clamp-2">
                      {product.story}
                    </p>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-xl text-primary">
                            {formatPrice(product.price, product.currency)}
                          </span>
                          {product.originalPrice && (
                            <span className="font-body text-sm text-muted-foreground line-through">
                              {formatPrice(product.originalPrice, product.currency)}
                            </span>
                          )}
                        </div>
                        <p className="font-body text-xs text-muted-foreground">
                          {product.inStock ? "In stock" : "Sold out"}
                        </p>
                      </div>
                      
                      {product.collection === "Commissions" ? (
                        <Button variant="outline" size="sm" className="font-body">
                          Request Quote
                        </Button>
                      ) : (
                        <Button 
                          size="sm" 
                          className="font-body"
                          disabled={!product.inStock}
                          onClick={() => addToCart(product)}
                        >
                          Add to Bag
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Every piece is hand-created highlight */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              Every Piece Tells a Story
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-created in Lagos with love, chaos, and countless hours of dedication. 
              Each artwork carries the raw energy of Scribblism.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="font-display text-2xl text-primary">450+</div>
                <div className="font-body text-sm text-muted-foreground">Artworks Created</div>
              </div>
              <div>
                <div className="font-display text-2xl text-secondary">100%</div>
                <div className="font-body text-sm text-muted-foreground">Hand-Painted</div>
              </div>
              <div>
                <div className="font-display text-2xl text-accent">24-48h</div>
                <div className="font-body text-sm text-muted-foreground">Processing Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
import { Instagram, Twitter, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl text-secondary">Jazzup</h3>
            <p className="font-body text-light/80 leading-relaxed">
              Multidisciplinary artist creating visceral experiences through Scribblism. 
              Based in Lagos, Nigeria.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-light hover:text-secondary hover:bg-light/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-light hover:text-accent hover:bg-light/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-light hover:text-neon hover:bg-light/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-light">Explore</h4>
            <nav className="space-y-2">
              {["Portfolio", "About", "Shop", "Exhibitions", "Blog"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-light/70 hover:text-light transition-colors duration-300 block"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-light">Shop</h4>
            <nav className="space-y-2">
              {["Originals", "Prints", "Wearables", "Commissions", "Gift Cards"].map((link) => (
                <a
                  key={link}
                  href="#shop"
                  className="font-body text-light/70 hover:text-light transition-colors duration-300 block"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-light">Stay Connected</h4>
            <p className="font-body text-light/70 text-sm">
              Get updates on new works, exhibitions, and exclusive releases.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email"
                className="bg-light/10 border-light/20 text-light placeholder:text-light/50"
              />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-light/60 font-body text-sm">
              <MapPin className="h-4 w-4" />
              <span>Lagos, Nigeria</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-light/60 font-body text-sm">
              <a href="#privacy" className="hover:text-light transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-light transition-colors">Terms of Sale</a>
              <a href="#returns" className="hover:text-light transition-colors">Returns</a>
              <a href="#shipping" className="hover:text-light transition-colors">Shipping</a>
            </div>
            
            <div className="text-light/60 font-body text-sm">
              © 2024 Jazzup. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
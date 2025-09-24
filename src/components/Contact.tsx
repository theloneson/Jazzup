import { useState } from "react";
import { Send, MapPin, Mail, Phone, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Commission Request Submitted!",
      description: "Thanks for your interest. We'll reply within 3 business days.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-light via-background to-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-4">
            Let's Create Together
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to commission a unique piece or collaborate? Let's bring your vision to life through Scribblism.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-display text-xl text-foreground">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-body text-foreground">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-body text-foreground">hello@jazzup.art</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-body text-foreground">+234 (0) 123 456 7890</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-display text-xl text-foreground">Follow the Journey</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-secondary/10 to-neon/10 rounded-xl p-6 border border-secondary/20">
              <h3 className="font-display text-lg text-foreground mb-2">Commission Process</h3>
              <div className="space-y-2 font-body text-sm text-muted-foreground">
                <p>• 30% deposit required to start</p>
                <p>• 2-6 weeks completion time</p>
                <p>• Regular progress updates</p>
                <p>• Worldwide shipping available</p>
              </div>
            </div>
          </div>

          {/* Commission Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-display text-2xl text-foreground">
                  Commission Request
                </CardTitle>
              </CardHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">Name *</label>
                    <Input placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">Email *</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">Type of Work *</label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="original">Original Artwork</SelectItem>
                        <SelectItem value="wearable">Custom Wearable</SelectItem>
                        <SelectItem value="mural">Mural/Large Scale</SelectItem>
                        <SelectItem value="collaboration">Brand Collaboration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">Budget Range *</label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100-500k">₦100k - ₦500k</SelectItem>
                        <SelectItem value="500k-1m">₦500k - ₦1M</SelectItem>
                        <SelectItem value="1m-2m">₦1M - ₦2M</SelectItem>
                        <SelectItem value="2m+">₦2M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-foreground mb-2 block">Project Brief *</label>
                  <Textarea 
                    placeholder="Describe your vision, preferred colors, size, and any specific requirements..."
                    className="min-h-32"
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">Preferred Medium</label>
                    <Input placeholder="e.g., Acrylic, Mixed Media, Spray Paint" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">Timeline</label>
                    <Input placeholder="e.g., 4-6 weeks, Flexible" />
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="font-body text-sm text-muted-foreground">
                    By submitting this form, you agree to our commission terms including a 30% non-refundable deposit to begin work.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full hero-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="font-body">Submitting...</span>
                  ) : (
                    <>
                      <span className="font-body">Submit Commission Request</span>
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
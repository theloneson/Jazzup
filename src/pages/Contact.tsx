import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Send, Upload, DollarSign, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    workType: "",
    budget: "",
    timeline: "",
    message: "",
    files: null as FileList | null
  });

  const workTypes = [
    "Custom Sneakers",
    "Canvas Painting",
    "Digital Art",
    "Mural Commission",
    "Brand Collaboration",
    "Exhibition Piece",
    "Other"
  ];

  const budgetRanges = [
    "₦25,000 - ₦50,000",
    "₦50,000 - ₦100,000", 
    "₦100,000 - ₦250,000",
    "₦250,000 - ₦500,000",
    "₦500,000 - ₦1,000,000",
    "₦1,000,000+"
  ];

  const timelines = [
    "1-2 weeks",
    "2-4 weeks",
    "1-2 months",
    "2-3 months",
    "3+ months",
    "Flexible"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      files: e.target.files
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Commission request:", formData);
    alert("Thank you! Your commission request has been received. I'll get back to you within 3 business days.");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@jazzup.art",
      href: "mailto:hello@jazzup.art"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (0) 815 XXX XXXX",
      href: "tel:+2348150000000"
    },
    {
      icon: MapPin,
      label: "Studio",
      value: "Lagos, Nigeria",
      href: "#map"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@jazzupcustoms",
      href: "https://instagram.com/jazzupcustoms",
      color: "text-pink-500"
    },
    {
      icon: Twitter,
      label: "Twitter",
      handle: "@jazzupart",
      href: "https://twitter.com/jazzupart",
      color: "text-blue-500"
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
              Let's Create Together
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your vision to life through Scribblism? Let's start the conversation.
            </p>
          </div>
        </div>
        
        {/* Background scribbles */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
          <div className="scribble-overlay bg-secondary/20 rounded-full" />
        </div>
        <div className="absolute bottom-20 left-10 w-24 h-24 opacity-15">
          <div className="scribble-overlay bg-neon/20 rounded-full" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Commission Form */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 border-b">
                <h2 className="font-display text-2xl text-foreground mb-2">
                  Commission Request
                </h2>
                <p className="font-body text-muted-foreground">
                  Every commission starts with understanding your vision. Fill out the details below.
                </p>
              </div>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-body text-sm text-foreground">Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-sm text-foreground">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-sm text-foreground">Phone (Optional)</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="font-body text-sm text-foreground">Type of Work *</label>
                      <Select onValueChange={(value) => handleInputChange("workType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select work type" />
                        </SelectTrigger>
                        <SelectContent>
                          {workTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body text-sm text-foreground flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Budget Range *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body text-sm text-foreground flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Timeline *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div className="space-y-2">
                    <label className="font-body text-sm text-foreground">Project Brief *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your vision. What story do you want the artwork to tell? Include details about size, colors, themes, or any specific requirements."
                      rows={6}
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <label className="font-body text-sm text-foreground flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Reference Images (Optional)
                    </label>
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                    <p className="font-body text-xs text-muted-foreground">
                      Upload reference images, sketches, or inspiration (Max 5 files, 10MB each)
                    </p>
                  </div>

                  {/* Terms */}
                  <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                    <h4 className="font-display text-sm text-foreground">Commission Process</h4>
                    <ul className="font-body text-xs text-muted-foreground space-y-1">
                      <li>• 30% deposit required to start work</li>
                      <li>• Regular progress updates with photos</li>
                      <li>• Final payment on completion</li>
                      <li>• Shipping/delivery arranged after full payment</li>
                    </ul>
                  </div>

                  <Button type="submit" size="lg" className="w-full hero-button">
                    <Send className="mr-2 h-5 w-5" />
                    <span className="font-body">Send Commission Request</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-foreground mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <info.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-body text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-body text-foreground">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-foreground mb-4">
                  Follow the Journey
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <social.icon className={`h-5 w-5 ${social.color}`} />
                      <div>
                        <div className="font-body text-sm text-muted-foreground">
                          {social.label}
                        </div>
                        <div className="font-body text-foreground">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-lg text-foreground mb-2">
                  Quick Response Promise
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  I respond to all commission requests within 3 business days with a detailed quote and timeline.
                </p>
                <Badge className="bg-neon text-dark">
                  Usually within 24 hours
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-dark/5">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-display text-2xl md:text-3xl text-foreground mb-4">
            "Every piece starts with a conversation"
          </blockquote>
          <div className="font-body text-muted-foreground">— Jazzup</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
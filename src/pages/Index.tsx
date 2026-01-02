import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Settings, Download, ChevronRight, Star } from "lucide-react";
import nexusLogoSmall from "@/assets/nexus-logo-small.png";
import nexusLogoFull from "@/assets/nexus-logo-full.png";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Performance Boost",
      description: "Optimized rendering and FPS improvements for smoother gameplay."
    },
    {
      icon: Shield,
      title: "Anti-Cheat Compatible",
      description: "Works seamlessly with popular servers and anti-cheat systems."
    },
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Tailor every aspect of your client to match your playstyle."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={nexusLogoSmall} alt="Nexus Client" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold tracking-tight">Nexus Client</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Download</a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[128px] animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Version 2.0 Now Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              NEXUS CLIENT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The next generation Minecraft client. Enhanced performance, 
            stunning visuals, and complete customization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group">
              <Download className="w-5 h-5 mr-2" />
              Download Now
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border hover:bg-muted">
              View Features
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">50K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm">User Rating</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Everything you need to dominate the game, all in one client.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl border border-primary/20 bg-card/30 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">Level Up</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of players using Nexus Client for the ultimate Minecraft experience.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6">
              <Download className="w-5 h-5 mr-2" />
              Download Free
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Compatible with Windows, macOS, and Linux
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={nexusLogoSmall} alt="Nexus Client" className="w-8 h-8 rounded-lg" />
              <span className="font-bold">Nexus Client</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 Nexus Client. Not affiliated with Mojang or Microsoft.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

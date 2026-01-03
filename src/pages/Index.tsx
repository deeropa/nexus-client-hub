import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Settings, Download, ChevronRight, Star } from "lucide-react";
import nexusLogoSmall from "@/assets/nexus-logo-small.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Performance Boost",
      description: "Optimized rendering and FPS improvements for smoother gameplay.",
    },
    {
      icon: Shield,
      title: "Anti-Cheat Compatible",
      description: "Works seamlessly with popular servers and anti-cheat systems.",
    },
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Tailor every aspect of your client to match your playstyle.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={nexusLogoSmall} className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold">Nexus Client</span>
          </div>

          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollTo("features")} className="text-muted-foreground hover:text-foreground">
              Features
            </button>
            <button onClick={() => scrollTo("download")} className="text-muted-foreground hover:text-foreground">
              Download
            </button>
            <button onClick={() => scrollTo("community")} className="text-muted-foreground hover:text-foreground">
              Community
            </button>
          </div>

          <Button onClick={() => scrollTo("download")} className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-24 text-center">
        <div className="container px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Version 2.0 Now Available</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6">NEXUS CLIENT</h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The next generation Minecraft client. Enhanced performance, visuals, and customization.
          </p>

          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => scrollTo("download")} className="bg-primary px-8 py-6 text-lg">
              <Download className="w-5 h-5 mr-2" /> Download Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("features")} className="px-8 py-6 text-lg">
              View Features
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i}>
                <CardContent className="p-8 text-center">
                  <f.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-32 text-center">
        <h2 className="text-5xl font-bold mb-6">Download</h2>
        <Button size="lg" className="bg-primary px-10 py-6 text-lg">
          <Download className="w-5 h-5 mr-2" /> Download Free
        </Button>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-32 text-center">
        <h2 className="text-5xl font-bold mb-6">Community</h2>
        <Button size="lg" variant="outline">Join Discord</Button>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-muted-foreground">
        © 2026 Nexus Client
      </footer>
    </div>
  );
};

export default Index;

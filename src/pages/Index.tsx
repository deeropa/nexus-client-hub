import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Settings, Download, ChevronRight, Star } from "lucide-react";
import nexusLogoSmall from "@/assets/nexus-logo-small.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
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

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
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

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
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
            The next generation Minecraft client. Enhanced performance, visuals,
            and complete customization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group"
            >
              <a
                href="https://zale.wtf/deeropa/Nexus.jar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => scrollTo("features")}
            >
              View Features
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
            <div>
              <div className="text-3xl font-bold text-foreground">50K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm">User Rating</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to dominate the game.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <f.icon className="w-10 h-10 mx-auto mb-6 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD ================= */}
      <section id="download" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Download <span className="text-primary">Nexus Client</span>
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-10 py-6"
          >
            <a
              href="https://zale.wtf/deeropa/Nexus.jar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free
            </a>
          </Button>
        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section id="community" className="py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join the <span className="text-primary">Community</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Connect with players, share configs, and stay updated.
        </p>

        <Button asChild size="lg" variant="outline">
          <a
            href="https://discord.gg/JUQxgEqHp3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </a>
        </Button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        © 2026 Nexus Client. Not affiliated with Mojang or Microsoft.
      </footer>
    </div>
  );
}

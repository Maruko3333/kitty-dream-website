import { Star, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hello-kitty-hero.jpg";

const Hero = () => {
  return (
    <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Heart className="h-8 w-8 text-accent animate-sparkle" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="h-6 w-6 text-primary animate-sparkle" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="h-10 w-10 text-accent animate-sparkle" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-bounce-soft">
            Bun venit în lumea
            <span className="block text-primary drop-shadow-lg">Hello Kitty!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descoperă cele mai adorabile produse Hello Kitty care îți vor aduce zâmbetul pe buze și bucurie în suflet!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="kawaii-button text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              <Heart className="h-5 w-5 mr-2" />
              Explorează Produsele
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Vezi Colecțiile
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Produse</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10k+</div>
              <div className="text-white/80 text-sm">Clienți Fericiți</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99%</div>
              <div className="text-white/80 text-sm">Satisfacție</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
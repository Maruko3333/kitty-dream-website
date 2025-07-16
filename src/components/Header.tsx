import { Heart, ShoppingCart, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-full p-2 shadow-kawaii">
              <Heart className="h-6 w-6 text-primary-foreground animate-sparkle" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hello Kitty Store
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#acasa" className="text-foreground hover:text-primary transition-colors font-medium">
              Acasă
            </a>
            <a href="#produse" className="text-foreground hover:text-primary transition-colors font-medium">
              Produse
            </a>
            <a href="#despre" className="text-foreground hover:text-primary transition-colors font-medium">
              Despre Noi
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-secondary hover:scale-110 transition-all">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary hover:scale-110 transition-all">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex kawaii-button">
              <Star className="h-4 w-4 mr-2" />
              Comenzi
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
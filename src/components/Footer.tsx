import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary rounded-full p-2">
                <Heart className="h-6 w-6 text-primary-foreground animate-sparkle" />
              </div>
              <span className="text-2xl font-bold text-background">
                Hello Kitty Store
              </span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Magazinul tău preferat pentru produse Hello Kitty autentice și adorabile. 
              Aducem bucurie și zâmbete în fiecare zi!
            </p>
            <div className="flex space-x-4">
              <div className="bg-primary rounded-full p-2 hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="bg-primary rounded-full p-2 hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="bg-primary rounded-full p-2 hover:scale-110 transition-transform cursor-pointer">
                <Star className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li><a href="#acasa" className="text-background/80 hover:text-primary transition-colors">Acasă</a></li>
              <li><a href="#produse" className="text-background/80 hover:text-primary transition-colors">Produse</a></li>
              <li><a href="#despre" className="text-background/80 hover:text-primary transition-colors">Despre Noi</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Politica de Confidențialitate</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Termeni și Condiții</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">Str. Kawaii Nr. 123, București</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/80">+40 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/80">hello@hellokittystore.ro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Hello Kitty Store. Toate drepturile rezervate. 
            <span className="inline-flex items-center ml-2">
              Făcut cu <Heart className="h-4 w-4 mx-1 text-primary animate-sparkle" /> pentru iubitorii Hello Kitty
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
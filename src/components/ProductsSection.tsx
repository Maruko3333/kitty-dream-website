import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";

// Import images
import plushImage from "@/assets/hello-kitty-plush.jpg";
import mugImage from "@/assets/hello-kitty-mug.jpg";
import backpackImage from "@/assets/hello-kitty-backpack.jpg";
import phoneCaseImage from "@/assets/hello-kitty-phone-case.jpg";
import stickersImage from "@/assets/hello-kitty-stickers.jpg";

const products = [
  {
    id: 1,
    name: "Hello Kitty Plush Mare",
    price: "89,99 RON",
    originalPrice: "119,99 RON",
    image: plushImage,
    rating: 5,
    reviews: 127,
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Căni Hello Kitty Kawaii",
    price: "39,99 RON",
    image: mugImage,
    rating: 4,
    reviews: 89,
    isNew: false,
    isSale: false,
  },
  {
    id: 3,
    name: "Rucsac Hello Kitty",
    price: "149,99 RON",
    originalPrice: "199,99 RON",
    image: backpackImage,
    rating: 5,
    reviews: 203,
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Husă Telefon Hello Kitty",
    price: "29,99 RON",
    image: phoneCaseImage,
    rating: 4,
    reviews: 156,
    isNew: true,
    isSale: false,
  },
  {
    id: 5,
    name: "Set Stickere Hello Kitty",
    price: "19,99 RON",
    originalPrice: "24,99 RON",
    image: stickersImage,
    rating: 5,
    reviews: 334,
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Hello Kitty Plush Mini",
    price: "45,99 RON",
    image: plushImage,
    rating: 4,
    reviews: 92,
    isNew: true,
    isSale: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="produse" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-sparkle" />
            <span className="text-primary font-semibold text-lg">Produse Adorabile</span>
            <Sparkles className="h-6 w-6 text-primary animate-sparkle" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Colecția Noastră
            <span className="block text-primary">Hello Kitty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            De la jucării de plus adorabile la accesorii kawaii, avem tot ce îți trebuie 
            pentru a-ți aduce bucurie și zâmbete!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button className="kawaii-button text-lg px-8 py-4">
            <Heart className="h-5 w-5 mr-2" />
            Vezi Mai Multe Produse
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
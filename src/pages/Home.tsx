import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import mangoPickle from "@/assets/mango-pickle.jpg";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import sweets from "@/assets/sweets.jpg";
import snacks from "@/assets/snacks.jpg";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Powders", image: turmericPowder, path: "/products?category=powders" },
    { name: "Veg Pickles", image: mangoPickle, path: "/products?category=pickles" },
    { name: "Sweets", image: sweets, path: "/products?category=sweets" },
    { name: "Snacks", image: snacks, path: "/products?category=snacks" },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Premium Mango Pickle",
      price: 299,
      image: mangoPickle,
      category: "Pickles",
      rating: 4.8,
      reviews: 156,
      discount: 10,
      preservativeFree: true,
      noAddedColor: true,
    },
    {
      id: "2",
      name: "Organic Turmeric Powder",
      price: 149,
      image: turmericPowder,
      category: "Powders",
      rating: 4.9,
      reviews: 203,
      preservativeFree: true,
      noAddedColor: true,
    },
    {
      id: "3",
      name: "Traditional Ladoo",
      price: 399,
      image: sweets,
      category: "Sweets",
      rating: 4.7,
      reviews: 98,
      discount: 15,
      preservativeFree: true,
    },
    {
      id: "4",
      name: "Crispy Murukku",
      price: 199,
      image: snacks,
      category: "Snacks",
      rating: 4.6,
      reviews: 127,
      preservativeFree: true,
      noAddedColor: true,
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-card">
        <img
          src={heroBanner}
          alt="Tulasi Foods - Authentic Indian Delights"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Authentic Indian Flavors
          </h1>
          <p className="text-lg md:text-xl mb-4 text-white/90">
            Preservative-free, traditionally made delights
          </p>
          <Button
            onClick={() => navigate("/products")}
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center border-border bg-card">
          <ShieldCheck className="h-8 w-8 mx-auto mb-2 text-success" />
          <p className="font-semibold text-sm text-foreground">100% Authentic</p>
        </Card>
        <Card className="p-4 text-center border-border bg-card">
          <Leaf className="h-8 w-8 mx-auto mb-2 text-success" />
          <p className="font-semibold text-sm text-foreground">No Preservatives</p>
        </Card>
        <Card className="p-4 text-center border-border bg-card">
          <Leaf className="h-8 w-8 mx-auto mb-2 text-success" />
          <p className="font-semibold text-sm text-foreground">No Added Color</p>
        </Card>
        <Card className="p-4 text-center border-border bg-card">
          <ShieldCheck className="h-8 w-8 mx-auto mb-2 text-success" />
          <p className="font-semibold text-sm text-foreground">Traditional Recipe</p>
        </Card>
      </div>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Shop by Category
          </h2>
          <Button
            variant="ghost"
            onClick={() => navigate("/categories")}
            className="text-primary hover:text-primary-hover"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              onClick={() => navigate(category.path)}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-hover transition-all duration-300 bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-foreground">{category.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Handpicked favorites from our collection
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground p-8 md:p-12 text-center rounded-2xl shadow-card">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Experience Authentic Taste
        </h2>
        <p className="text-lg mb-6 text-primary-foreground/90">
          Made with love, following traditional recipes passed down through generations
        </p>
        <Button
          onClick={() => navigate("/products")}
          size="lg"
          variant="secondary"
          className="bg-card text-foreground hover:bg-card/90"
        >
          Explore All Products
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Card>
    </div>
  );
};

export default Home;

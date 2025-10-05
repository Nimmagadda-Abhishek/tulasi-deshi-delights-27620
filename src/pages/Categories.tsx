import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import mangoPickle from "@/assets/mango-pickle.jpg";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import sweets from "@/assets/sweets.jpg";
import snacks from "@/assets/snacks.jpg";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Powders",
      description: "Authentic spice powders ground with care",
      image: turmericPowder,
      count: 12,
      path: "/products?category=powders",
    },
    {
      name: "Veg Pickles",
      description: "Traditional pickles made from fresh vegetables",
      image: mangoPickle,
      count: 18,
      path: "/products?category=pickles",
    },
    {
      name: "Sweets",
      description: "Delicious Indian sweets for every occasion",
      image: sweets,
      count: 15,
      path: "/products?category=sweets",
    },
    {
      name: "Snacks",
      description: "Crispy and flavorful traditional snacks",
      image: snacks,
      count: 10,
      path: "/products?category=snacks",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Categories</h1>
        <p className="text-muted-foreground">
          Browse our collection of authentic Indian food products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Card
            key={category.name}
            onClick={() => navigate(category.path)}
            className="group cursor-pointer overflow-hidden border-border hover:shadow-hover transition-all duration-300 bg-card"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    {category.count} products available
                  </p>
                </div>
                <div className="flex items-center text-primary group-hover:text-primary-hover transition-colors mt-4">
                  <span className="font-semibold">Browse {category.name}</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;

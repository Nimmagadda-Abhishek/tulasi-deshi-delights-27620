import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { Search, SlidersHorizontal, X } from "lucide-react";
import mangoPickle from "@/assets/mango-pickle.jpg";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import sweets from "@/assets/sweets.jpg";
import snacks from "@/assets/snacks.jpg";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "Pickles", "Powders", "Sweets", "Snacks"];

  const allProducts = [
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
    {
      id: "5",
      name: "Mixed Veg Pickle",
      price: 249,
      image: mangoPickle,
      category: "Pickles",
      rating: 4.5,
      reviews: 89,
      preservativeFree: true,
      noAddedColor: true,
    },
    {
      id: "6",
      name: "Red Chilli Powder",
      price: 129,
      image: turmericPowder,
      category: "Powders",
      rating: 4.7,
      reviews: 145,
      preservativeFree: true,
      noAddedColor: true,
    },
    {
      id: "7",
      name: "Mysore Pak",
      price: 449,
      image: sweets,
      category: "Sweets",
      rating: 4.8,
      reviews: 112,
      discount: 20,
      preservativeFree: true,
    },
    {
      id: "8",
      name: "Spicy Mixture",
      price: 179,
      image: snacks,
      category: "Snacks",
      rating: 4.5,
      reviews: 76,
      preservativeFree: true,
      noAddedColor: true,
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Our Products</h1>
        <p className="text-muted-foreground">
          Discover our range of authentic, preservative-free Indian delicacies
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-card border-border"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category || (!selectedCategory && category === "All") ? "default" : "outline"}
            className={`cursor-pointer px-4 py-2 text-sm ${
              selectedCategory === category || (!selectedCategory && category === "All")
                ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                : "hover:bg-muted"
            }`}
            onClick={() => setSelectedCategory(category === "All" ? null : category)}
          >
            {category}
            {selectedCategory === category && category !== "All" && (
              <X className="ml-2 h-3 w-3" />
            )}
          </Badge>
        ))}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No products found. Try a different search or category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;

import { useState } from "react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import { Search as SearchIcon } from "lucide-react";
import mangoPickle from "@/assets/mango-pickle.jpg";
import turmericPowder from "@/assets/turmeric-powder.jpg";
import sweets from "@/assets/sweets.jpg";
import snacks from "@/assets/snacks.jpg";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Search Products</h1>
        <p className="text-muted-foreground">
          Find your favorite authentic Indian delicacies
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for pickles, powders, sweets, snacks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 text-lg h-14 bg-card border-border"
          autoFocus
        />
      </div>

      {searchQuery && (
        <p className="text-muted-foreground">
          Found {filteredProducts.length} {filteredProducts.length === 1 ? "result" : "results"} for "{searchQuery}"
        </p>
      )}

      {/* Results */}
      {searchQuery ? (
        filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground text-lg">
              No products found for "{searchQuery}"
            </p>
            <p className="text-muted-foreground">
              Try different keywords or browse our categories
            </p>
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <SearchIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground text-lg">
            Start typing to search for products
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Heart, Star, ChevronLeft, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import mangoPickle from "@/assets/mango-pickle.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500g");

  // Mock product data
  const product = {
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
    description: "Our Premium Mango Pickle is made using traditional recipes passed down through generations. Each jar is carefully crafted with the finest raw mangoes, authentic spices, and pure oil. No preservatives or artificial colors are added, ensuring you get only the best, most authentic taste.",
    ingredients: ["Raw Mangoes", "Mustard Oil", "Red Chilli Powder", "Turmeric", "Fenugreek Seeds", "Salt", "Asafoetida"],
    weights: ["250g", "500g", "1kg"],
  };

  const discountedPrice = product.discount 
    ? product.price - (product.price * product.discount) / 100 
    : product.price;

  const handleAddToCart = () => {
    toast.success(`Added ${quantity}x ${product.name} (${selectedWeight}) to cart!`);
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="text-foreground hover:text-primary"
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Back
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <Card className="overflow-hidden border-border bg-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </Card>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2 bg-muted text-muted-foreground">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {product.preservativeFree && (
                <Badge className="bg-success text-success-foreground">
                  No Preservatives
                </Badge>
              )}
              {product.noAddedColor && (
                <Badge className="bg-success text-success-foreground">
                  No Added Color
                </Badge>
              )}
            </div>
          </div>

          <Separator />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-primary">
              ₹{discountedPrice.toFixed(2)}
            </span>
            {product.discount && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.price.toFixed(2)}
                </span>
                <Badge className="bg-accent text-accent-foreground">
                  {product.discount}% OFF
                </Badge>
              </>
            )}
          </div>

          <Separator />

          {/* Weight Selection */}
          <div>
            <p className="font-semibold mb-3 text-foreground">Select Weight:</p>
            <div className="flex gap-3">
              {product.weights.map((weight) => (
                <Button
                  key={weight}
                  variant={selectedWeight === weight ? "default" : "outline"}
                  onClick={() => setSelectedWeight(weight)}
                  className={selectedWeight === weight ? "bg-primary text-primary-foreground" : ""}
                >
                  {weight}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <p className="font-semibold mb-3 text-foreground">Quantity:</p>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold w-12 text-center text-foreground">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= 10}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => toast.success("Added to wishlist!")}
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold mb-3 text-foreground">Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="text-xl font-bold mb-3 text-foreground">Ingredients</h2>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient) => (
                <Badge key={ingredient} variant="secondary">
                  {ingredient}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

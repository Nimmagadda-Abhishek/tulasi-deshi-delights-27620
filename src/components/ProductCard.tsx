import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  reviews?: number;
  discount?: number;
  preservativeFree?: boolean;
  noAddedColor?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  category,
  rating = 4.5,
  reviews = 0,
  discount,
  preservativeFree,
  noAddedColor,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id,
      name,
      price: discountedPrice,
      image,
    });
    toast.success(`${name} added to cart!`);
  };

  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <Card
      onClick={() => navigate(`/product/${id}`)}
      className="group cursor-pointer overflow-hidden border-border hover:shadow-hover transition-all duration-300 bg-card"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
            {discount}% OFF
          </Badge>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {preservativeFree && (
            <Badge variant="secondary" className="text-xs bg-success text-success-foreground">
              No Preservatives
            </Badge>
          )}
          {noAddedColor && (
            <Badge variant="secondary" className="text-xs bg-success text-success-foreground">
              No Added Color
            </Badge>
          )}
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {category}
        </p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{rating}</span>
          {reviews > 0 && (
            <span className="text-xs text-muted-foreground">({reviews})</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              ₹{discountedPrice.toFixed(2)}
            </span>
            {discount && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full mt-3 bg-primary hover:bg-primary-hover text-primary-foreground"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;

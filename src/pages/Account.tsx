import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Package, Heart, Settings, LogOut, ChevronRight } from "lucide-react";

const Account = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuItems = [
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Package, label: "My Orders", path: "/orders" },
    { icon: Heart, label: "Wishlist", path: "/wishlist" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  if (!isLoggedIn) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="h-24 w-24 rounded-full bg-muted mx-auto flex items-center justify-center">
            <User className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Welcome to Tulasi Foods</h1>
          <p className="text-muted-foreground">
            Sign in to access your orders and manage your account
          </p>
        </div>

        <Card className="p-6 border-border bg-card">
          <div className="space-y-4">
            <Button
              onClick={() => navigate("/auth")}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
              size="lg"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate("/auth?mode=signup")}
              variant="outline"
              className="w-full"
              size="lg"
            >
              Create Account
            </Button>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card">
          <h2 className="font-semibold mb-4 text-foreground">Why create an account?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Track your orders in real-time
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Save your favorite products
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Faster checkout process
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              Exclusive offers and discounts
            </li>
          </ul>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-4">
        <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center">
          <User className="h-10 w-10 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">John Doe</h1>
          <p className="text-muted-foreground">john.doe@example.com</p>
        </div>
      </div>

      <Card className="border-border bg-card">
        <div className="divide-y divide-border">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </Card>

      <Button
        variant="outline"
        className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
        onClick={() => setIsLoggedIn(false)}
      >
        <LogOut className="h-5 w-5 mr-2" />
        Sign Out
      </Button>
    </div>
  );
};

export default Account;
